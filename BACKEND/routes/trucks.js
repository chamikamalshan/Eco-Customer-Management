import { Router } from "express";
import mongoose from "mongoose";
import multer from "multer";
import cloudinary from "cloudinary";
import Truck from "../models/Truck.js";


const router = Router();


const storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});

const imageFilter = function(req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only image files are accepted!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });


cloudinary.config({
  cloud_name: "dg7kcjtlu",
  api_key: "189726296272932",
  api_secret: "dMrT32-k3AGZV_6ruShFRIhGdNM"
});



router.post("/upload", upload.single("image"), async(req, res) => {
  
  const result = await cloudinary.v2.uploader.upload(req.file.path);

  const vehicleNumber = req.body.vehicleNumber;
  const chasisNumber = req.body.chasisNumber;
  const curbWeight = req.body.curbWeight;
  const manufacturer = req.body.manufacturer;
  const fuelType = req.body.fuelType;
  const power = req.body.power;
  const noOfStaff = req.body.noOfStaff;
  const image = result.secure_url;

   
    //res.secure_url

    const newTruckData = {
      vehicleNumber, chasisNumber, curbWeight, manufacturer, fuelType, power, noOfStaff, image
    }
    
    const newTruck = new Truck(newTruckData);

    newTruck.save()
        .then(()=> res.json('Truck Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.post("/update-truck", upload.single("image"), async(req, res) => {
  
  const result = await cloudinary.v2.uploader.upload(req.file.path);

  
  const cart = await Truck.findByIdAndUpdate(req.body.id, {
    vehicleNumber: req.body.vehicleNumber,
    chasisNumber: req.body.chasisNumber,
    curbWeight: req.body.curbWeight,
    manufacturer: req.body.manufacturer,
    fuelType: req.body.fuelType,
    power: req.body.power,
    noOfStaff: req.body.noOfStaff,
    image: result.secure_url
}).then(()=> res.json('Truck Updated'))
        .catch(err => res.status(400).json('Error: '+ err));
});




router.get('/trucks', async (req, res) => {
    const trucks = await Truck.find();
    res.json(trucks);
})


router.get('/trucks/:id', async (req, res) => {
  const id = req.params.id;
  const truck = await Truck.findById(id);

  res.json(truck)
})

router.get('/getImage/:id', async (req, res) => {
  const id = req.params.id;
  const truck = await Truck.findById(id);
  res.json(truck.image);
})

router.get('/trucks/truck/count', async (req, res) => {
  const trucks = await Truck.find();
  res.json(trucks.length);
})

router.delete('/delete/:id', async (req, res) => {
  const result = await Truck.findByIdAndDelete(req.params.id)
  res.json(result)
})

export default router;