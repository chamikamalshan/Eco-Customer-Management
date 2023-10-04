const router = require("express").Router();
let CustomerData = require("../customer");


router.route("/getprofile/:id").get(async (req, resp) => {
    let result = await CustomerData.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})  





router.route("/updateprofile/:id").put(async (req, resp) => {
    let result = await CustomerData.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})  

module.exports = router;