const mongoose = require('mongoose');
const{ObjectId} = mongoose.Schema;

const activitySchema = new mongoose.Schema({
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
    inclusions:{
        type:String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true
    },
    availableTime:{
        type:String,
        required: true,
        trim: true
    },
    availableDate:{
        type:String,
        required: true,
        trim: true
    },
    photo:{
        data: Buffer,
        contentType: String
    }
},{timestamps: true});
module.exports = mongoose.model("Activities", activitySchema);