import mongoose from "mongoose";

const Schema = mongoose.Schema;

const truckSchema = new Schema({
    vehicleNumber:{
        type: String
    },
    chasisNumber:{
        type: String
    },
    curbWeight:{
        type: String
    },
    manufacturer:{
        type: String
    },
    fuelType:{
        type: String
    },
    power:{
        type: String
    },
    noOfStaff:{
        type: Number
    },
    image:{
        type: String
    }
});  

const Truck = mongoose.model("Truck", truckSchema);
export default Truck;