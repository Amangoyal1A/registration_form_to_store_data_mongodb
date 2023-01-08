const mongoose = require('mongoose');
const userscollection1 = require('./userdata');
mongoose.connect('mongodb://0.0.0.0:27017/myuserdata')
.then(()=>{console.log("Mongoose connection sucessful")})
.catch((err)=>{console.log(err)})


