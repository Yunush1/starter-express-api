const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/db');

// use express to server
const app = express();

// use morgan to devlopement function
app.use(morgan('dev'));

app.use(express.json({}));
app.use(express.json({
    extended : true
}))

// call config enviroment
dotenv.config({
    path : './config/config.env'
})

connectDb();
// Our server running on this 
http://localhost:3000/api/data/auth/register
app.use('/api/data/auth',require('./routes/user'));






// its running on Port of given perticular port which is 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT,
    console.log(`Server running on : ${PORT}`.red.underline.bold))
