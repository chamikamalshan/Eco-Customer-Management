
import { useParams, useNavigate } from "react-router-dom"
import React, { useEffect,useState } from "react";

export default function UpdateAppointment(){

  const [doctor, setDoctor] = React.useState("");
  const [date, setDate] = React.useState("");
  const [patientname, setPatientName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [nic, setNIC] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = useState("false")
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getAppointmentDetails();
  },[])

  

  const getAppointmentDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/appointment/get/${params.id}`);
    result = await result.json();
    setDoctor(result.doctor);
    setDate(result.date);
    setPatientName(result.patientname);
    setAge(result.age);
    setGender(result.gender);
    setNIC(result.nic);
    setPhone(result.phone);
    setEmail(result.email);
  }



  const UpdateAppointment = async () =>{
    console.warn(doctor,date,patientname,age,gender,nic,phone,email)
    let result = await fetch(`http://localhost:8070/appointment/update/${params.id}`,{
      method:'put',
      body:JSON.stringify({doctor,date,patientname,age,gender,nic,phone,email}),
      headers:{
        'Content-Type':'Application/json'
      }

    });
    result = await result.json()
    if(result){
      
      navigate('/')
      alert("Update Successfully")
    }
    
  }

  const hadleSubmit=(e)=>{
    e.preventDefault();
    if(date.length==0||patientname.length==0||age.length==0||gender.length==0||nic.length==0||phone.length==0||email.length==0)
    setError(true)
    if(date&&patientname&&age&&gender&&nic&&phone&&email)
    {
      console.log("Doctor:",doctor,"Appointment Date:",date,"Patient Name:",patientname,"Age:",age,"Gender:",gender,"NIC:",nic,"Phone No:",phone,"Email:",email)
    }
  }
  


  

    return(
        //class create form
        
        <div className="container" style={{width: '80%', float: 'right'}}>

          <br></br>
          <br></br>
          <h2 style={{color:'white'}}>Update Class</h2>
          <br></br>
          <br></br>

        <div style={{width: '1100px', float: 'center',color:'white'}}>

        <div className="mb-3 row"  >
          <label for="doctor" className="col-sm-2 col-form-label">Doctor</label>
          <div className="col-sm-10">
          <input type="text"  className="form-control" id="doctor" placeholder="Doctor Name" 
          value={doctor}
          onChange={(e)=>{

            setDoctor(e.target.value);

          }}disabled/>
          </div>
          {error&&doctor.length<=0?<lable class="text" style={{color:'#FF0000'}}>Doctor Name can't be empty!</lable>:""}
        </div>

        <div className="mb-3 row">
          <label for="date" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-10">
          <input type="date" className="form-select" id="date" placeholder="Date"
          value={date}
          onChange={(e)=>{

            setDate(e.target.value);

          }}/>  
          </div>
          {error&&date.length<=0?<lable class="text" style={{color:'#FF0000'}}>Date can't be empty!</lable>:""}
        </div>

        <div className="mb-3 row">
          <label for="patientname" className="col-sm-2 col-form-label">Patient Name</label>
          <div className="col-sm-10">
          <input type="text" className="form-control" id="patientname" placeholder="Patient Name"
          value={patientname}
          onChange={(e)=>{

            setPatientName(e.target.value);

          }}/>
          </div>
          {error&&patientname.length<=0?<lable class="text" style={{color:'#FF0000'}}>Patient Name can't be empty!</lable>:""}
        </div>

        <div className="mb-3 row">
          <label for="age" className="col-sm-2 col-form-label">Age</label>
          <div className="col-sm-10">
          <input type="text" className="form-control" id="age" placeholder="Age"
          value={age}
          onChange={(e)=>{

            setAge(e.target.value);

          }}/>
          </div>
          {error&&age.length<=0?<lable class="text" style={{color:'#FF0000'}}>Age can't be empty!</lable>:""}
        </div>

        <div className="mb-3 row">
          <label for="gender" className="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-10">
          <input type="gender" className="form-control" id="gender" placeholder="Gender"
          value={gender}
          onChange={(e)=>{

            setGender(e.target.value);

          }}required/>
          </div>
          {error&&gender.length<=0?<lable class="text" style={{color:'#FF0000'}}>Gender can't be empty!</lable>:""}
        </div>

        <div className="mb-3 row">
          <label for="nic" className="col-sm-2 col-form-label">NIC</label>
          <div className="col-sm-10">
          <input type="number" className="form-control" id="nic" placeholder="NIC Number"
          value={nic}
          onChange={(e)=>{

            setNIC(e.target.value);

          }}required/>
          </div>
          {error&&nic.length<=0?<lable class="text" style={{color:'#FF0000'}}>NIC can't be empty!</lable>:""}
        </div>

        <div className="mb-3 row">
          <label for="phone" className="col-sm-2 col-form-label">Phone No</label>
          <div className="col-sm-10">
          <input type="number" className="form-control" id="phone" placeholder="Phone Number"
          value={phone}
          onChange={(e)=>{

            setPhone(e.target.value);

          }}required/>
          </div>
          {error&&phone.length<=0?<lable class="text" style={{color:'#FF0000'}}>Phone Number can't be empty!</lable>:""}
        </div>

        <div className="mb-3 row">
          <label for="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
          <input type="email" className="form-control" id="email" placeholder="Email"
          value={email}
          onChange={(e)=>{

            setEmail(e.target.value);

          }}required/>
          </div>
          {error&&email.length<=0?<lable class="text" style={{color:'#FF0000'}}>Email can't be empty!</lable>:""}
        </div>

        <button type="submit" className="btn btn-secondary" onClick={UpdateAppointment}><i className="fas fa-edit"></i> Update</button>

        </div>
      
        </div>
      
    )
    
}


