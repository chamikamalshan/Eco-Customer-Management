const router = require("express").Router();
const {regularroute} = require("express");
let RegularRoute = require("../models/regularroute");


//Create Class..
router.route("/addrroute").post((req,res)=>{

    const rdayid = req.body.rdayid;
    const rday = req.body.rday;
    const rroute =  req.body.rroute;



    const newRegularRoute = new RegularRoute({
        rdayid,
        rday,
        rroute

    })

    newRegularRoute.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read..
router.route("/allrroute").get((req,res)=>{

    RegularRoute.find().then((regularroute)=>{
        res.json(regularroute)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/table").get((req,res)=>{

    RegularRoute.find().then(()=>{
        res.json(regularroute)
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
router.route("/deleterroute/:id").delete(async (req, res) => {
    let regularrouteId = req.params.id;

    await RegularRoute.findByIdAndDelete(regularrouteId)
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

router.route("/getrroute/:id").get(async (req, resp) => {
    let result = await RegularRoute.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})  





router.route("/updaterroute/:id").put(async (req, resp) => {
    let result = await RegularRoute.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})  

module.exports = router;