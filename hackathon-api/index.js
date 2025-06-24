const app = require('express')()
const parser = require('body-parser')

// middleware
app.use(parser.json())

// routers >> url and action/functionality
app.get('/hi',async(req,res)=>{
    res.send("<h1>Welcome to Backend Internship</h1>")
})

app.get('/hey',async(req,res)=>{
    res.send("<h1>things to be implemented</h1><ol><li>Node</li><li>Express</li><li>MongoDB</li></ol>")
})

var employees = ["Razak Mohamed S","Dharun Prakash","Vetrikanth","Annamalai"]

// read
app.get('/fetch',async(req,res)=>{
    res.json(employees)
})
// read with request param
app.get('/position/:receive',async(req,res)=>{
    res.json(employees[req.params.receive])
})
// read with param
app.get('/range/:start/:end',async(req,res)=>{
    res.json(employees.slice(req.params.start,req.params.end))
})

app.get('/word/:count',async(req,res)=>{
    var shortlisted = employees.map((val,ind)=>{
        if (val.split(" ").length==req.params.count)
            return val
        else
            return ""
    })
    return res.json(shortlisted)
})

// post mapping>> passing data via request body
app.post('/recruite',async(req,res)=>{
    employees.push(req.body.person)
    res.json(employees)
})

// put>> update via body
app.put('/change/',async(req,res)=>{
    const{position,person} = req.body
    employees[position]=person
    res.json(employees)
})

// delete>> url
app.delete('/remove/:index',async(req,res)=>{
    employees = employees.filter((val,ind)=>{
        return ind!=req.params.index
    })
    res.json(employees)
})

// app is api server>> localhost:8081
app.listen(8081,async()=>{
    console.log("My first backend server is running!!!!!!!")
})