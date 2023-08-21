const mongoose=require('mongoose')
const userSch= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const userModel=mongoose.model('User',userSch)
module.exports=userModel