const router = require('express').Router()
const {User} = require('./model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

// authorization endpoints
router.post('/signup',async(req,res)=>{
    const exists = await User.findOne({username:req.body.username})
    if(exists)
        res.status(400).json({error:`${username} already exists`})
    const newUser = new User(req.body)
    await newUser.save()
    res.json({message:
        `${newUser.username} has signed up successfully`})
})

router.post('/signin',async(req,res)=>{
    const{username, password} = req.body
    const exists = await User.findOne({username})
    if(!exists||! (await bcrypt.compare(password,exists.password)))
        res.status(401).send(`Unauthorized ${username}`)
    // token creation
    const token = jwt.sign({"user":username},process.env.SECRET_KEY,{expiresIn:'1hr'})
    res.json({message:token})
})

module.exports = router