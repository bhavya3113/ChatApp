const mongoose = require("mongoose");
const path = require("path");
const schema = mongoose.Schema;

const studentSchema = new schema({
  fullname:{
    type: String,
    require: true
  },
  email:{
    type: String,
    require: true
  },
  password:{
    type: String,
    require:true
  },
  googleid:{
    type:String
  }
})

module.exports = mongoose.model("users",studentSchema);