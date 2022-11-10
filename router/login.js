const express = require("express")
const { login } = require("../controller/login")
const router = express.Router()



router.route("").get(login)


module.exports={router}