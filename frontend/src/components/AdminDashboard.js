import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, { useState } from 'react'
import Cookies from 'js-cookie'

export default function AdminDashboard() {

    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    const cookieVal=Cookies.get("username")

    const [fullname,FullName] = useState('')

    const logOut=()=>{
      Cookies.remove("username")
      navigate('/home')
    }

  return (
   

    <div >
    <div class="card bg-dark text-white" >
    <img src="homebg.png" class="card-img" alt="..." style={{height: '375px',filter: 'brightness(40%)'}}/>
      <div class="card-img-overlay">
        <br></br>
        <br></br>
          <h1 class="card-title" style={{fontSize: '90px'}}><b>ADMIN</b> <b class="text-success">DASHBOARD</b></h1>
          <br></br>
          <br></br>
          <br></br>

      </div>
    </div>


    <br></br>
    <br></br>
    <h1>Hello {fullname}</h1>
                <h3>Your user name: {cookieVal}</h3>
                <br></br>
                <button  class="btn btn-danger" onClick={logOut}>Logout</button>

    <div >
    <br></br>
    <br></br>

    <div class="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft: '40px'}}>


    <div class="col" style={{maxWidth: '300px',marginLeft: '40px'}}>
    <div class="card text-white bg-success" style={{height:'300px',filter: 'brightness(80%)'}}>
    <br></br>
    <br></br>
    <center>
    <i class="fa-solid fa-landmark fa-5x"></i>
    <br></br>
    <br></br>
    <h2 class="card-title"><b class="text-white">FINANCE</b></h2>
    </center>
    <br></br>
    <div class="card-body">
    <Link to='/financedash'>
    <button type="button" class="btn btn-outline-light" style={{}}>CLICK</button>
    </Link>
    </div>
    </div>
    </div>
    

    <div class="col" style={{maxWidth: '300px',marginLeft: '40px'}}>
    <div class="card text-white bg-success" style={{height:'300px',filter: 'brightness(80%)'}}>
    <br></br>
    <br></br>
    <center>
    <i class="fa-solid fa-list-check fa-5x"></i>
    <br></br>
    <br></br>
    <h2 class="card-title"><b class="text-white">TASK</b></h2>
    </center>
    <br></br>
    <div class="card-body">
    <Link to='/taskdash'>
    <button type="button" class="btn btn-outline-light" style={{}}>CLICK</button>
    </Link>
    </div>
    </div>
    </div>


    <div class="col" style={{maxWidth: '300px',marginLeft: '40px'}}>
    <div class="card text-white bg-success" style={{height:'300px',filter: 'brightness(80%)'}}>
    <br></br>
    <br></br>
    <center>
    <i class="fa-solid fa-box-open fa-5x"></i>
    <br></br>
    <br></br>
    <h2 class="card-title"><b class="text-white">PRODUCT</b></h2>
    </center>
    <br></br>
    <div class="card-body">
    <Link to='/productdash'>
    <button type="button" class="btn btn-outline-light" style={{}}>CLICK</button>
    </Link>
    </div>
    </div>
    </div>


    <div class="col" style={{maxWidth: '300px',marginLeft: '40px'}}>
    <div class="card text-white bg-success" style={{height:'300px',filter: 'brightness(80%)'}}>
    <br></br>
    <br></br>
    <center>
    <i class="fa-solid fa-truck-fast fa-5x"></i>
    <br></br>
    <br></br>
    <h2 class="card-title"><b class="text-white">VEHICLE</b></h2>
    </center>
    <br></br>
    <div class="card-body">
    <Link to='/allrroute'>
    <button type="button" class="btn btn-outline-light" style={{}}>CLICK</button>
    </Link>
    </div>
    </div>
    </div>


    <div class="col" style={{maxWidth: '300px',marginLeft: '40px'}}>
    <div class="card text-white bg-success" style={{height:'300px',filter: 'brightness(80%)'}}>
    <br></br>
    <br></br>
    <center>
    <i class="fa-solid fa-user-group fa-5x"></i>
    <br></br>
    <br></br>
    <h2 class="card-title"><b class="text-white">STAFF</b></h2>
    </center>
    <br></br>
    <div class="card-body">
    <Link to='/staffdash'>
    <button type="button" class="btn btn-outline-light" style={{}}>CLICK</button>
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
