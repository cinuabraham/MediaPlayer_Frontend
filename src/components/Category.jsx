import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { addToCategory, deleteACategoryname, getAllCategory, getAVideo, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';



function Category() {

  const [show, setShow] = useState(false);
  const [CategoryName, setCategoryName] =  useState("")
  const [category, setCategory] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//function to add category
const handleAddCategory = async()=>{
  console.log(CategoryName);
  
  if(CategoryName){
    
    let body ={
      CategoryName,
      allvideos:[]
    }
    const response = await addToCategory(body)
    console.log(response);
    if (response.status>=200 && response.status<300){
      toast.success('Category Added Successfully')
      //get all category 
      allCategory()
      //to empty the state
      setCategoryName("")
      //close Modal
      handleClose()
    }
    else{
      toast.error('something went wrong. Please try Again')
    }
    
  }
  else{
   toast.warning('Please fill the Category Name')
  }

}

//function to get all categories
const allCategory = async()=>{
  const {data}= await getAllCategory()
  /*console.log(data);*/
  setCategory(data)
  
}
console.log(category);

//function to delete category name 
const removeCategory = async (id)=>{
deleteACategoryname(id)
//to get the remaining category
allCategory()
}

//function to prevent reload
const dragOver = (e)=>{
  e.preventDefault()
}

//function to drop video card to category

const VideoDrop = async(e,Categoryid)=>{
  console.log(`category in which videoCard is Dropped :${Categoryid}`);
  let videoID = e.dataTransfer.getData("videoID")
  console.log(videoID);

  //api to get a video
const {data}= await getAVideo(videoID)
console.log(data);

let selectedCategory = category .find((item)=>item?.id===Categoryid)
selectedCategory.allvideos.push(data)
console.log(selectedCategory);
await updateCategory(Categoryid,selectedCategory)
allCategory()

}

useEffect(()=>{
  allCategory()
},[])

  return (
    <>
    <div className='d-grid ms-3'>
      <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
    </div>

    { category?.length>0?
    category?.map((item)=>(
      <div className='m-5 border border-secondary p-3 rounded' droppable onDragOver={(e)=>dragOver(e)} 
      onDrop={(e)=>VideoDrop(e,item?.id)}>
           <div className="d-flex justify-content-between align-items-center">
            <h6>{item.CategoryName}</h6>
            <button onClick={()=>removeCategory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>

           </div>
           <Row>
            <Col>
            {
              item?.allvideos.length>0?
              item?.allvideos.map((card)=>(<VideoCard displayvideo={card} isPresent={true}/>))
 
              :<p>Nothing to Display</p>
            }
            </Col>
           </Row>
        
    </div>))
    :<p className='fw-bolder fs-5 text-danger m-3'>Nothing to display</p>
    }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil text-warning me-2"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form className='border border-secondary rounded p-3'>
         
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Category Name</Form.Label>
               <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
          </Form.Group>
        </Form>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
      
    </>
  )
}

export default Category