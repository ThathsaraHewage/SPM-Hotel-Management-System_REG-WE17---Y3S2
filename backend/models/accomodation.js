const mongoose = require('mongoose');
const{ObjectId} = mongoose.Schema;

const roomShema = new mongoose.Schema({
    title:{
        type:String,
        trim: true,
        required: true,
    },
    description:{
        type:String,
        trim: true,
        required: true,
    },
    condition:{
        type:String,
        required: true,
        trim: true
    },
    rooms:{
        type: Number
    },
    price:{
        type: Number,
        required: true
    },
    status:{
        type:String,
        default:"available"
    },
    photo:{
        data: Buffer,
        contentType: String
    }
},{timestamps: true});

module.exports = mongoose.model("RoomTypes", roomShema);