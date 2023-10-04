import {createSearchParams, useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios";
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


export default function R01(){

  
  const location = useLocation();
  const[quantity001, setQuantity001] = useState(1);
  const[quantity002, setQuantity002] = useState(1);
  const[quantity003, setQuantity003] = useState(1);
  const data = location.state;
  const navigate = useNavigate();

  

  


  const[product01] = useState({
    name: "PRODUCT NAME 001",
    price: 5000,
  })
  const[product02] = useState({
    name: "PRODUCT NAME 002",
    price: 6000,
  })
  const[product03] = useState({
    name: "PRODUCT NAME 003",
    price: 7000,
  })
  async function handleToken(token,addresses){
    const response = await axios.post('http://localhost:8070/checkout',{token,product01,product02,product03})

    console.log(response.status)
    if(response.status === 200){
      toast.success("Payment is completed",{position: toast.POSITION.TOP_RIGHT})
    }else{
      toast.error("Payment is not completed",{position: toast.POSITION.TOP_RIGHT})
    }
    

  }


  const handleDecrement001 = () => {
    if(quantity001 > 1){
      setQuantity001(prevCount => prevCount - 1);
    }
  }
  const handleDecrement002 = () => {
    if(quantity002 > 1){
      setQuantity002(prevCount => prevCount - 1);
    }
  }
  const handleDecrement003 = () => {
    if(quantity003 > 1){
      setQuantity003(prevCount => prevCount - 1);
    }
  }



  const handleIncrement001 = () => {
    if(quantity001 < 5){
      setQuantity001(prevCount => prevCount + 1);
    }
  }
  const handleIncrement002 = () => {
    if(quantity002 < 5){
      setQuantity002(prevCount => prevCount + 1);
    }
  }
  const handleIncrement003 = () => {
    if(quantity003 < 5){
      setQuantity003(prevCount => prevCount + 1);
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
      <h3 class="card-title"><b class="text-success">PRODUCT NAME 001</b></h3>
      <br></br>
      <img src="p01.png" class="card-img-top" alt="..." style={{maxWidth: '370px',height:'200px'}}/>
            <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
            <div class="card-header" style={{textAlign: 'left'}}>
              <h6 class="card-title"><b>Price:&nbsp;&nbsp;</b>Rs.5000.00</h6>
              <br></br>
                 
                    <div className="input-group" style={{width: '200px'}}>
                    <h6 class="card-title"><b>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                      <button type="button" onClick={handleDecrement001} className="input-group-text">-</button>
                      <div className="form-control text-center">{quantity001}</div>
                      <button type="button" onClick={handleIncrement001} className="input-group-text">+</button>
                    </div>

              <br></br>
              <h6 class="card-title"><b>Available Stock:</b> 5</h6>
              <br></br>
              <h6 class="card-title"><b>Total Price:&nbsp;&nbsp;</b>Rs.{5000*quantity001}.00</h6>
            </div>
            
            </div>
      
      </center>
      <br></br>
      <div class="card-body">
        
       <StripeCheckout 
       stripeKey="pk_test_51NqHFfB36akorYVlnotIxHpXeJGdciivz5tI9LnRpfL5jSXa84tvJltytpXF2bgLRrPFyvOjuo1e5yFaa8nSrOcG00t8mGBxVM"
       token={handleToken}
       currency="lkr"
       amount={product01.price * quantity001 * 100}
       name={product01.name}
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
      <h3 class="card-title"><b class="text-success">PRODUCT NAME 002</b></h3>
      <br></br>
      <img src="p01.png" class="card-img-top" alt="..." style={{maxWidth: '370px',height:'200px'}}/>
            <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
            <div class="card-header" style={{textAlign: 'left'}}>
              <h6 class="card-title"><b>Price:&nbsp;&nbsp;</b>Rs.6000.00</h6>
              <br></br>

                    <div className="input-group" style={{width: '200px'}}>
                    <h6 class="card-title"><b>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                      <button type="button" onClick={handleDecrement002} className="input-group-text">-</button>
                      <div className="form-control text-center">{quantity002}</div>
                      <button type="button" onClick={handleIncrement002} className="input-group-text">+</button>
                    </div>

              <br></br>
              <h6 class="card-title"><b>Available Stock:</b> 5</h6>
              <br></br>
              <h6 class="card-title"><b>Total Price:&nbsp;&nbsp;</b>Rs.{6000*quantity002}.00</h6>
            </div>
            
            </div>
      
      </center>
      <br></br>
      <div class="card-body">

      <StripeCheckout 
       stripeKey="pk_test_51NqHFfB36akorYVlnotIxHpXeJGdciivz5tI9LnRpfL5jSXa84tvJltytpXF2bgLRrPFyvOjuo1e5yFaa8nSrOcG00t8mGBxVM"
       token={handleToken}
       currency="lkr"
       amount={product02.price * quantity002 * 100}
       name={product02.name}
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
      <h3 class="card-title"><b class="text-success">PRODUCT NAME 003</b></h3>
      <br></br>
      <img src="p01.png" class="card-img-top" alt="..." style={{maxWidth: '370px',height:'200px'}}/>
            <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
            <div class="card-header" style={{textAlign: 'left'}}>
              <h6 class="card-title"><b>Price:&nbsp;&nbsp;</b>Rs.7000.00</h6>
              <br></br>
               
                    <div className="input-group" style={{width: '200px'}}>
                    <h6 class="card-title"><b>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                      <button type="button" onClick={handleDecrement003} className="input-group-text">-</button>
                      <div className="form-control text-center">{quantity003}</div>
                      <button type="button" onClick={handleIncrement003} className="input-group-text">+</button>
                    </div>
              
              <br></br>
              <h6 class="card-title"><b>Available Stock:</b> 5</h6>
              <br></br>
              <h6 class="card-title"><b>Total Price:&nbsp;&nbsp;</b>Rs.{7000*quantity003}.00</h6>
            </div>
            
            </div>
      
      </center>
      <br></br>
      <div class="card-body">

      <StripeCheckout 
       stripeKey="pk_test_51NqHFfB36akorYVlnotIxHpXeJGdciivz5tI9LnRpfL5jSXa84tvJltytpXF2bgLRrPFyvOjuo1e5yFaa8nSrOcG00t8mGBxVM"
       token={handleToken}
       currency="lkr"
       amount={product03.price * quantity003 * 100}
       name={product03.name}
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