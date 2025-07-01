require('dotenv').config()
const mongoose = require('mongoose')

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected!!!!!!")
    }
    catch(err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDb