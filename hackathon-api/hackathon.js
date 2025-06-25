const router = require('express').Router()

// storage:
let myHackathons = [
    {
        "name":"iot hackathon",
        "organizer":"muthayammal",
        "winner":"sriram",
        "firstrunner":"dharshan",
        "secondrunner":"naveen",
        "participants":[
            "sriram","naveen","dharshan","victor"
        ]
    },
    {
        "name":"sustainable energy hackathon",
        "organizer":"sona",
        "winner":"",
        "firstrunner":"",
        "secondrunner":"",
        "participants":[
            "krishna","vinayak","madhav","anbarasan"
        ]
    }
]

// hackathon based routings
// create new event
router.post('/schedule',async(req,res)=>{
    myHackathons.push(req.body)
    res.json({"message":`New event ${req.body.name} has scheduled`})
})
// view all events
router.get('/view',async(req,res)=>{
    res.json(myHackathons)
})
// enroll participant name via name of the event >> patch
router.patch('/enroll/:eventname/:student',async(req,res)=>{
    myHackathons.map(val=>{
        if(val.name === req.params.eventname&&val.winner===""){
            val.participants.push(req.params.student)
            res.json({message:`${req.params.student} has enrolled in the ${req.params.eventname}`})
        }
    })
    res.json({"error":`${req.params.eventname} not available`})
})
// announce winner, first runner, second runner via patch as body
router.patch('/announce',async(req,res)=>{
    const{name,winner,firstrunner,secondrunner} = req.body
    myHackathons.map(val=>{
        if(val.name === name&&val.winner===""&&val.firstrunner===""&&val.secondrunner===""&&val.participants.includes(winner)&&val.participants.includes(firstrunner)&&val.participants.includes(secondrunner)){
            val.winner = winner
            val.firstrunner = firstrunner
            val.secondrunner = secondrunner
            res.json({"message":`reward winners are announced for the ${name}`})    
        }
    })
    res.json({"error":`${name} may not available/ invalid announcement`})
})
// delete>> cancel event by name
router.delete('/cancel/:name',async(req,res)=>{
    for(var index = 0;index < myHackathons.length; index++){
        if(myHackathons[index].name === req.params.name){
            if(myHackathons[index].winner!=="")
                res.json({error:`can't cancel ${myHackathons[index].name} since event already held`})
            myHackathons[index]={}
            res.json({message:`${req.params.name} has been cancelled`})
        }
    }
    res.json({"error":`event not found`})
})

module.exports = router