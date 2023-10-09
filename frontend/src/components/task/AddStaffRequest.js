import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function AddStaffRequest(){

  const [staffsize, setStaffSize] = useState("");
  const [workarea, setWorkArea] = useState("");
  const [reqdate, setReqDate] = useState("");
  const [cnumber, setCNumber] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newStaffRequest ={
        staffsize,
        workarea,
        reqdate,
        cnumber
    }

    if(staffsize.length==0||workarea.length==0||reqdate.length==0||cnumber.length==0)
    setError(true)
    if(staffsize&&workarea&&reqdate&&cnumber)
    {
      console.log("StaffSize:",staffsize,"WorkArea:",workarea,"ReqDate:",reqdate,"CNumber:",cnumber)
    }

    axios.post("http://localhost:8070/staffrequest/addstaffrequest",newStaffRequest).then(()=>{ 
      alert("Route Added")
      setStaffSize("");
      setWorkArea("");
      setReqDate("");
      setCNumber("");

      navigate('/home')
      
    }).catch((err)=>{
      alert(err)
    })

    
    
  
  }


 

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="staffbg.png" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>REQUEST</b> <b class="text-success">STAFF</b></h1>
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

        <div class="card text-dark  mb-3" style={{width: '1000px', backgroundColor:'#E0E0E0'}}>
        
        <div class="card-body"> 
        <br></br>
        <h1 class="card-title text-success"><b>REQUESTING STAFF</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Number of Staff:</b></label>
                  <input type="number" class="form-control is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setStaffSize(e.target.value = e.target.value.slice(0, 1));
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&staffsize.length<=0?<lable class="text" style={{color:'#FF0000'}}>Number of Staff can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Area of Work:</b></label>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setWorkArea(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&workarea.length<=0?<lable class="text" style={{color:'#FF0000'}}>Area of Work can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Date:</b></label>
                  <input type="date" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" min={new Date().toISOString().split('T')[0]}
                  onChange={(e)=>{

                    setReqDate(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&reqdate.length<=0?<lable class="text" style={{color:'#FF0000'}}>Date can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Contact No:</b></label>
                  <input type="tel" class="form-control is-invalid"   id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setCNumber(e.target.value = e.target.value.slice(0, 10));
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&cnumber.length<=0?<lable class="text" style={{color:'#FF0000'}}>Contact Number can't be empty!</lable>:""}
                  </div>

              </div>
             
              <div class="col-12">
              <br></br>
              <button type="submit" class="btn btn-success" onClick={sendData}>SUBMIT</button>
    
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