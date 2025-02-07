import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  return (

    <div style={{height:'300px'}} className='d-flex justify-content-centre align-items-center w-100 flex-column'>
      <div className='d-flex justify-content-evenly align-items-center w-100'>
        
        <div className="websites" style={{width:'400px'}}>
          <h4 className='mb-3'>
            <i class="fa-solid fa-video fa-beat-fade text-warning me-3"></i>Video Player 
            </h4>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, perferendis quis adipisci suscipit ut labore facilis fugiat repellendus unde quo, provident enim quasi, consectetur</h6> <h6>delectus eligendi nostrum architecto atque. Magni.</h6>
        </div>
       
        <div className="links d-flex flex-column">

          <h4 className='mb-3'>Links</h4>
          <Link to ={'/'} style = {{textDecoration:'none', color:'white'}}> Landing Page</Link>
          <Link to ={'/home'} style = {{textDecoration:'none', color:'white'}}> Home Page</Link>
          <Link to ={'/watch-history'} style = {{textDecoration:'none', color:'white'}}> Watch History</Link>
        </div>
        
        <div className="guides  d-flex flex-column">

        <h4 className='mb-3'>Guides</h4>
          <Link to ={'https://bootswatch.com/'} style = {{textDecoration:'none', color:'white'}}> React</Link>
          <Link to ={'https://react-bootstrap.github.io/'} style = {{textDecoration:'none', color:'white'}}> React Bootstrap</Link>
          <Link to ={'https://bootswatch.com/'} style = {{textDecoration:'none', color:'white'}}> Bootswatch</Link>
        </div>
        
        <div className="contacts  d-flex flex-column">
          <h4 className='mb-3'>Contact Us</h4>
          <div className='d-flex mb-2'>
            <input type="text" className='form-control' placeholder='Enter your Email ID' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center'>
          <Link to ={'/'} style = {{textDecoration:'none', color:'white'}}><i class="fa-brands fa-square-instagram fa-2x"></i> </Link>
          <Link to ={'/home'} style = {{textDecoration:'none', color:'white'}}> <i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to ={'/watch-history'} style = {{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i> </Link>
          <Link to ={'/watch-history'} style = {{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i> </Link>
          </div>
        </div>

      </div>
      <p className='mt-5'>Copyright © 2023 Media Player. Built with React.</p>

    </div>
  )
}

export default Footer