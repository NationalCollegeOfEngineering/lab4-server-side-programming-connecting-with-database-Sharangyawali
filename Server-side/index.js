const express=require('express')
const cors=require('cors')
const user=require('./Db/user')
require('./Db/connectdb')
const app=express()
app.use(cors())
app.use(express.json())
app.post('/register',(req,res)=>{
    let data=new user({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    data.save()
    .then(result=>{
        res.status(200)
        .json({success:true,result:req.body})
    })
    .catch(err=>{
        res.status(400)
        .json({success:false,result:"Error in registration"})
    })
})
app.post('/login',async(req,res)=>{
    if(req.body.password&&req.body.email&&req.body.name){
        let data=await user.findOne(req.body).select("-password")
         if(data){
            res.status(200)
            .json({success:true,result:data})
         }
         else{
            res.status(400)
            .json({success:false,result:"Please enter the valid information"})
         }
     }
     else{
        res.status(400)
        .json({success:false,result:"Please provide the user details"})
     }
})
app.listen(3003,()=>{
console.log('listening at port 3003')
})