const mongoose = require("mongoose");


var userschema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
       
    },
    email:{
        type:String,
        required:true,
        unique:true
        

    }, 
    phone:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true 

    }

})
const users_collection1 = new mongoose.model('users_collection1',userschema);
module.exports = users_collection1;