import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Cookies from 'js-cookie'

export default function Register() {

    const history = useNavigate();


    const [fullname, setFullName] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8070/register",{
                fullname,username,email,address,password,repassword
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists!")
                }
                else if(res.data=="notexist"){
                    Cookies.set("username",username,{expires:1})
                    history("/dprofile",{state:{id:username}})
                }
            })
            .catch(e=>{
                alert("Wrong Details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }


    return(

        <div style={{backgroundImage: `url('loginbg1.png')`}}>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

    
    <div className="Register ">
        

        <div class="card text-center" style={{width: '37%'}}>
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li class="nav-item">
                  <Link to="/register" className="nav-link active " aria-current="true">Register</Link>
                </li>
                </ul>
            </div>
            <div class="card-body">
            <img src="ecowastelogo.png" style={{maxHeight:'150px',width: '30%'}} alt="..."/>
                <h1 class="card-title text-success"><b>Register</b></h1>
                <br></br>

                <form action="POST">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label " style={{float: 'left'}}><b>Full Name :</b></label>
                        <input type="text" class="form-control" onChange={(e)=>{setFullName(e.target.value)}} id="fullname" placeholder="Full Name"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label " style={{float: 'left'}}><b>User Name :</b></label>
                        <input type="text" class="form-control" onChange={(e)=>{setUserName(e.target.value)}} id="username" placeholder="User Name"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" style={{float: 'left'}}><b>Email :</b></label>
                        <input type="email" class="form-control" onChange={(e)=>{setEmail(e.target.value)}} id="email" placeholder="Email"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label " style={{float: 'left'}}><b>Address :</b></label>
                        <input type="text" class="form-control" onChange={(e)=>{setAddress(e.target.value)}} id="address" placeholder="Address"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label " style={{float: 'left'}}><b>Password :</b></label>
                        <input type="password" class="form-control" onChange={(e)=>{setPassword(e.target.value)}} id="password" placeholder="Password"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label " style={{float: 'left'}}><b>Re-enter password :</b></label>
                        <input type="password" class="form-control" onChange={(e)=>{setRePassword(e.target.value)}} id="repassword" placeholder="Re-Enter Password"/>
                    </div>
                    
                    
                    <br></br>
                    
                    
                    
                    <button type="submit" class="btn btn-success" onClick={submit}>Submit</button>
                </form>
                

                
            </div>
        </div>

        

    </div>
    <br></br>
        <br></br>
        <br></br>
        <br></br>

    </div>

    
    )

}