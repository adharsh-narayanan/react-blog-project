//import json-server library

const jsonServer = require("json-server")

//create server

const blogServer = jsonServer.create()

//path

const router = jsonServer.router('db.json')

//middleware

const middleware = jsonServer.defaults()

//connect
blogServer.use(middleware)
blogServer.use(router)

//port

const port = 4006||process.env.PORT

//running server

blogServer.listen(port,()=>{
    console.log('blog server running succesfully at port 4006');
})
