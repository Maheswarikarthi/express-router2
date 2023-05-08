const express=require('express')
const contactRouter=express.Router()
contactRouter.get('/',(request,response)=>{
    response.send("this is contactpage")
})
module.exports=contactRouter