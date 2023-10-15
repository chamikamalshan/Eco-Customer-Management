import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function WorkingDays(){

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [slip, setSlip] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newRequest ={
      name,
      phone,
      email,
      date,
      address,
      slip,
      message
     
    }

    if(name.length==0||phone.length==0||email.length==0||date.length==0||address.length==0||slip.length==0||message.length==0)
    setError(true)
    if(name&&phone&&email&&date&&address&&slip&&message)
    {
      console.log("Name:",name,"Phone:",phone,"Email:",email,"Date:",date,"Address:",address,"Slip:",slip,"Message:",message)
    }

    axios.post("http://localhost:8070/workingdays",newRequest).then(()=>{
      alert("Request Added")
      setName("");
      setPhone("");
      setEmail("");
      setDate("");
      setAddress("");
      setSlip("");
      setMessage("");

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
           <img src="requestbg.png" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>WORKING</b> <b class="text-success">DAYS</b></h1>
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

       <div style={{width:'1350px', marginTop:'100px', marginBottom:'100px'}}>

            <table class="table  table-striped" style={{marginTop:'20px', marginBottom:'20px'}}>

              <thead style={{backgroundColor:'#52664D', color:'#000000'}}>
                <tr>
                  <th scope="col">Monday</th>
                  <th scope="col">Tuesday</th>
                  <th scope="col">Wednesday</th>
                  <th scope="col">Thursday</th>
                  <th scope="col">Friday</th>
                  <th scope="col">Saturday</th>
                  <th scope="col">Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{backgroundColor:'#C2E8BC'}}>
                    <td>A</td>
                    <td>C</td>
                    <td>E</td>
                    <td>A</td>
                    <td>C</td>
                    <td>E</td>
                    <td>--</td>
                </tr>
                <tr style={{backgroundColor:'#C9C9C9'}}>
                    <td>B</td>
                    <td>D</td>
                    <td>F</td>
                    <td>B</td>
                    <td>D</td>
                    <td>F</td>
                    <td>--</td>
                </tr>
              </tbody>

              
            </table>

            <button type="button" class="btn btn-success" style={{float:'right', marginBottom:'100px'}}>SECTIONS</button>

            
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