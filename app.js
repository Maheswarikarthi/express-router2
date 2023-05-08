const express=require('express')
const app=express()
const userRouter=require('./home')
const aboutRouter=require('./about')
const contactRouter=require('./contact')
const serviceRouter=require('./service')

app.get('/',(request,response)=>{
    response.send("hello")
})
app.use('/home',userRouter)
app.use('/about',aboutRouter)
app.use('/contact',contactRouter)
app.use('/service',serviceRouter)

app.listen(3600)
