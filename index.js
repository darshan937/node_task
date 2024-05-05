const express = require('express');  //Import library

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./database/database');

const app = express(); //define application

dotenv.config() // env configuration 

connectDB();


//json config
app.use(express.json())


const port = process.env.PORT; //port

app.listen(port, () => {
console.log(`App running at port; ${port}`)
}); // start server


 app.get('/test', (req, res)=>{
    res.send('final')
 }); //creating test API

 //Cofiguring user routes
app.use('/api/users', require('./routes/userRoutes'))
//  app.use('/api/product', require('./routes/productRoutes'))

 // http://localhost:5600/api/user/create
 // http://localhost:5600/api/product/create




