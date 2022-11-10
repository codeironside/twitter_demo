const mongoose = require("mongoose");
const USER = mongoose.Schema(
  {
    // studentId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Student",
    //   required: true,
    // },
    firstName: {
      type: String,
      required: [true, "Please add a text value"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    DOB: {
      type: String,
    },

    gender: {
      type: String,
      required:true
    },
    gender: {
      type: String,
      required:[true, "please enter your password"]
    },
    friends:{
        type:String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("USER", USER);