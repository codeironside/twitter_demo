const express = require("express")
const {  registered } = require("../controller/register")
const router= express.Router()


router.route("").get(registered)







module.exports=router