import {useParams,useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState,useEffect} from "react";


export default function UpdateWaste(){

  const [wtype, setWType] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [wprice, setWPrice] = React.useState("");
  const [dsite, setDSite] = React.useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const params = useParams();
  const data = location.state;
  const navigate = useNavigate();

  useEffect(()=>{
    getWasteDetails();
  },[])

  const getWasteDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/waste/getwaste/${params.id}`);
    result = await result.json();
    setWType(result.wtype);
    setWeight(result.weight);
    setWPrice(result.wprice);
    setDSite(result.dsite);
  }

  const UpdateWaste = async () =>{
    console.warn(wtype,weight,wprice,dsite)
    let result = await fetch(`http://localhost:8070/waste/updatewaste/${params.id}`,{
      method:'put',
      body:JSON.stringify({wtype,weight,wprice,dsite}),
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
           <img src="wastebg.png" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>UPDATE</b> <b class="text-success">WASTE</b></h1>
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
        <h1 class="card-title text-success"><b>UPDATE WASTE</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Waste Type:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={wtype}
                  onChange={(e)=>{

                    setWType(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="Plastic">Plastic</option>
                    <option value="Metal">Metal</option>
                    <option value="Food">Food</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Glass">Glass</option>
                    <option value="Construction">Construction</option>
                    <option value="Medical">Medical</option>
                  </select>
                  <div className="invalid-feedback">
                    {error&&wtype.length<=0?<lable class="text" style={{color:'#FF0000'}}>Waste Type can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Weight:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={weight}
                  onChange={(e)=>{

                    setWeight(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="1">1 KG</option>
                    <option value="2">2 KG</option>
                    <option value="3">3 KG</option>
                    <option value="4">4 KG</option>
                    <option value="5">5 KG or More</option>
                  </select>
                  <div className="invalid-feedback">
                  {error&&weight.length<=0?<lable class="text" style={{color:'#FF0000'}}>Weight can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Price:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={wprice}
                  onChange={(e)=>{

                    setWPrice(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value={weight*2000}>Rs.{weight*2000}</option>
                    </select>
                    <div className="invalid-feedback">
                  {error&&wprice.length<=0?<lable class="text" style={{color:'#FF0000'}}>Price can't be empty!</lable>:""}
                  </div> 
              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Dump Site:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={dsite}
                  onChange={(e)=>{

                    setDSite(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="Malabe">Malabe</option>
                    <option value="Kaduwela">Kaduwela</option>
                    <option value="Biyagama">Biyagama</option>
                  </select>
                  <div className="invalid-feedback">
                    {error&&dsite.length<=0?<lable class="text" style={{color:'#FF0000'}}>Dump Site can't be empty!</lable>:""}
                  </div>

              </div>
              
              
             
              <div class="col-12">
              <br></br>
              <Link to='/wastedash'>
              <button type="submit" class="btn btn-success" onClick={UpdateWaste}>SUBMIT</button>
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