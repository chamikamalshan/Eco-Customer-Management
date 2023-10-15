import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function Tracking(){

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [patientname, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [nic, setNIC] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newAppointment ={
      doctor,
      date,
      patientname,
      age,
      gender,
      nic,
      phone
     
    }
    axios.post("http://localhost:8070/appointment/add",newAppointment).then(()=>{
      alert("Class Added")
      setDoctor("");
      setDate("");
      setPatientName("");
      setAge("");
      setGender("");
      setNIC("");
      setPhone("");
      
    }).catch((err)=>{
      alert(err)
    })

    navigate('/')
    
  
  }

  const hadleSubmit=(e)=>{
    e.preventDefault();
    if(date.length==0||patientname.length==0||age.length==0||gender.length==0||nic.length==0||phone.length==0)
    setError(true)
    if(date&&patientname&&age&&gender&&nic&&phone)
    {
      console.log("Doctor:",doctor,"Appointment Date:",date,"Patient Name:",patientname,"Age:",age,"Gender:",gender,"NIC:",nic,"Phone No:",phone)
    }
  }

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="trackingbg.png" class="card-img" alt="..." style={{height: '375px',filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>TRACK</b> <b class="text-success">ROUTE</b></h1>
                <br></br>
                <br></br>
                <br></br>

                <div class="btn-group" role="group" aria-label="Basic example" style={{float: 'right'}}>
                <Link to='/viewproduct'>
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

        <div class="card text-dark  mb-3" style={{width: '1000px', float: 'left', backgroundColor:'#E0E0E0',marginLeft: '250px'}}>
        
        <div class="card-body"> 
        <br></br>
        <h1 class="card-title text-success"><b>TRACKING DETAILS</b></h1>
        <br></br>

          <form class="row g-3">
              
              <div class="col-12">
                  <label for="inputAddress2" class="form-label" style={{float: 'left'}}><b>Date:</b></label>
                  <input type='text' class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                  onChange={(e)=>{

                    setPhone(e.target.value);
        
                  }}required/>
                  <div className="valid-feedback">
                  {error&&doctor.length<=0?<lable class="text" style={{color:'#FF0000'}}>Message can't be empty!</lable>:""}
                  </div>
              </div>
              <br></br>
              <br></br>

              <div class="col-12">
                  <label for="inputAddress2" class="form-label" style={{float: 'left'}}><b>Link:</b></label>
                  <input type='text' class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                  onChange={(e)=>{

                    setPhone(e.target.value);
        
                  }}required/>
                  <div className="valid-feedback">
                  {error&&doctor.length<=0?<lable class="text" style={{color:'#FF0000'}}>Message can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
              <br></br>
              <br></br>
              <button type="submit" class="btn btn-success" onClick={sendData}>CHECK</button>
    
              </div>
  
          </form>
          
        <br></br>
        

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