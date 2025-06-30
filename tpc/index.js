const app = require('express')()
const parser = require('body-parser')
const connectDb = require('./dbconfig')
const interview = require('./requirement')

connectDb()
app.use(parser.json())
app.use('/hire',interview)

app.listen(8082,async()=>{
    console.log("TPC running!!!!!")
})