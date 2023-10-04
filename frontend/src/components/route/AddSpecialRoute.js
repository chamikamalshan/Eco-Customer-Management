import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useId,useState,useEffect} from "react";
import axios from "axios";


export default function AddSpecialRoute(){

  const [insid, setInSID] = useState("");
  const [sid, setSID] = useState("");
  const [sdistrict, setSDistrict] = useState("");
  const [smaincity, setSMainCity] = useState("");
  const [saddress, setSAddress] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newSpecialRoute ={
      sid,
      sdistrict,
      smaincity,
      saddress
     
    }

    if(sid.length==0||sdistrict.length==0||smaincity.length==0||saddress.length==0)
    setError(true)
    if(sid&&sdistrict&&smaincity&&saddress)
    {
      console.log("SID:",sid,"SDistrict:",sdistrict,"SMainCity:",smaincity,"SAddress:",saddress)
    }

    axios.post("http://localhost:8070/specialroute/addsroute",newSpecialRoute).then(()=>{
      alert("Route Added")
      setSID("");
      setSDistrict("");
      setSMainCity("");
      setSAddress("");

      navigate('/home')
      
    }).catch((err)=>{
      alert(err)
    })

    
    
  
  }

  useEffect(()=>{
    hadleSubmit()
  },[])

  const hadleSubmit=()=>{
    var range = "0123456789"
    var otpVal = ""
    for(var i=0;i<6;i++){
      otpVal +=range[Math.floor(Math.random()*10)]
    }
    setInSID(otpVal)
    
  }

 

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="trackingbg.png" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>SPECIAL</b> <b class="text-success">ROUTE</b></h1>
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
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>SID:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setSID(e.target.value);
                  
                    }}required>
                    <option value=""></option>
                    <option value={insid}>{insid}</option>
                    
                  </select>
                  <div className="invalid-feedback">
                    {error&&sid.length<=0?<lable class="text" style={{color:'#FF0000'}}>SID can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>District:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setSDistrict(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Gampaha">Gampaha</option>
                  </select>
                  <div className="invalid-feedback">
                  {error&&sdistrict.length<=0?<lable class="text" style={{color:'#FF0000'}}>District can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
                  <label for="inputAddress" class="form-label" style={{float: 'left'}}><b>Main City:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" size='6' aria-label="Default select example"
                  onChange={(e)=>{

                    setSMainCity(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="Avissawella">Avissawella</option>
                    <option value="Biyagama">Biyagama</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Dehiwala">Dehiwala</option>
                    <option value="Divulapitiya">Divulapitiya</option>
                    <option value="Homagama">Homagama</option>
                    <option value="Ja-Ela">Ja-Ela</option>
                    <option value="Kaduwela">Kaduwela</option>
                    <option value="Katana">Katana</option>
                    <option value="Kelaniya">Kelaniya</option>
                    <option value="Kesbewa">Kesbewa</option>
                    <option value="Kiridiwela">Kiridiwela</option>
                    <option value="Kolonnawa">Kolonnawa</option>
                    <option value="Mahara">Mahara</option>
                    <option value="Maharagama">Maharagama</option>
                    <option value="Minuwangoda">Minuwangoda</option>
                    <option value="Mirigama">Mirigama</option>
                    <option value="Moratuwa">Moratuwa</option>
                    <option value="Negombo">Negombo</option>
                    <option value="Nittambuwa">Nittambuwa</option>
                    <option value="Padukka">Padukka</option>
                    <option value="Sri Jayawardenepura Kotte">Sri Jayawardenepura Kotte</option>
                    <option value="Wattala">Wattala</option>
                  </select>
                  <div className="invalid-feedback">
                  {error&&smaincity.length<=0?<lable class="text" style={{color:'#FF0000'}}>Main City can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
                  <label for="inputAddress" class="form-label" style={{float: 'left'}}><b>Address:</b></label>
                  <input type='text' class="form-control is-invalid" id="validationServer01" 
                  onChange={(e)=>{

                    setSAddress(e.target.value);
                  
                    }}required/>
                    
                  <div className="invalid-feedback">
                  {error&&saddress.length<=0?<lable class="text" style={{color:'#FF0000'}}>Address can't be empty!</lable>:""}
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
          <div style={{width: '100%'}}><iframe width="450" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=300&amp;height=800&amp;hl=en&amp;q=SLIIT,%20New%20Kandy%20Road,%20Malabe+(eco%20waste)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe></div>
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