
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar9.css';
import Cookies from 'js-cookie';

function Header(){

   const cookieVal=Cookies.get("username")

    const navigate = useNavigate();

    const logOut=()=>{
         Cookies.remove("username") 
    }

    

    


    return(


      <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
      <img src="logonavbar.png" alt="" style={{width: '40px', height: '40px', marginLeft:'40px'}}/>
      </a>
      <ul class="nav nav-pills bg-dark justify-content-end ">

      <li class="nav-item">
           <Link to="/home" className="nav-link " > <b>HOME</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/all" className="nav-link "> <b>ALL REQUESTS</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/workingdays" className="nav-link "> <b>WORKING DAYS</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/routedash" className="nav-link "> <b>ROUTES</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/financedash" className="nav-link "> <b>FINANCE</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/wastedash" className="nav-link "> <b>WASTE</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/track" className="nav-link "> <b>SERVICES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></Link>
        </li>
      <li class="nav-item" id='logout' style={{color:'white', marginTop:'6px', marginRight:'15px'}}>
        <h><i class="fa-solid fa-circle-user fa-xl"></i>&nbsp;&nbsp;{cookieVal}&nbsp;&nbsp;&nbsp;&nbsp;</h>
        <button  class="btn btn-success" onClick={logOut}>Logout</button>
      </li>
      <li class="nav-item" id='logout' style={{color:'white', marginTop:'6px', marginRight:'15px'}}>
      <Link to="/login"><button  class="btn btn-success">Login</button></Link>
      </li>

      </ul>
        
      
      </nav>

      


      
  
    )
}
export default Header;
