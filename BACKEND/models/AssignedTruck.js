import mongoose from "mongoose";

const Schema = mongoose.Schema;

const assignedTruckSchema = new Schema({
    userId:{
        type: String
    },
    vehicleNumber:{
        type: String
    },
    vehicleType:{
        type: String
    },
    date:{
        type: Date
    },
    weight:{
        type: Number
    },
    address:{
        type: String
    },
    number:{
        type: String
    },
    status:{
        type: Boolean,
        default: false
    }
});  

const AssignedTruck = mongoose.model("AssignedTruck", assignedTruckSchema);
export default AssignedTruck;