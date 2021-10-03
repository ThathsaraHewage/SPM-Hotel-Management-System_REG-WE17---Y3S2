const mongoose = require('mongoose');
const{ObjectId} = mongoose.Schema;

const bookingsSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true,
    },
    lastname:{
        type:String,
        required: true,
    },
    address:{
        type:String,
        required: true,
    },
    city:{
        type:String,
        required: true,
    },
    hours:{
        type: Number,
        required: true
    },
    checkindate:{
        type:String,
        required: true,
    },
    holdersname:{
        type:String,
        required: true,
    },
    cardnumber:{
        type:String,
        required: true,
    },
    cvv:{
        type: Number,
        required: true
    },
    expdate:{
        type:String,
        required: true,
        }
},{timestamps: true});
module.exports = mongoose.model("ActivityBooking", bookingsSchema);