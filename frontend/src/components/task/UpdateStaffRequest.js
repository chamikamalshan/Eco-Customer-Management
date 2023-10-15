import {useParams,useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState,useEffect} from "react";


export default function UpdateStaffRequest(){

  const [staffsize, setStaffSize] = React.useState("");
  const [workarea, setWorkArea] = React.useState("");
  const [reqdate, setReqDate] = React.useState("");
  const [cnumber, setCNumber] = React.useState("");
  const [reqstatus, setReqStatus] = React.useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getStaffRequestDetails();
  },[])

  const getStaffRequestDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/staffrequest/getstaffrequest/${params.id}`);
    result = await result.json();
    setStaffSize(result.staffsize);
    setWorkArea(result.workarea);
    setReqDate(result.reqdate);
    setCNumber(result.cnumber);
    setReqStatus(result.reqstatus);
  }

  const UpdateStaffRequest = async () =>{
    console.warn(staffsize,workarea,reqdate,cnumber,reqstatus)
    let result = await fetch(`http://localhost:8070/staffrequest/updatestaffrequest/${params.id}`,{
      method:'put',
      body:JSON.stringify({staffsize,workarea,reqdate,cnumber,reqstatus}),
      headers:{
        'Content-Type':'Application/json'
      }

    });
    result = await result.json()
    if(result){
      
      
      alert("Update Successfully")
      
    }
    
  }
 


 

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="staffbg.png" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>UPDATE REQUEST</b> <b class="text-success">STAFF</b></h1>
                <br></br>
                <br></br>
                <br></br>

                

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
                  <input type="number" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" value={staffsize}
                  onChange={(e)=>{

                    setStaffSize(e.target.value = e.target.value.slice(0, 1));
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&staffsize.length<=0?<lable class="text" style={{color:'#FF0000'}}>Number of Staff can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Area of Work:</b></label>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" value={workarea}
                  onChange={(e)=>{

                    setWorkArea(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&workarea.length<=0?<lable class="text" style={{color:'#FF0000'}}>Area of Work can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Date:</b></label>
                  <input type="date" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" min={new Date().toISOString().split('T')[0]} value={reqdate}
                  onChange={(e)=>{

                    setReqDate(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&reqdate.length<=0?<lable class="text" style={{color:'#FF0000'}}>Date can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Contact No:</b></label>
                  <input type="tel" class="form-control is-invalid"   id="validationServer01" aria-label="Default select example" value={cnumber}
                  onChange={(e)=>{

                    setCNumber(e.target.value = e.target.value.slice(0, 10));
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&cnumber.length<=0?<lable class="text" style={{color:'#FF0000'}}>Contact Number can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Status:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={reqstatus}
                  onChange={(e)=>{

                    setReqStatus(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="Special Service">Special Service</option>
                    <option value="Regular Service">Regular Service</option>
                    </select>
                    <div className="invalid-feedback">
                  {error&&reqstatus.length<=0?<lable class="text" style={{color:'#FF0000'}}>Status can't be empty!</lable>:""}
                  </div> 
              </div>
             
              <div class="col-12">
              <br></br>
              <Link to='/taskdash'>
              <button type="submit" class="btn btn-success" onClick={UpdateStaffRequest}>SUBMIT</button>
              </Link>
    
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