const express = require("express");
const mongoose = require("mongoose");
//doctor register & login ---------------------------------------------------------------------------------
const CustomerData = require("./customer");
//--------------------------------------------------------------------------------..--------------------end

const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const uuid = require('uuid').v4
const dotenv = require("dotenv")
const app = express();
const stripe = require("stripe")("sk_test_51NqHFfB36akorYVl66XfLD8NSaoMvad28vPp0at2SXWbA6A28DaLvsWZFAlE5dGQJkWtPCyIeub9MZYh12bHvIvL009W00Mftn")
require("dotenv").config();
const path = require("path");




app.use(cors());
//doctor register & login ---------------------------------------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//--------------------------------------------------------------------------------..--------------------end
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
   
    useNewUrlParser: true
    
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection success!");
})

const requestRouter = require("./routes/requests.js");
const regularrouteRouter = require("./routes/regularroutes.js");
const specialrouteRouter = require("./routes/specialroutes.js");
const staffsalaryRouter = require("./routes/staffsalaries.js");
const wasteRouter = require("./routes/wastes.js");
const staffmemberRouter = require("./routes/staffmembers.js");
const staffrequestRouter = require("./routes/staffrequests.js");
const productRouter = require("./routes/products.js");



app.use("/request",requestRouter);
app.use("/regularroute",regularrouteRouter);
app.use("/specialroute",specialrouteRouter);
app.use("/staffsalary",staffsalaryRouter);
app.use("/staffsalary",staffsalaryRouter);
app.use("/waste",wasteRouter);
app.use("/staffmember",staffmemberRouter);
app.use("/staffrequest",staffrequestRouter);
app.use("/product",productRouter);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "frontend", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"), (err) => {
            if (err) {
                res.status(500).send(err);
            }
        });
    });
}



//doctor register & login ---------------------------------------------------------------------------------


app.get("/login", cors(),(req,res)=>{
    

})

app.post("/login",async(req,res)=>{
    const{username,password}=req.body

    try{
        const check = await CustomerData.findOne({username:username, password:password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }

})


app.post("/register",async(req,res)=>{
    const{fullname,username,email,address,password,repassword}=req.body

    const data ={
        fullname:fullname,
        username:username,
        email:email,
        address:address,
        password:password,
        repassword:repassword
        
    }

    try{
        const check = await CustomerData.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await CustomerData.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }

})


app.post("/resetpw", async (req, res) => {
    const cookieVal = req.body.cookieVal
    const password = req.body.password
    
    try{
        const newPass = password
        await CustomerData.updateOne({username: cookieVal}, {$set:{password: newPass}});

        res.json("pass")
    }
    catch (e) {
        res.json("fail")
    }
})  


app.post("/repass",async(req,res)=>{
    try{
        const username=req.body.username
        const check=await CustomerData.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    } catch(error) {
        res.json('fail')
        
    }
})




//----------------------------------------------------------------------------------------------------end


app.post('/checkout', async(req,res) => {
    console.log(req.body) 

    let error,status

    try{

      const{product01,token} = req.body

      const customer = await stripe.customers.create({
        email: token.email,
        source:token.id
      })
      const key = uuid()
      const charge = await stripe.charges.create(
        {
          amount: product01.price * quantity001 * 100,
          currency: "lkr",
          customer: customer.id,
          receipt_email: token.email,
          shipping:{
            name:token.card.name,
            address:{
              line1:token.card.address_line1,
              line2:token.card.address_line2,
              city:token.card.address_city,
              country:token.card.address_country,
              postal_code:token.card.address_zip,
            },
          },
        },
        {
          key,
        }
      );

      console.log("Charge:",{charge});
      status = "success";

    }catch(error){
      console.log(error)
      status = "failure";
    }
    res.json({error,status});
  
})


const PORT = process.env.PORT || 8070;
app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
})

