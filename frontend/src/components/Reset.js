import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Cookies from 'js-cookie'

export default function Reset() {

    const history = useNavigate();
    const cookieVal=Cookies.get("username")
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    const[customers] = useState([]);

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8070/resetpw",{
                password,repassword
            })
            .then(res=>{
                if(res.data=="pass"){
                    alert("Success!")
                }
                else if(res.data=="fail"){
                    alert("Unsuccess!")
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
                
                <div class="card-body">
                <img src="ecowastelogo.png" style={{maxHeight:'150px',width: '30%'}} alt="..."/>
                    <h1 class="card-title text-success"><b>Reset Password</b></h1>
                    <h2 class="card-title "><b>User: {cookieVal}</b></h2>
                    <br></br>
                    <br></br>

                    <form action="POST">
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label " style={{float: 'left'}}><i class="fa-solid fa-lock"></i><b> Password :</b></label>
                            <input type="password" class="form-control  " onChange={(e)=>{setPassword(e.target.value)}} id="username" placeholder="Password"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword2" class="form-label " style={{float: 'left'}}><i class="fa-solid fa-lock"></i><b> Re-Enter Password :</b></label>
                            <input type="password" class="form-control " onChange={(e)=>{setRePassword(e.target.value)}} id="password" placeholder="Password"/>
                        </div>
                        <br></br>
                        
                        
                        <button type="submit" class="btn btn-success" onClick={submit}>Reset</button>
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
