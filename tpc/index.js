const app = require('express')()
const parser = require('body-parser')
const connectDb = require('./dbconfig')
const interview = require('./requirement')
const auth = require('./auth')

connectDb()
app.use(parser.json())
app.use('/hire',interview)
app.use('/auth',auth)

app.listen(8082,async()=>{
    console.log("TPC running!!!!!")
})