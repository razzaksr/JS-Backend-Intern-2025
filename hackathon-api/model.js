const mongoose = require('mongoose')
// collection to be created at cluster
const hackathonSchema = mongoose.Schema({
    "name":{type:String, require:true},
    "organizer":{type:String,require:true},
    "winner":{type:String},
    "firstrunner":{type:String},
    "secondrunner":{type:String},
    "participants":[{type:String}]
})

const myModel = mongoose.model("hackathon",
    hackathonSchema)

module.exports = myModel