const router = require("express").Router();
const {specialroute} = require("express");
let SpecialRoute = require("../models/specialroute");


//Create Class..
router.route("/addsroute").post((req,res)=>{

    const sid = req.body.sid;
    const sdistrict = req.body.sdistrict;
    const smaincity =  req.body.smaincity;
    const saddress =  req.body.saddress;



    const newSpecialRoute = new SpecialRoute({
        sid,
        sdistrict,
        smaincity,
        saddress

    })

    newSpecialRoute.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read..
router.route("/allsroute").get((req,res)=>{

    SpecialRoute.find().then((specialroute)=>{
        res.json(specialroute)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/table").get((req,res)=>{

    SpecialRoute.find().then(()=>{
        res.json(specialroute)
    }).catch((err)=>{
        console.log(err)
    })
})

//Update Class..
/*router.route("/update/:id").put(async (req, res) => {
    let classId = req.params.id;
    const {classname, grade, date, time, link} = req.body;

    const updateClass = {
        classname,
        grade,
        date,
        time,
        link
    }

    const update = await Class.findByIdAndUpdate(classId, updateClass)
    .then(() => {
    res.status(200).send({status: "Class Updated"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
})   
}) */

//Delete Class..
router.route("/deletesroute/:id").delete(async (req, res) => {
    let specialrouteId = req.params.id;

    await SpecialRoute.findByIdAndDelete(specialrouteId)
    .then(() => {
        res.status(200).send({status: "Route Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete route", error: err.message});
    })
})

//Read Class..
/*router.route("/get/:id").get(async (req, res) => {
    let classId = req.params.id;
    const user = await Class.findById(classId)
    .then((user) => {
         res.status(200).send({status: "Class fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get class", error: err.message});
    })
})  */

router.route("/getsroute/:id").get(async (req, resp) => {
    let result = await SpecialRoute.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})  





router.route("/updatesroute/:id").put(async (req, resp) => {
    let result = await SpecialRoute.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})  

module.exports = router;