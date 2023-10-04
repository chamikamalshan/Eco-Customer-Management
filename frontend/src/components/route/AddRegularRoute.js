import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function AddRegularRoute(){

  const [rdayid, setRDayID] = useState("");
  const [rday, setRDay] = useState("");
  const [rroute, setRRoute] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newRegularRoute ={
      rdayid,
      rday,
      rroute
     
    }

    if(rdayid.length==0||rday.length==0||rroute.length==0)
    setError(true)
    if(rdayid&&rday&&rroute)
    {
      console.log("RDayID:",rdayid,"RDay:",rday,"RRoute:",rroute)
    }

    axios.post("http://localhost:8070/regularroute/addrroute",newRegularRoute).then(()=>{
      alert("Route Added")
      setRDayID("");
      setRDay("");
      setRRoute("");

      navigate('/home')
      
    }).catch((err)=>{
      alert(err)
    })

    
    
  
  }

  const hadleSubmit=(e)=>{
    e.preventDefault();
    
  }

 

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="trackingbg.png" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>REGULAR</b> <b class="text-success">ROUTE</b></h1>
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

        <div class="card text-dark  mb-3" style={{width: '1000px', float: 'left', backgroundColor:'#E0E0E0',marginLeft: '20px'}}>
        
        <div class="card-body"> 
        <br></br>
        <h1 class="card-title text-success"><b>ADD NEW ROUTE</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Day ID:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setRDayID(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                  <div className="invalid-feedback">
                    {error&&rdayid.length<=0?<lable class="text" style={{color:'#FF0000'}}>Day ID can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Day:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setRDay(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                  <div className="invalid-feedback">
                  {error&&rday.length<=0?<lable class="text" style={{color:'#FF0000'}}>Day can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
                  <label for="inputAddress" class="form-label" style={{float: 'left'}}><b>Route:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setRRoute(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="Tranquil Terrace to Malabe">Tranquil Terrace to Malabe</option>
                    <option value="Tranquil Terrace to Kaduwela">Tranquil Terrace to Kaduwela</option>
                    <option value="Kaduwela to Biyagama">Kaduwela to Biyagama</option>
                  </select>
                  <div className="invalid-feedback">
                  {error&&rroute.length<=0?<lable class="text" style={{color:'#FF0000'}}>Route can't be empty!</lable>:""}
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

        <div className="map-section">
          <div className="gmap-frame">
          <div style={{width: '100%'}}><iframe width="450" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=300&amp;height=800&amp;hl=en&amp;q=SLIIT,%20New%20Kandy%20Road,%20Malabe+(eco%20waste)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe></div>
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