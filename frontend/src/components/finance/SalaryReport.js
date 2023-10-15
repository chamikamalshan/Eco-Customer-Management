import React, {useState, useEffect,useRef} from 'react';
import axios from "axios";
import {useReactToPrint} from "react-to-print";
import {Link} from 'react-router-dom';


export default function SalaryReport(){

    const conponentPDF = useRef();
    const[staffsalaries, setStaffSalaries] = useState([]);
    const[search, setsearch] = useState([]);
    
    console.log(search)
    
    

    useEffect(()=>{
        function getStaffSalaries() {
            axios.get("http://localhost:8070/staffsalary/salaryreport").then((res)=>{
               setStaffSalaries(res.data);
               console.log(res);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getStaffSalaries();

        
    
    } ) 


   const generatePDF = useReactToPrint({
    content: ()=>conponentPDF.current,
    documentTitle: "userdata",
    onAfterPrint: ()=> alert("Download Successfully")
   });
   
   //total
   const totalamount = staffsalaries.reduce((total,staffsalaries)=>{
    return total + staffsalaries.samount
   },0);
   
  

    return(
        //class create form

        <div>

        <div class="card bg-dark text-white" >
           <img src="financebg.png" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>STAFF</b> <b class="text-success">SALARY</b></h1>
                <br></br>
                <br></br>
                <br></br>

                

             </div>
          </div>




        
        <div >
        <br></br>
        <br></br>
        <br></br>
        

        <div >

        <div class="card text-dark  mb-3" style={{width: '1000px', backgroundColor:'#E0E0E0'}}>
        
        <div class="card-body"> 
        <br></br>
        <h1 class="card-title text-success"><b>SALARY REPORT</b></h1>
        <br></br>

        <div>
        <div ref={conponentPDF} style={{width:'100%'}}>
        <table class="table table-success table-striped">
            <thead class="table table-dark table-striped">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Year</th>
                    <th scope="col">Month</th>
                    <th scope="col">Week</th>
                    <th scope="col">Amount</th>
                    
                </tr>
            </thead>
            <tbody>
                
                
            {staffsalaries.filter((staffsalaries) => {
                return search.toString().toLowerCase() === '' ? staffsalaries: staffsalaries.smonth.toString().toLowerCase().includes(search);
                
            }).map((staffsalaries, index) => {
                return(
                <tr key={staffsalaries._id}>
                    <th scoop="row">{index+1}</th>
                    <td><a href={`/get/${staffsalaries._id}`} style={{textDecoration:'none',color:'black'}}>{staffsalaries.syear} </a> </td> 
                    <td>{staffsalaries.smonth}</td>
                    <td>{staffsalaries.sweek}</td>
                    <td>{staffsalaries.samount}</td>
                </tr>  
                
                )
        })}

                <tr>
                <td colspan="4" class="table-active text-center"><b>Total Amount</b></td>
                <td><b className='text-danger'>{totalamount}</b></td>
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