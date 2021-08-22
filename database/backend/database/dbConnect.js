require('dotenv').config();
const mongoose = require('mongoose');

//make the db connection : asyncronoze call
const connection = async()=> {
    try{
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         });
         // Connection to the database is successful
         console.log('Database connection SUCCESS');
    }catch(err){
        console.log(err);
    }
}
module.exports = connection;

