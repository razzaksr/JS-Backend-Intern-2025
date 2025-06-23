const app = require('express')()

// routers >> url and action/functionality
app.get('/hi',async(req,res)=>{
    res.send("<h1>Welcome to Backend Internship</h1>")
})

app.get('/hey',async(req,res)=>{
    res.send("<h1>things to be implemented</h1><ol><li>Node</li><li>Express</li><li>MongoDB</li></ol>")
})

// app is api server
app.listen(8081,async()=>{
    console.log("My first backend server is running!!!!!!!")
})