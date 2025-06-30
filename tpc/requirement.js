const router = require('express').Router()
const Campus = require('./model')

// CRUD operations endpoints

// schedule new campus requirement
router.post('/schedule',async(req,res)=>{
    const newCampus = new Campus(req.body)
    await newCampus.save()
    res.json({"message":
        `${req.body.company} scheduled`})
})

// read all campus companies
router.get('/view',async(req,res)=>{
    res.json(await Campus.find())
})

module.exports = router