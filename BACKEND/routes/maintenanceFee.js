import { Router } from "express";
import mongoose from "mongoose";
import multer from "multer";
import cloudinary from "cloudinary";
import MaintenanceFee from "../models/MaintenanceFee.js";


const router = Router();


router.post("/add-maitenance-fee", async(req, res) => {
  
  const itemName = req.body.itemName;
  const vehicleId = req.body.vehicleId;
  const noOfUnits = req.body.noOfUnits;
  const priceOfAUnit = req.body.priceOfAUnit;

    const maintenanceData = {
        itemName, vehicleId, noOfUnits, priceOfAUnit
    }
    
    const newMaintenanceData = new MaintenanceFee(maintenanceData);

    newMaintenanceData.save()
        .then(()=> res.json('Maintenance Fees Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});


router.get('/add-maitenance-fee', async (req, res) => {
    const maintenanceFee = await MaintenanceFee.find();
    res.json(maintenanceFee);
});

router.put("/maintenance/update/:id", async (req, res) => {
    const id = req.params.id;
  
    try {
      const maintenanceFee = await MaintenanceFee.findById(id);
  
      if (!maintenanceFee) {
        return res.status(404).json({ message: "Record not found" });
      }
  
      // Toggle the status field
      maintenanceFee.status = !maintenanceFee.status;
  
      // Save the updated document
      await maintenanceFee.save();
  
      res.json(maintenanceFee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating fee status" });
    }
  });

  router.get('/maintenances/maintainence/count', async (req, res) => {
    const maintenanceFee = await MaintenanceFee.find();
    res.json(maintenanceFee.length);
  })


export default router;