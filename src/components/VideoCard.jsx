import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteAVideo } from '../services/allAPI';
import Modal from 'react-bootstrap/Modal';

function VideoCard({displayvideo, setDeleteVideoStatus, isPresent}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)

    const {caption, embedLink} = displayvideo
    const today = new Date()
    let timestamp = new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp);

    let videoDetails = {
      caption,embedLink,timestamp
    }
    
    const response = await addToHistory(videoDetails)
    console.log(response);
    
  }

  const removeVideo = async(id)=>{
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }

//function to drag a particular card

const dragStart= (e,id)=>{
  console.log(`card that dragged is :${id}`);
  //to transfer id from videocard to Category
  e.dataTransfer.setData("videoID",id)
}

  return (
    <>
      
      <Card style={{ width: '100%',height:'300px' }} className='mb-4' draggable onDragStart={(e)=>dragStart(e,displayvideo?.id)}>
      <Card.Img onClick={handleShow} height={'235px'} variant="top" src={displayvideo.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayvideo.caption}</h6>
        {  !isPresent? <button onClick={()=>removeVideo(displayvideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"> </i></button>: <button  className='btn btn-warning'><i class="fa-solid fa-trash-can"> </i></button>
       }      

</Card.Title>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayvideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="515" src={`${displayvideo.embedLink}?autoplay=1`} title={displayvideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
      
    </>
  )
}

export default VideoCard