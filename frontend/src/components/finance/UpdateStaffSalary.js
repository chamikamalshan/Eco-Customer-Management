import {useParams,useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState,useEffect} from "react";

export default function UpdateStaffSalary(){

  const [syear, setSYear] = React.useState("");
  const [smonth, setSMonth] = React.useState("");
  const [sweek, setSWeek] = React.useState("");
  const [samount, setSAmount] = React.useState("");
  const [sstatus, setSStatus] = React.useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const params = useParams();
  const data = location.state;
  const navigate = useNavigate();

  useEffect(()=>{
    getStaffSalaryDetails();
  },[])

  const getStaffSalaryDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/staffsalary/getssalary/${params.id}`);
    result = await result.json();
    setSYear(result.syear);
    setSMonth(result.smonth);
    setSWeek(result.sweek);
    setSAmount(result.samount);
    setSStatus(result.sstatus);
  }

  const UpdateStaffSalary = async () =>{
    console.warn(syear,smonth,sweek,samount,sstatus)
    let result = await fetch(`http://localhost:8070/staffsalary/updatessalary/${params.id}`,{
      method:'put',
      body:JSON.stringify({syear,smonth,sweek,samount,sstatus}),
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
           <img src="financebg.png" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>STAFF</b> <b class="text-success">SALARY</b></h1>
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
        <h1 class="card-title text-success"><b>UPDATE WEEKLY SALARIES</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Year:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={syear}
                  onChange={(e)=>{

                    setSYear(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                  <div className="invalid-feedback">
                    {error&&syear.length<=0?<lable class="text" style={{color:'#FF0000'}}>Year can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Month:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={smonth}
                  onChange={(e)=>{

                    setSMonth(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <div className="invalid-feedback">
                  {error&&smonth.length<=0?<lable class="text" style={{color:'#FF0000'}}>Month can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Week:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={sweek}
                  onChange={(e)=>{

                    setSWeek(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="week 1">week 1</option>
                    <option value="week 2">week 2</option>
                    <option value="week 3">week 3</option>
                    <option value="week 4">week 4</option>
                  </select>
                  <div className="invalid-feedback">
                    {error&&sweek.length<=0?<lable class="text" style={{color:'#FF0000'}}>Week can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Total Amount:</b></label>
                  <div class="input-group mb-3">
                  <span class="input-group-text">Rs.</span>
                  <input type="number" class="form-control is-invalid" id="validationServer01" aria-label="Amount (to the nearest dollar)" value={samount}
                  onChange={(e)=>{

                    setSAmount(e.target.value);
                  
                    }}required/>
                    <span class="input-group-text">.00</span>
                    <div className="invalid-feedback">
                  {error&&samount.length<=0?<lable class="text" style={{color:'#FF0000'}}>Total Amount can't be empty!</lable>:""}
                  </div>
                  </div>
                  
              </div>
              <div class="col-12">
                  <label for="inputAddress" class="form-label" style={{float: 'left'}}><b>Status:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={sstatus}
                  onChange={(e)=>{

                    setSStatus(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option className="text-danger" value="Under Calculations">Under Calculations</option>
                    <option className="text-success" value="Completed">Completed</option>
                  </select>
                  <div className="invalid-feedback">
                  {error&&sstatus.length<=0?<lable class="text" style={{color:'#FF0000'}}>Status can't be empty!</lable>:""}
                  </div>
              </div>
             
              <div class="col-12">
              <br></br>
              <button type="submit" class="btn btn-success" onClick={UpdateStaffSalary}>SUBMIT</button>
    
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