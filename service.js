const express=require('express')
const serviceRouter=express.Router()
serviceRouter.get('/',(request,response)=>{
    response.send("this is service page")
})
module.exports=serviceRouter