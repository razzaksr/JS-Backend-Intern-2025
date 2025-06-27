const mongoose = require('mongoose')

const connectDb = async() => {
    try{
        await mongoose.connect("mongodb+srv://razak:mohamed@cluster0.ptmlylq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("database is connected!!!!!!")
    }
    catch(err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDb