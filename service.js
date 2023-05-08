const express=require('express')
const serviceRouter=express.Router()
const listOfUsers=[
    {
        'id':1,
        'name':'webapplication'
    },
    {
        'id':2,
        'name':'cyber security'
    },
    {
        'id':3,
        'name':'operating system'
    },
    {
        'id':4,
        'name':'datascience'
    },
]

serviceRouter.get('/',(request,response)=>{
    response.send("This is list of users")
})
serviceRouter.get('/:id([0-9]{1})',(request,response)=>{
    const pageId=Number(request.params.id)
   
    const userId=listOfUsers.find((user)=>user.id === pageId)
    if(!userId){
        response.send('page not found')
    }
    else{
        response.json(userId.name)
    }
   // response.send(`This is list of users ${request.params.id}`)
})

serviceRouter.get('/',(request,response)=>{
    response.send("this is service page")
})
module.exports=serviceRouter