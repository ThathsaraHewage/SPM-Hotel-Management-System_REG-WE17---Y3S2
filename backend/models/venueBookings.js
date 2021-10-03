const mongoose = require('mongoose');
const{ObjectId} = mongoose.Schema;

const venueBookingSchema = new mongoose.Schema({
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
    emailaddress:{
        type:String,
        required: true,
        trim: true
    },
    phoneNumber:{
        type:String,
        required: true,
        trim: true
    },
   
    preferredDate:{
        type:String,
        required: true,
        trim: true
    },
    additionalComment:{
        type:String,
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

module.exports = mongoose.model("venuebookings",venueBookingSchema);