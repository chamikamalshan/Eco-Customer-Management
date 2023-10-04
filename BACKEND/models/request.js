const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    phone : {
        type : Number,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    slip : {
        type : String,
        required: true
    },
    message : {
        type : String,
        required: true
    }

})

const Request = mongoose.model("Request",requestSchema);
module.exports = Request;