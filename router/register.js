const express = require("express")
const {  registered } = require("../controller/register")
const router= express.Router()


router.route("").post(registered)






module.exports=router