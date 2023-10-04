const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const specialrouteSchema = new Schema({

    sid : {
        type : String,
        required: true
    },
    sdistrict : {
        type : String,
        required: true
    },
    smaincity : {
        type : String,
        required: true
    },
    saddress : {
        type : String,
        required: true
    }

})

const SpecialRoute = mongoose.model("SpecialRoute",specialrouteSchema);
module.exports = SpecialRoute;