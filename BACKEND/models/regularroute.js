const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const regularrouteSchema = new Schema({

    rdayid : {
        type : String,
        required: true
    },
    rday : {
        type : String,
        required: true
    },
    rroute : {
        type : String,
        required: true
    }

})

const RegularRoute = mongoose.model("RegularRoute",regularrouteSchema);
module.exports = RegularRoute;