const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const wasteSchema = new Schema({

    wtype : {
        type : String,
        required: true
    },
    weight : {
        type : String,
        required: true
    },
    wprice : {
        type : Number,
        required: true
    },
    dsite : {
        type : String,
        required: true
    }

})

const Waste = mongoose.model("Waste",wasteSchema);
module.exports = Waste;