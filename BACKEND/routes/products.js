const router = require("express").Router();
const {product} = require("express");
let Product = require("../models/product");


//Create Class..
router.route("/addproduct").post((req,res)=>{

    const pname = req.body.pname;
    const price =  Number(req.body.price);
    const pstock =  Number(req.body.pstock);



    const newProduct = new Product({
        pname,
        price,
        pstock

    })

    newProduct.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read..
router.route("/allproduct").get((req,res)=>{

    Product.find().then((product)=>{
        res.json(product)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/viewproduct").get((req,res)=>{

    Product.find().then((product)=>{
        res.json(product)
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
router.route("/deleteproduct/:id").delete(async (req, res) => {
    let productId = req.params.id;

    await Product.findByIdAndDelete(productId)
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

router.route("/getproduct/:id").get(async (req, resp) => {
    let result = await Product.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})
router.route("/getproductcard/:id").get(async (req, resp) => {
    let result = await Product.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})    





router.route("/updateproduct/:id").put(async (req, resp) => {
    let result = await Product.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})  

module.exports = router;