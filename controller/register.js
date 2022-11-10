const asyncHandler = require("express-async-handler");
const USER = require("../models/user");

const registered = asyncHandler(async (req, res) => {
  const { firstName } = req.body;
  const {  lastName} = req.body;
  const { email} = req.body;
  const {gender } = req.body;
  const { DOB } = req.body;
  const { password } = req.body;
  console.log(email);
  const user = await USER.findOne({ email: email });
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  if (user) {
    throw new Error(`${user.firstName} already exist`);
  }
  const newUser = await USER.create({
     firstName,
    lastName,
    email,
     gender,
    DOB,
    hashedPassword
});
  if (newUser) {
    res
      .status(202)
      .json({
        firstName:newUser.firstName,
        lastName:newUser.lastName,
        email:newUser.email,
        gender:newUser.gender,
        DOB:newUser.DOB
  });
  }


});

module.exports = { registered };
