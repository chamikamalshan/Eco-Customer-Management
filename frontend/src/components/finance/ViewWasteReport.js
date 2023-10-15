import React, {useState, useEffect,useRef} from 'react';
import axios from "axios";
import {useReactToPrint} from "react-to-print";
import {Link} from 'react-router-dom';


export default function ViewWasteReport(){

    const conponentPDF = useRef();
    const[wastes, setWastes] = useState([]);
    const[search, setsearch] = useState([]);
    console.log(search)
    
    
    
    useEffect(()=>{
        function getWastes() {
            axios.get("http://localhost:8070/waste/fwastereport").then((res)=>{
               setWastes(res.data);
               console.log(res);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getWastes();

        
    
    } ) 

   const generatePDF = useReactToPrint({
    content: ()=>conponentPDF.current,
    documentTitle: "userdata",
    onAfterPrint: ()=> alert("Download Successfully")
   });

   const totalamount = wastes.reduce((total,wastes)=>{
    return total + wastes.wprice
   },0);
  

    return(
        //class create form

        <div>

        <div class="card bg-dark text-white" >
           <img src="wastebg.png" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>WASTE</b> <b class="text-success">REPORT</b></h1>
                <br></br>
                <br></br>
                <br></br>

                
             </div>
          </div>




        
        <div>
        <br></br>
        <br></br>
        <br></br>

        <div >

        <div class="card text-dark  mb-3" style={{width: '1000px', backgroundColor:'#E0E0E0'}}>
        
        <div class="card-body"> 
        <br></br>
        <h1 class="card-title text-success"><b>WASTE REPORT</b></h1>
        <br></br>
        
        
        <br></br>
        <div>
        <div ref={conponentPDF} style={{width:'100%'}}>
        <table class="table table-success table-striped">
            <thead class="table table-dark table-striped">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Waste Type</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
            {wastes.filter((wastes) => {
                return search.toString().toLowerCase() === '' ? wastes: wastes.wtype.toString().toLowerCase().includes(search);
                
            }).map((wastes, index) => {
                return(
                <tr key={wastes._id}>
                    <th scoop="row">{index+1}</th>
                    <td>{wastes.wtype}</td> 
                    <td>{wastes.weight} KG</td>
                    <td>{wastes.wprice}</td>
                </tr>
                )
           
        })} 
             
             <tr>
                <td colspan="3" class="table-active text-center"><b>Total Price</b></td>
                <td><b className='text-danger'>Rs.{totalamount}</b></td>
             </tr>

            </tbody>
        </table>

        </div>

        <br></br>

            <a className="btn btn-outline-success" href="#" onClick={generatePDF}>
                <i className="fas fa-download"></i>&nbsp;Download
            </a>

            <br></br>
        

        
            </div>
            </div>
        </div>
        </div>
    </div>

    <br></br>
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