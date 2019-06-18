const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:"String"
   , password : "String"
   , email:"String"
   , DOB:"String"
});

const Users = new mongoose.model("User",userSchema)

module.exports = Users