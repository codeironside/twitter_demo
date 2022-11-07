const express = require("express")
const { errorHandler } = require("./middleware/errorhandler")

app = express()

const port = process.env.port||7056


app.use(express.urlencoded({extended:false}))



app.use('/register', require('./router/register'))
// app.use('/api/student', require('./routes/studentRoutes'))
// app.use('/api/drug',require('./routes/drugRoutes'))
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`sever listening on port ${port}`);
})