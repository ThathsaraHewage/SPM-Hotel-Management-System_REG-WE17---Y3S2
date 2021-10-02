const mongoose = require('mongoose');
const{ObjectId} = mongoose.Schema;

const roomBookingSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true,
        trim: true
    },
    lastname:{
        type:String,
        required: true,
        trim: true
    },
    address:{
        type:String,
        required: true,
        trim: true
    },
    city:{
        type:String,
        required: true,
        trim: true
    },
    days:{
        type:Number,
        required: true,
        trim: true
    },
    checkindate:{
        type:String,
        required: true,
        trim: true
    },
    norooms:{
        type:Number,
        required: true,
        trim: true
    },
    holdersname:{
        type:String,
        required: true,
        trim: true
    },
    cardnumber:{
        type:String,
        required: true,
        trim: true
    },
    cvv:{
        type:Number,
        required: true,
        trim: true
    },
    expdate:{
        type:String,
        required: true,
        trim: true
    },
},{timestamps:true});

module.exports = mongoose.model("roombookings",roomBookingSchema);