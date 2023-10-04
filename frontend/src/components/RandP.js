import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function RandP(){

  
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  
    

  

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="randp.png" class="card-img" alt="..." style={{height: '375px',filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>RESEARCHES AND</b> <b class="text-success">PRODUCTS</b></h1>
                <br></br>
                <br></br>
                <br></br>

                <div class="btn-group" role="group" aria-label="Basic example" style={{float: 'right'}}>
                <Link to='/randp'>
                <button type="button" class="btn1 btn-success btn-lg" style={{marginRight: '50px'}}>RESEARCH AND PRODUCTS</button>
                </Link>
                <Link to='/requests'>
                <button type="button" class="btn2 btn-success btn-lg" style={{marginRight: '50px'}}>REQUEST PICKUP</button>
                </Link>
                <button type="button" class="btn3 btn-success btn-lg" style={{marginRight: '50px'}}>PAYMENT</button>
                </div>

             </div>
          </div>

          
          <br></br>
          <br></br>

        <div >

<div class="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft: '40px'}}>
  <div class="col" style={{maxWidth: '420px',marginLeft: '40px'}}>
    <div class="card" style={{backgroundColor:'#E0E0E0'}}>
      <br></br>
      <center>
      <h3 class="card-title"><b class="text-success">RESEARCH NAME</b></h3>
      <br></br>
            <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
            <div class="card-header"><h5 class="card-title">DESCRIPTION</h5></div>
            <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
      <img src="p01.png" class="card-img-top" alt="..." style={{maxWidth: '180px',height:'180px'}}/>
      </center>
      <br></br>
      <div class="card-body">
        <Link to='/r01'>
      <button type="button" class="btn btn-success">SHOP NOW</button>
      </Link>
      </div>
    </div>
  </div>
  <div class="col" style={{maxWidth: '420px',marginLeft: '40px'}}>
    <div class="card" style={{backgroundColor:'#E0E0E0'}}>
      <br></br>
      <center>
      <h3 class="card-title"><b class="text-success">RESEARCH NAME</b></h3>
      <br></br>
            <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
            <div class="card-header"><h5 class="card-title">DESCRIPTION</h5></div>
            <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
      <img src="p02.png" class="card-img-top" alt="..." style={{maxWidth: '180px', height:'180px'}}/>
      </center>
      <br></br>
      <div class="card-body">
      <Link to='/r02'>
      <button type="button" class="btn btn-success">SHOP NOW</button>
      </Link>
      </div>
    </div>
  </div>
  <div class="col" style={{maxWidth: '420px',marginLeft: '40px'}}>
    <div class="card" style={{backgroundColor:'#E0E0E0'}}>
      <br></br>
      <center>
      <h3 class="card-title"><b class="text-success">RESEARCH NAME</b></h3>
      <br></br>
            <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
            <div class="card-header"><h5 class="card-title">DESCRIPTION</h5></div>
            <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
      <img src="p03.png" class="card-img-top" alt="..." style={{maxWidth: '180px',height:'180px'}}/>
      </center>
      <br></br>
      
      <div class="card-body">
      <Link to='/r03'>
      <button type="button" class="btn btn-success">SHOP NOW</button>
      </Link>
      </div>
    </div>
  </div>
</div>



        

      </div>
      <br></br>
      <br></br>

      <div class="card bg-dark text-white" style={{height: '350px', width:'100%'}}>
           
             <div class="card-img-overlay">
              <br></br>
                <h3 class="card-title" style={{float: 'left'}}><b class="text-success">CONTACT</b></h3>
                <br></br>
                <i class="fa-brands fa-facebook fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <i class="fa-brands fa-instagram fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <i class="fa-brands fa-linkedin fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <br></br>
                <br></br>
                

                <div style={{float: 'left'}}>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-envelope"></i> &nbsp;&nbsp;&nbsp;ecowaste@gmail.com</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-phone-volume"></i> &nbsp;&nbsp;&nbsp;071 159 0580</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp;&nbsp;168/7/4b,tranquil terrace,new kandy road,malabe</h5>
                
                </div>

                <div style={{float: 'right',width: '50%'}}>
                <h5 style={{textAlign: 'left'}}>HOME</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>ABOUT US</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>WORKING DAYS</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>SERVICES</h5>

                
                </div>
                <br></br>
                <br></br>
                <br></br>
                
                <h style={{float: 'left', marginLeft:'80%'}}>privacy policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; terms & conditions</h>

                
               
                
                

             </div>
          </div>



      
      </div>
      
      
    )
    
}