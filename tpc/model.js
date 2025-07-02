const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
// collection to be created at cluster
const campusSchema = mongoose.Schema({
    "company":{type:String, require:true},
    "role":{type:String,require:true},
    "recruited":[{type:String}],
    "participants":[{type:String}],
    "package":{type:Number}
})

const userSchema = mongoose.Schema({
    "username":{type:String, unique:true},
    "password":{type:String},
    "role":{
        type:String,
        enum:['student','staff'], 
        default:'student'
    }
})

userSchema.pre('save',async function(){
    if(!this.isModified('password')) return
    const salted = await bcrypt.genSalt(12)
    this.password = await bcrypt.hash(this.password,salted)
})

const Campus = mongoose.model("campus",campusSchema)
const User = mongoose.model("users",userSchema)

module.exports = {Campus, User}