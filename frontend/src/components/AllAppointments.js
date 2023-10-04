import React, {useState, useEffect,useRef} from 'react';
import axios from "axios";
import {useReactToPrint} from "react-to-print";

export default function AllAppointments(){
    const conponentPDF = useRef();
    const[appointments, setAppointments] = useState([]);
    const[search, setsearch] = useState([]);
    console.log(search)
    
    

    useEffect(()=>{
        function getAppointments() {
            axios.get("http://localhost:8070/appointment/").then((res)=>{
               setAppointments(res.data);
               console.log(res);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getAppointments();

        
    
    } ) 

    


  
    
   const deleteAppointment= async(id)=>{
    console.warn(id)
    let result = await fetch(`http://localhost:8070/appointment/delete/${id}`,{
        method:"Delete"
    });
    result = await result.json();
    if(result)
    {
        
        alert("Delete Successfully")
        
    }
   }

   const generatePDF = useReactToPrint({
    content: ()=>conponentPDF.current,
    documentTitle: "userdata",
    onAfterPrint: ()=> alert("Download Successfully")
   });


    return(
        
        <div className="container" style={{width: '80%', float: 'right'}} >
            <br></br>
            <br></br>
            <h1 style={{color:'white'}}>All Appointments</h1>
            <br></br>
            <form class="d-flex">
            <input class="form-control me-2 " type="text" onChange={(e) => setsearch(e.target.value)} placeholder="Search by Appointment" aria-label="Search"/>
            </form>
            <br></br>
            <div>
            <div ref={conponentPDF} style={{width:'100%'}}>
            <table class="table table-dark table-striped" style={{color:'white'}}>
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Date</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Phone No</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {appointments.filter((appointments) => {
                    return search.toString().toLowerCase() === '' ? appointments: appointments.doctor.toString().toLowerCase().includes(search);
                    
                }).map((appointments, index) => {
                    return(
                    <tr key={appointments._id}>
                        <th scoop="row">{index+1}</th>
                        <td><a href={`/get/${appointments._id}`} style={{textDecoration:'none',color:'white'}}>{appointments.doctor} </a> </td> 
                        <td>{appointments.date}</td>
                        <td>{appointments.patientname}</td>
                        <td>{appointments.gender}</td>
                        <td>{appointments.phone}</td>
                        <td>
                            <a className="btn btn-secondary" href={`/update/${appointments._id}`}>
                                <i className="fas fa-edit"></i>&nbsp;Update
                            </a>

                            <h>    </h>
                            
                            <a className="btn btn-primary" href="#" onClick={()=>deleteAppointment(appointments._id)}>
                                <i className="fas fa-trash-alt"></i>&nbsp;Delete
                            </a>
                            

                        </td>
                    </tr>
                    )
                    
                
                
               
            })}

                </tbody>
            </table>

            </div>

            <br></br>

                <a className="btn btn-outline-light" href="#" onClick={generatePDF}>
                    <i className="fas fa-download"></i>&nbsp;Download
                </a>

                <br></br>
            

            
        </div>
        </div>
        
    )

    
    
}
