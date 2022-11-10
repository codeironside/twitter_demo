const express = require("express")
const { errorHandler } = require("./middleware/errorhandler")
const dotenv = require("dotenv").config()
const colors= require("colors")
const bcrypt = require('bcrypt');

const connectDB = require("./config/db")



connectDB()

app = express()

const port = process.env.port||7056


app.use(express.urlencoded({extended:false}))



app.use('/register', require('./router/register'))
app.use('/login', require('./router/login'))
// app.use('/api/student', require('./routes/studentRoutes'))
// app.use('/api/drug',require('./routes/drugRoutes'))
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})