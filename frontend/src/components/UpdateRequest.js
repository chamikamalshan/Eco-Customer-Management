import {useParams,useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom';
import React, {useEffect,useState} from "react";




export default function UpdateRequest(){

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [date, setDate] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [slip, setSlip] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = useState("false")
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getRequestDetails();
  },[])

  

  const getRequestDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/request/get/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPhone(result.phone);
    setEmail(result.email);
    setDate(result.date);
    setAddress(result.address);
    setSlip(result.slip);
    setMessage(result.message);
  }



  const UpdateRequest = async () =>{
    console.warn(name,phone,email,date,address,slip,message)
    let result = await fetch(`http://localhost:8070/request/update/${params.id}`,{
      method:'put',
      body:JSON.stringify({name,phone,email,date,address,slip,message}),
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
           <img src="requestbg.png" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>UPDATE</b> <b class="text-success">REQUEST</b></h1>
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
        <h1 class="card-title text-success"><b>UPDATE YOUR REQUEST</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Name:</b></label>
                  <input type="name" class="form-control is-invalid " id="validationServer01" value={name}
                  onChange={(e)=>{

                    setName(e.target.value);
                  
                    }}required/>
                    <div className="invalid-feedback">
                    {error&&name.length<=0?<lable class="text" style={{color:'#FF0000'}}>Name can't be empty!</lable>:""}
                    </div>
              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Phone:</b></label>
                  <input type="tel" class="form-control is-invalid" id="inputPassword4" value={phone}
                  onChange={(e)=>{

                    setPhone(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&phone.length<=0?<lable class="text" style={{color:'#FF0000'}}>Phone can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputAddress" class="form-label" style={{float: 'left'}}><b>Email:</b></label>
                  <input type="email" class="form-control is-invalid" id="inputAddress" placeholder="" value={email}
                  onChange={(e)=>{

                    setEmail(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&email.length<=0?<lable class="text" style={{color:'#FF0000'}}>Email can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputAddress2" class="form-label" style={{float: 'left'}}><b>Pick up date:</b></label>
                  <input type="date" class="form-control is-invalid" id="inputAddress2" placeholder="" value={date}
                  onChange={(e)=>{

                    setDate(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&date.length<=0?<lable class="text" style={{color:'#FF0000'}}>Date can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputCity" class="form-label" style={{float: 'left'}}><b>Address:</b></label>
                  <input type="text" class="form-control is-invalid" id="inputCity" value={address}
                  onChange={(e)=>{

                    setAddress(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&address.length<=0?<lable class="text" style={{color:'#FF0000'}}>Address can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputCity" class="form-label" style={{float: 'left'}}><b>Uploaded payment slip link:</b></label>
                  <input type="text" class="form-control is-invalid" id="inputCity" value={slip}
                  onChange={(e)=>{

                    setSlip(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&slip.length<=0?<lable class="text" style={{color:'#FF0000'}}>Slip link can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
                  <label for="inputAddress2" class="form-label" style={{float: 'left'}}><b>Your Message:</b></label>
                  <textarea class="form-control is-invalid" id="inputAddress2" placeholder="Apartment, studio, or floor" value={message}
                  onChange={(e)=>{

                    setMessage(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&message.length<=0?<lable class="text" style={{color:'#FF0000'}}>Message can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
              <br></br>
              <Link to='/all'>
              <button type="submit" class="btn btn-success" onClick={UpdateRequest}>UPDATE REQUEST</button>
              </Link>
    
              </div>
  
          </form>
          
        <br></br>

        </div>
        </div>

        <div className="map-section">
          <div className="gmap-frame">
          <div style={{width: '100%'}}><iframe width="450" height="590" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=300&amp;height=800&amp;hl=en&amp;q=SLIIT,%20New%20Kandy%20Road,%20Malabe+(eco%20waste)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe></div>
          </div>
        </div>

        <br></br>
      <br></br>

      </div>
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


