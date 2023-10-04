import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";

export default function AddAppointment(){

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [patientname, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [nic, setNIC] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newAppointment ={
      doctor,
      date,
      patientname,
      age,
      gender,
      nic,
      phone,
      email
     
    }
    axios.post("http://localhost:8070/appointment/add",newAppointment).then(()=>{
      alert("Class Added")
      setDoctor("");
      setDate("");
      setPatientName("");
      setAge("");
      setGender("");
      setNIC("");
      setPhone("");
      setEmail("");
      
    }).catch((err)=>{
      alert(err)
    })

    navigate('/')
    
  
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
          <h2 >Add Appointment</h2>
          <br></br>
          <br></br>

        <div style={{width: '1100px', float: 'center'}}>

        <div class="input-group mb-3">
        <label for="date" className="col-sm-2 col-form-label">Doctor</label>

          <input type="text" class="form-control" value={data} aria-label="Text input with checkbox"/>
          <div class="input-group-text">
          <input class="form-check-input mt-0" type="checkbox" value={data} aria-label="Checkbox for following text input"
                      onChange={(e)=>{

                        setDoctor(e.target.value);
                      
                        }}/>
          </div>
          <div className="col-sm-12">
          {error&&doctor.length<=0?<lable class="text" style={{color:'#FF0000'}}> To Confirm the Doctor, Please Click the Checkbox!</lable>:""}
          </div>
        </div>        

        <div className="mb-3 row">
          <label for="date" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-10">
          <input type="date" className="form-select" id="date" placeholder="Date"
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
          onChange={(e)=>{

            setAge(e.target.value);

          }}/>
          </div>
          {error&&age.length<=0?<lable class="text" style={{color:'#FF0000'}}>Age can't be empty!</lable>:""}
        </div>

        <br></br>

        <div className="mb-3 row">
          <label for="gender" className="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-3">

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="gender1" value="Male"
          onChange={(e)=>{

            setGender(e.target.value);

          }}required/>
            <label class="form-check-label" for="inlineRadio1">Male</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="gender2" value="Female"
          onChange={(e)=>{

            setGender(e.target.value);

          }}required/>
            <label class="form-check-label" for="inlineRadio2">Female</label>
          </div>

          </div>
          <div className="col-sm-2">
          {error&&gender.length<=0?<lable class="text" style={{color:'#FF0000'}}>Gender can't be empty!</lable>:""}
          </div>
        </div>

        <br></br>

        <div className="mb-3 row">
          <label for="nic" className="col-sm-2 col-form-label">NIC</label>
          <div className="col-sm-10">
          <input type="number" className="form-control" id="nic" placeholder="NIC Number"
          onChange={(e)=>{

            setNIC(e.target.value);

          }}required/>
          </div>
          {error&&nic.length<=0?<lable class="text" style={{color:'#FF0000'}}>NIC can't be empty!</lable>:""}
        </div>

        <div className="mb-3 row">
          <label for="phone" className="col-sm-2 col-form-label">Phone No</label>
          <div className="col-sm-10">
          <input type="tel" className="form-control" id="phone" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{7}"
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
          onChange={(e)=>{

            setEmail(e.target.value);

          }}required/>
          </div>
          {error&&email.length<=0?<lable class="text" style={{color:'#FF0000'}}>Email can't be empty!</lable>:""}
        </div>

        <br></br>
        <br></br>

        <button type="submit" className="btn btn-secondary" onClick={sendData} ><i class="fa fa-folder-open" aria-hidden="true"></i> Submit</button>

        </div>
      
        </div>
      
    )
    
}