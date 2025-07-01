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

// delete campus via _id
router.delete('/cancel/:id',async(req,res)=>{
    await Campus.findOneAndDelete({_id:req.params.id})
    res.json({"message":`${req.params.id} has been cancelled`})
})

// add participants by _id
router.patch('/register',async(req,res)=>{
    const{primary,candidate} = req.body
    const tempCamp = await Campus.findOne({_id:primary})
    if(tempCamp&&tempCamp.recruited.length>0)
        res.status(400).json({error:`${primary} already held`})        
    const one = await Campus.findOneAndUpdate(
        {_id:primary},
        {$addToSet:{participants:candidate}},
        {new:true}
    )
    if(!one)
        res.status(404).json({error:`${primary} not available`})
    res.json({message:`${primary} updated`})
})

// declare who are all selected
router.patch('/results',async(req,res)=>{
    const{primary,candidates} = req.body
    const tempCamp = await Campus.findOne({_id:primary})
    if(tempCamp&&tempCamp.recruited.length>0)
        res.status(400).json({error:`${primary} already held`})
    candidates.map((each,index)=>{
        if(tempCamp.participants.includes(each))
            tempCamp.recruited.push(each)
    })
    // update since _id already available
    await tempCamp.save()
    res.json({message:`${tempCamp.company} has dcone with their recruitement`})
})

module.exports = router