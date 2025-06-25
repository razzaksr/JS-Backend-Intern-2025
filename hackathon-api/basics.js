const base = require('express').Router()
// routers >> url and action/functionality
base.get('/hi',async(req,res)=>{
    res.send("<h1>Welcome to Backend Internship</h1>")
})

base.get('/hey',async(req,res)=>{
    res.send("<h1>things to be implemented</h1><ol><li>Node</li><li>Express</li><li>MongoDB</li></ol>")
})

var employees = ["Razak Mohamed S","Dharun Prakash","Vetrikanth","Annamalai"]
let salaries = [19.5,20.5,1.2,2.5,0.8,1.5,1.80,2.6]

base.put('/apprisal',async(req,res)=>{
    salaries = salaries.map(val=>{
        if(val<=1.8)
            val+=(val*0.100)
        return val
    })
    res.json(salaries)
})

// read
base.get('/fetch',async(req,res)=>{
    res.json(employees)
})
// read with request param
base.get('/position/:receive',async(req,res)=>{
    res.json(employees[req.params.receive])
})
// read with param
base.get('/range/:start/:end',async(req,res)=>{
    res.json(employees.slice(req.params.start,req.params.end))
})

base.get('/word/:count',async(req,res)=>{
    var shortlisted = employees.map((val,ind)=>{
        if (val.split(" ").length==req.params.count)
            return val
        else
            return ""
    })
    return res.json(shortlisted)
})

// post mapping>> passing data via request body
base.post('/recruite',async(req,res)=>{
    employees.push(req.body.person)
    res.json(employees)
})

// put>> update via body
base.put('/change/',async(req,res)=>{
    const{position,person} = req.body
    employees[position]=person
    res.json(employees)
})

// delete>> url
base.delete('/remove/:index',async(req,res)=>{
    employees = employees.filter((val,ind)=>{
        return ind!=req.params.index
    })
    res.json(employees)
})

module.exports=base