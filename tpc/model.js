const mongoose = require('mongoose')
// collection to be created at cluster
const campusSchema = mongoose.Schema({
    "company":{type:String, require:true},
    "role":{type:String,require:true},
    "recruited":[{type:String}],
    "participants":[{type:String}],
    "package":{type:Number}
})
const myModel = mongoose.model("campus",
    campusSchema)
module.exports = myModel