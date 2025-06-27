const app = require('express')()
const parser = require('body-parser')
const base = require('./basics')
const hack = require('./hackathon')
const patient = require('./patient')
const connectDb = require('./dbconfig')

// call connectDb
connectDb()

// middleware
app.use(parser.json())

app.use('/begin',base)
app.use('/event',hack)
app.use('/hospital',patient)

// app is api server>> localhost:8081
app.listen(8081,async()=>{
    console.log("My first backend server is running!!!!!!!")
})