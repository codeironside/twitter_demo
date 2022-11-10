const USER = require('../models/user');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');





const login = asyncHandler(async (req, res) => {
  //hash the password
  const { email, password } = req.body;
 
 

  const user = USER.findOne({email:email})
  if(!user){
    res.status(404)
    throw new Error("user not found")
  }
  if (user && bcrypt.compare(password, user.password)) {
    res.status(202).json({
      user
    })
  }
});

module.exports = { login };
