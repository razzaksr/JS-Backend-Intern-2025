const app = require('express')()
const parser = require('body-parser')
const base = require('./basics')
const hack = require('./hackathon')

// middleware
app.use(parser.json())

app.use('/begin',base)
app.use('/event',hack)

// app is api server>> localhost:8081
app.listen(8081,async()=>{
    console.log("My first backend server is running!!!!!!!")
})