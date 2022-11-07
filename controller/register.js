const asyncHandler = require("express-async-handler")
const USER = require("../models/user")






const registered =asyncHandler( async(req,res)=>{
const {firstName, lastName, email, genderm,DOB}=req
const user = USER.findOne({email:email})

if(user){
    console.log(`${user} exist`)
}
console.log("registered");
})


module.exports ={registered}