import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Cookies from 'js-cookie'



export default function Login() {




    const history = useNavigate();

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const[customers] = useState([]);

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8070/login",{
                username,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    Cookies.set("username",username,{expires:1})
                    history("/admindash",{state:{id:username}})
                }
                else if(res.data=="notexist"){
                    alert("User have not Register!")
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

        
        <div className="Login " >


            <div class="card text-center" style={{width: '37%'}}>
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                      <Link to="/login" className="nav-link active " aria-current="true">Login</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/register" className="nav-link">Register</Link>
                    </li>
                    </ul>
                </div>
                <div class="card-body">
                <img src="ecowastelogo.png" style={{maxHeight:'150px',width: '30%'}} alt="..."/>
                    <h1 class="card-title text-success"><b>Login</b></h1>
                    <br></br>
                    <br></br>

                    <form action="POST">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label " style={{float: 'left'}}><i class="fa-solid fa-user"></i><b> User Name :</b></label>
                            <input type="text" class="form-control  " onChange={(e)=>{setUserName(e.target.value)}} id="username" placeholder="User Name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label " style={{float: 'left'}}><i class="fa-solid fa-lock"></i><b> Password :</b></label>
                            <input type="password" class="form-control " onChange={(e)=>{setPassword(e.target.value)}} id="password" placeholder="Password"/>
                        </div>
                        <br></br>
                        
                        
                        <button type="submit" class="btn btn-success" onClick={submit}>LOGIN</button>
                        <br></br>
                        <br></br>
                        <Link to="/forgotpw" > <b>FORGOT PASSWORD? RESET NOW.</b></Link>
                        <br></br>
                        <br></br>
                        
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