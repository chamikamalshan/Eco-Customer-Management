import {createSearchParams, useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";


export default function R01(){

 
  
  const location = useLocation();
  const[quantity007, setQuantity007] = useState(1);
  const[quantity008, setQuantity008] = useState(1);
  const[quantity009, setQuantity009] = useState(1);
  const data = location.state;
  const navigate = useNavigate();

 


  const[product07] = useState({
    name: "PRODUCT NAME 007",
    price: 2000,
  })
  const[product08] = useState({
    name: "PRODUCT NAME 008",
    price: 4000,
  })
  const[product09] = useState({
    name: "PRODUCT NAME 009",
    price: 10000,
  })
  
  async function handleToken(token,addresses){
    const response = await axios.post('http://localhost:8070/checkout',{token,product07,product08,product09})

    console.log(response.status)
    if(response.status === 200){
      toast.success("Payment is completed",{position: toast.POSITION.TOP_RIGHT})
    }else{
      toast.error("Payment is not completed",{position: toast.POSITION.TOP_RIGHT})
    }
    

  }
  


  const handleDecrement007 = () => {
    if(quantity007 > 1){
      setQuantity007(prevCount => prevCount - 1);
    }
  }
  const handleDecrement008 = () => {
    if(quantity008 > 1){
      setQuantity008(prevCount => prevCount - 1);
    }
  }
  const handleDecrement009 = () => {
    if(quantity009 > 1){
      setQuantity009(prevCount => prevCount - 1);
    }
  }



  const handleIncrement007 = () => {
    if(quantity007 < 5){
      setQuantity007(prevCount => prevCount + 1);
    }
  }
  const handleIncrement008 = () => {
    if(quantity008 < 5){
      setQuantity008(prevCount => prevCount + 1);
    }
  }
  const handleIncrement009 = () => {
    if(quantity009 < 5){
      setQuantity009(prevCount => prevCount + 1);
    }
  }

  
    

  

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="randp.png" class="card-img" alt="..." style={{height: '375px',filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>BUY</b> <b class="text-success">PRODUCTS</b></h1>
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

<div class="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft: '40px'}}>
  <div class="col" style={{maxWidth: '420px',marginLeft: '40px'}}>
    <div class="card" style={{backgroundColor:'#E0E0E0'}}>
      <br></br>
      <center>
      <h3 class="card-title"><b class="text-success">PRODUCT NAME 007</b></h3>
      <br></br>
      <img src="p03.png" class="card-img-top" alt="..." style={{maxWidth: '370px',height:'200px'}}/>
            <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
            <div class="card-header" style={{textAlign: 'left'}}>
              <h6 class="card-title"><b>Price:&nbsp;&nbsp;</b>Rs.2000.00</h6>
              <br></br>
                 
                    <div className="input-group" style={{width: '200px'}}>
                    <h6 class="card-title"><b>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                      <button type="button" onClick={handleDecrement007} className="input-group-text">-</button>
                      <div className="form-control text-center">{quantity007}</div>
                      <button type="button" onClick={handleIncrement007} className="input-group-text">+</button>
                    </div>

              <br></br>
              <h6 class="card-title"><b>Available Stock:</b> 5</h6>
              <br></br>
              <h6 class="card-title"><b>Total Price:&nbsp;&nbsp;</b>Rs.{2000*quantity007}.00</h6>
            </div>
            
            </div>
      
      </center>
      <br></br>
      <div class="card-body">
        
       <StripeCheckout 
       stripeKey="pk_test_51NqHFfB36akorYVlnotIxHpXeJGdciivz5tI9LnRpfL5jSXa84tvJltytpXF2bgLRrPFyvOjuo1e5yFaa8nSrOcG00t8mGBxVM"
       token={handleToken}
       currency="lkr"
       amount={product07.price * quantity007 * 100}
       name={product07.name}
       billingAddress
       shippingAddress
       /> 
        
      </div>
    </div>
  </div>
  <div class="col" style={{maxWidth: '420px',marginLeft: '40px'}}>
    <div class="card" style={{backgroundColor:'#E0E0E0'}}>
      <br></br>
      <center>
      <h3 class="card-title"><b class="text-success">PRODUCT NAME 008</b></h3>
      <br></br>
      <img src="p03.png" class="card-img-top" alt="..." style={{maxWidth: '370px',height:'200px'}}/>
            <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
            <div class="card-header" style={{textAlign: 'left'}}>
              <h6 class="card-title"><b>Price:&nbsp;&nbsp;</b>Rs.4000.00</h6>
              <br></br>

                    <div className="input-group" style={{width: '200px'}}>
                    <h6 class="card-title"><b>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                      <button type="button" onClick={handleDecrement008} className="input-group-text">-</button>
                      <div className="form-control text-center">{quantity008}</div>
                      <button type="button" onClick={handleIncrement008} className="input-group-text">+</button>
                    </div>

              <br></br>
              <h6 class="card-title"><b>Available Stock:</b> 5</h6>
              <br></br>
              <h6 class="card-title"><b>Total Price:&nbsp;&nbsp;</b>Rs.{4000*quantity008}.00</h6>
            </div>
            
            </div>
      
      </center>
      <br></br>
      <div class="card-body">

      <StripeCheckout 
       stripeKey="pk_test_51NqHFfB36akorYVlnotIxHpXeJGdciivz5tI9LnRpfL5jSXa84tvJltytpXF2bgLRrPFyvOjuo1e5yFaa8nSrOcG00t8mGBxVM"
       token={handleToken}
       currency="lkr"
       amount={product08.price * quantity008 * 100}
       name={product08.name}
       billingAddress
       shippingAddress
       /> 

      </div>
    </div>
  </div>
  <div class="col" style={{maxWidth: '420px',marginLeft: '40px'}}>
    <div class="card" style={{backgroundColor:'#E0E0E0'}}>
      <br></br>
      <center>
      <h3 class="card-title"><b class="text-success">PRODUCT NAME 009</b></h3>
      <br></br>
      <img src="p03.png" class="card-img-top" alt="..." style={{maxWidth: '370px',height:'200px'}}/>
            <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
            <div class="card-header" style={{textAlign: 'left'}}>
              <h6 class="card-title"><b>Price:&nbsp;&nbsp;</b>Rs.10000.00</h6>
              <br></br>
               
                    <div className="input-group" style={{width: '200px'}}>
                    <h6 class="card-title"><b>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                      <button type="button" onClick={handleDecrement009} className="input-group-text">-</button>
                      <div className="form-control text-center">{quantity009}</div>
                      <button type="button" onClick={handleIncrement009} className="input-group-text">+</button>
                    </div>
              
              <br></br>
              <h6 class="card-title"><b>Available Stock:</b> 5</h6>
              <br></br>
              <h6 class="card-title"><b>Total Price:&nbsp;&nbsp;</b>Rs.{10000*quantity009}.00</h6>
            </div>
            
            </div>
      
      </center>
      <br></br>
      <div class="card-body">

      <StripeCheckout 
       stripeKey="pk_test_51NqHFfB36akorYVlnotIxHpXeJGdciivz5tI9LnRpfL5jSXa84tvJltytpXF2bgLRrPFyvOjuo1e5yFaa8nSrOcG00t8mGBxVM"
       token={handleToken}
       currency="lkr"
       amount={product09.price * quantity009 * 100}
       name={product09.name}
       billingAddress
       shippingAddress
       /> 

      </div>
    </div>
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