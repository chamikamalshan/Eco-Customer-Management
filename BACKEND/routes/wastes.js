const router = require("express").Router();
const {waste} = require("express");
let Waste = require("../models/waste");


//Create Class..
router.route("/addwaste").post((req,res)=>{

    const wtype = req.body.wtype;
    const weight = req.body.weight;
    const wprice =  req.body.wprice;
    const dsite =  req.body.dsite;



    const newWaste = new Waste({
        wtype,
        weight,
        wprice,
        dsite

    })

    newWaste.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read..
router.route("/allwaste").get((req,res)=>{

    Waste.find().then((Waste)=>{
        res.json(Waste)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/wastereport").get((req,res)=>{

    Waste.find().then((Waste)=>{
        res.json(Waste)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/fwastereport").get((req,res)=>{

    Waste.find().then((Waste)=>{
        res.json(Waste)
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
router.route("/deletewaste/:id").delete(async (req, res) => {
    let wasteId = req.params.id;

    await Waste.findByIdAndDelete(wasteId)
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

router.route("/getwaste/:id").get(async (req, resp) => {
    let result = await Waste.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})  





router.route("/updatewaste/:id").put(async (req, resp) => {
    let result = await Waste.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})  

module.exports = router;