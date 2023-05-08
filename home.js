const express=require('express')
const userRouter=express.Router()
userRouter.get('/',(request,response)=>{
    response.send("this is home page")
})
module.exports=userRouter