import { Router } from "express";
import mongoose from "mongoose";
import multer from "multer";
import cloudinary from "cloudinary";
import Truck from "../models/Truck.js";
import AssignedTruck from "../models/AssignedTruck.js";


const router = Router();


router.post("/assign-truck", async(req, res) => {
  
  const userId = req.body.userId;
  const vehicleNumber = req.body.vehicleNumber;
  const vehicleType = req.body.vehicleType;
  const date = req.body.date;
  const weight = req.body.weight;
  const address = req.body.address;
  const number = req.body.number;

    const assignedTruckData = {
        userId, vehicleNumber, vehicleType, date, weight, address, number
    }
    
    const newAssignedTruck = new AssignedTruck(assignedTruckData);

    newAssignedTruck.save()
        .then(()=> res.json('Truck Assigned'))
        .catch(err => res.status(400).json('Error: '+ err));
});


router.get('/assign-truck/fetch', async (req, res) => {
    const trucks = await AssignedTruck.find();
    res.json(trucks);
})

router.put("/assign-truck/update/:id", async (req, res) => {
    const id = req.params.id;
  
    try {
      const assignedTruck = await AssignedTruck.findById(id);
  
      if (!assignedTruck) {
        return res.status(404).json({ message: "Record not found" });
      }
  
      // Toggle the status field
      assignedTruck.status = !assignedTruck.status;
  
      // Save the updated document
      await assignedTruck.save();
  
      res.json(assignedTruck);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating status" });
    }
  });

  router.get('/assigned/trucks/count', async (req, res) => {
    const assigned = await AssignedTruck.find();
    res.json(assigned.length);
  })


export default router;