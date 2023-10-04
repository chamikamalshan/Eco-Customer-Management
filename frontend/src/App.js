import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import RandP from './components/RandP';
import Tracking from './components/Tracking';
import R01 from './components/R01';
import R02 from './components/R02';
import R03 from './components/R03';
import Home from './components/Home';
import Cookies from 'js-cookie'
import AddAppointment from './components/AddAppointment';
import AllAppointments from './components/AllAppointments';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import UpdateRequest from './components/UpdateRequest';
import Requests from './components/Requests';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import Forgot from './components/Forgot';
import Reset from './components/Reset';
import WorkingDays from './components/WorkingDays';
import AllRequests from './components/AllRequests';

import ViewRoute from './components/route/ViewRoute';
import RouteDashboard from './components/route/RouteDashboard';
import AllRegularRoute from './components/route/AllRegularRoute';
import AllSpecialRoute from './components/route/AllSpecialRoute';
import AddRegularRoute from './components/route/AddRegularRoute';
import AddSpecialRoute from './components/route/AddSpecialRoute';
import UpdateRegularRoute from './components/route/UpdateRegularRoute';
import UpdateSpecialRoute from './components/route/UpdateSpecialRoute';









function App() {

  const[cookieVal,setCookieVal]=useState(Cookies.get("username"))

  useEffect(()=>{

    const interval=setInterval(() => {

      const updatedCookie=Cookies.get("username")
      if(updatedCookie!==cookieVal){
        setCookieVal(updatedCookie)
      }
      
    },1000)

    return()=>{clearInterval(interval)}

  },[cookieVal])

  return (
  <Router>
    <div>
    
      <Header/>
      
      <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/all" element={<AllRequests/>}/>
      <Route path="/r01" element={<R01/>}/>
      <Route path="/r02" element={<R02/>}/>
      <Route path="/r03" element={<R03/>}/>
      {cookieVal==undefined && <Route path="/login" element={<Login/>}/>}
      {cookieVal !=undefined && <Route path="/login" element={<Home/>}/>}
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgotpw" element={<Forgot/>}/>
      <Route path="/resetpw" element={<Reset/>}/>
      <Route path="/randp" element={<RandP/>}/>
      <Route path="/track" element={<Tracking/>}/>
      <Route path="/requests" element={<Requests/>}/>
      <Route path="/update/:id" element={<UpdateRequest/>}/>
      <Route path="/get/:id" element={<UpdateRequest/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/workingdays" element={<WorkingDays/>}/>


      <Route path="/routedash" element={<RouteDashboard/>}/>
      <Route path="/viewroute" element={<ViewRoute/>}/>
      <Route path="/allrroute" element={<AllRegularRoute/>}/>
      <Route path="/allsroute" element={<AllSpecialRoute/>}/>
      <Route path="/addrroute" element={<AddRegularRoute/>}/>
      <Route path="/addsroute" element={<AddSpecialRoute/>}/>
      <Route path="/updaterroute/:id" element={<UpdateRegularRoute/>}/>
      <Route path="/getrroute/:id" element={<UpdateRegularRoute/>}/>
      <Route path="/updatesroute/:id" element={<UpdateSpecialRoute/>}/>
      <Route path="/getsroute/:id" element={<UpdateSpecialRoute/>}/>
      
      
      
      </Routes>
      
      
    </div>
    </Router>
  ); 
}

export default App;
 