const express=require('express')
const serviceRouter=express.Router()
serviceRouter.get('/',(req,res)=>{
    res.send("User Page")
  })
  serviceRouter.get('/new',(req,res)=>{
    res.render('services/new')
  })
  
  
const listOfUsers=[
    {
        
        'name':'webapplication'
    },
    {
        
        'name':'cyber security'
    },
    {
        
        'name':'operating system'
    },
    {
        
        'name':'datascience'
    },
]

serviceRouter.get('/',(request,response)=>{
    response.send("This is list of users")
})
serviceRouter.get('/:id([0-9]{1})',(request,response)=>{
    response.send(request.user.name)
   
})
serviceRouter.param('id',(request,response,next,id)=>{
    request.user=listOfUsers[id-1]
    console.log(id);
    next()
})



//serviceRouter.get('/',(request,response)=>{
    //response.send("this is service page")
//})
module.exports=serviceRouter


