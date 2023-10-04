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
  const[quantity004, setQuantity004] = useState(1);
  const[quantity005, setQuantity005] = useState(1);
  const[quantity006, setQuantity006] = useState(1);
  const data = location.state;
  const navigate = useNavigate();

  

  


  const[product04] = useState({
    name: "PRODUCT NAME 004",
    price: 3000,
  })
  const[product05] = useState({
    name: "PRODUCT NAME 005",
    price: 6000,
  })
  const[product06] = useState({
    name: "PRODUCT NAME 006",
    price: 8000,
  })
  async function handleToken(token,addresses){
    const response = await axios.post('http://localhost:8070/checkout',{token,product04,product05,product06})

    console.log(response.status)
    if(response.status === 200){
      toast.success("Payment is completed",{position: toast.POSITION.TOP_RIGHT})
    }else{
      toast.error("Payment is not completed",{position: toast.POSITION.TOP_RIGHT})
    }
    

  }


  const handleDecrement004 = () => {
    if(quantity004 > 1){
      setQuantity004(prevCount => prevCount - 1);
    }
  }
  const handleDecrement005 = () => {
    if(quantity005 > 1){
      setQuantity005(prevCount => prevCount - 1);
    }
  }
  const handleDecrement006 = () => {
    if(quantity006 > 1){
      setQuantity006(prevCount => prevCount - 1);
    }
  }



  const handleIncrement004 = () => {
    if(quantity004 < 5){
      setQuantity004(prevCount => prevCount + 1);
    }
  }
  const handleIncrement005 = () => {
    if(quantity005 < 5){
      setQuantity005(prevCount => prevCount + 1);
    }
  }
  const handleIncrement006 = () => {
    if(quantity006 < 5){
      setQuantity006(prevCount => prevCount + 1);
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
      <h3 class="card-title"><b class="text-success">PRODUCT NAME 004</b></h3>
      <br></br>
      <img src="p02.png" class="card-img-top" alt="..." style={{maxWidth: '370px',height:'200px'}}/>
            <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
            <div class="card-header" style={{textAlign: 'left'}}>
              <h6 class="card-title"><b>Price:&nbsp;&nbsp;</b>Rs.3000.00</h6>
              <br></br>
                 
                    <div className="input-group" style={{width: '200px'}}>
                    <h6 class="card-title"><b>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                      <button type="button" onClick={handleDecrement004} className="input-group-text">-</button>
                      <div className="form-control text-center">{quantity004}</div>
                      <button type="button" onClick={handleIncrement004} className="input-group-text">+</button>
                    </div>

              <br></br>
              <h6 class="card-title"><b>Available Stock:</b> 5</h6>
              <br></br>
              <h6 class="card-title"><b>Total Price:&nbsp;&nbsp;</b>Rs.{3000*quantity004}.00</h6>
            </div>
            
            </div>
      
      </center>
      <br></br>
      <div class="card-body">
        
       <StripeCheckout 
       stripeKey="pk_test_51NqHFfB36akorYVlnotIxHpXeJGdciivz5tI9LnRpfL5jSXa84tvJltytpXF2bgLRrPFyvOjuo1e5yFaa8nSrOcG00t8mGBxVM"
       token={handleToken}
       currency="lkr"
       amount={product04.price * quantity004 * 100}
       name={product04.name}
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
      <h3 class="card-title"><b class="text-success">PRODUCT NAME 005</b></h3>
      <br></br>
      <img src="p02.png" class="card-img-top" alt="..." style={{maxWidth: '370px',height:'200px'}}/>
            <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
            <div class="card-header" style={{textAlign: 'left'}}>
              <h6 class="card-title"><b>Price:&nbsp;&nbsp;</b>Rs.6000.00</h6>
              <br></br>

                    <div className="input-group" style={{width: '200px'}}>
                    <h6 class="card-title"><b>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                      <button type="button" onClick={handleDecrement005} className="input-group-text">-</button>
                      <div className="form-control text-center">{quantity005}</div>
                      <button type="button" onClick={handleIncrement005} className="input-group-text">+</button>
                    </div>

              <br></br>
              <h6 class="card-title"><b>Available Stock:</b> 5</h6>
              <br></br>
              <h6 class="card-title"><b>Total Price:&nbsp;&nbsp;</b>Rs.{6000*quantity005}.00</h6>
            </div>
            
            </div>
      
      </center>
      <br></br>
      <div class="card-body">

      <StripeCheckout 
       stripeKey="pk_test_51NqHFfB36akorYVlnotIxHpXeJGdciivz5tI9LnRpfL5jSXa84tvJltytpXF2bgLRrPFyvOjuo1e5yFaa8nSrOcG00t8mGBxVM"
       token={handleToken}
       currency="lkr"
       amount={product05.price * quantity005 * 100}
       name={product05.name}
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
      <h3 class="card-title"><b class="text-success">PRODUCT NAME 006</b></h3>
      <br></br>
      <img src="p02.png" class="card-img-top" alt="..." style={{maxWidth: '370px',height:'200px'}}/>
            <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
            <div class="card-header" style={{textAlign: 'left'}}>
              <h6 class="card-title"><b>Price:&nbsp;&nbsp;</b>Rs.8000.00</h6>
              <br></br>
               
                    <div className="input-group" style={{width: '200px'}}>
                    <h6 class="card-title"><b>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;</b></h6>
                      <button type="button" onClick={handleDecrement006} className="input-group-text">-</button>
                      <div className="form-control text-center">{quantity006}</div>
                      <button type="button" onClick={handleIncrement006} className="input-group-text">+</button>
                    </div>
              
              <br></br>
              <h6 class="card-title"><b>Available Stock:</b> 5</h6>
              <br></br>
              <h6 class="card-title"><b>Total Price:&nbsp;&nbsp;</b>Rs.{8000*quantity006}.00</h6>
            </div>
            
            </div>
      
      </center>
      <br></br>
      <div class="card-body">
      

      <StripeCheckout 
       
       stripeKey="pk_test_51NqHFfB36akorYVlnotIxHpXeJGdciivz5tI9LnRpfL5jSXa84tvJltytpXF2bgLRrPFyvOjuo1e5yFaa8nSrOcG00t8mGBxVM"
       token={handleToken}
       currency="lkr"
       amount={product06.price * quantity006 * 100}
       name={product06.name}
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