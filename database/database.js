// write a function 
// importing pacakages 
// always export the functton 

// importing  the pacakages 
const mongoose = require('mongoose');


// Creating a function 
const connectDB = () => {
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database Connected Successfully")
 })
}

// exporting the function 
module.exports = connectDB;
