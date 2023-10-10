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

import FinanceDashboard from './components/finance/FinanceDashboard';
import AllStaffSalary from './components/finance/AllStaffSalary';
import UpdateStaffSalary from './components/finance/UpdateStaffSalary';
import SalaryReport from './components/finance/SalaryReport';
import AddStaffSalary from './components/finance/AddStaffSalary';
import WasteDashboard from './components/waste/WasteDashboard';
import AllWaste from './components/waste/AllWaste';
import AddWaste from './components/waste/AddWaste';
import UpdateWaste from './components/waste/UpdateWaste';
import WasteReport from './components/waste/WasteReport';
import StaffDashboard from './components/staff/StaffDashboard';
import AddStaffMember from './components/staff/AddStaffMember';
import AllStaffMembers from './components/staff/AllStaffMembers';
import UpdateStaffMember from './components/staff/UpdateStaffMember';
import TaskDashboard from './components/task/TaskDashboard';
import AddStaffRequest from './components/task/AddStaffRequest';
import AllStaffRequest from './components/task/AllStaffRequest';
import UpdateStaffRequest from './components/task/UpdateStaffRequest';
import ProductDashboard from './components/product/ProductDashboard';
import AddProduct from './components/product/AddProduct';
import AllProduct from './components/product/AllProduct.js';
import CheckProduct from './components/product/CheckProduct';
import ViewProduct from './components/product/ViewProduct.js';
import UpdateProduct from './components/product/UpdateProduct';










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
      

      <Route path="/financedash" element={<FinanceDashboard/>}/>
      <Route path="/allssalary" element={<AllStaffSalary/>}/>
      <Route path="/addssalary" element={<AddStaffSalary/>}/>
      <Route path="/updatessalary/:id" element={<UpdateStaffSalary/>}/>
      <Route path="/getssalary/:id" element={<UpdateStaffSalary/>}/>
      <Route path="/salaryreport" element={<SalaryReport/>}/>


      <Route path="/wastedash" element={<WasteDashboard/>}/>
      <Route path="/allwaste" element={<AllWaste/>}/>
      <Route path="/addwaste" element={<AddWaste/>}/>
      <Route path="/updatewaste/:id" element={<UpdateWaste/>}/>
      <Route path="/getwaste/:id" element={<UpdateWaste/>}/>
      <Route path="/wastereport" element={<WasteReport/>}/>


      <Route path="/staffdash" element={<StaffDashboard/>}/>
      <Route path="/addsmember" element={<AddStaffMember/>}/>
      <Route path="/allsmember" element={<AllStaffMembers/>}/>
      <Route path="/updatesmember/:id" element={<UpdateStaffMember/>}/>
      <Route path="/getsmember/:id" element={<UpdateStaffMember/>}/>


      <Route path="/taskdash" element={<TaskDashboard/>}/>
      <Route path="/addstaffrequest" element={<AddStaffRequest/>}/>
      <Route path="/allstaffrequest" element={<AllStaffRequest/>}/>
      <Route path="/updatestaffrequest/:id" element={<UpdateStaffRequest/>}/>
      <Route path="/getstaffrequest/:id" element={<UpdateStaffRequest/>}/>

      <Route path="/productdash" element={<ProductDashboard/>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
      <Route path="/viewproduct" element={<ViewProduct/>}/>
      <Route path="/allproduct" element={<AllProduct/>}/>
      <Route path="/getproductcard/:id" element={<CheckProduct/>}/>
      <Route path="/updateproduct/:id" element={<UpdateProduct/>}/>
      <Route path="/getproduct/:id" element={<UpdateProduct/>}/>

      
      
      
      </Routes>
      
      
    </div>
    </Router>
  ); 
}

export default App;
 