const router = require('express').Router()
const {v4:uuid} = require('uuid')

let patients = [
    {
        "patientId":"dbvj8394d",
        "patientName":"Divakar",
        "patientIssue":"ortho",
        "patientBMI":31.4,
        "patientType":"ip"
    },
    {
        "patientId":"abcd312k",
        "patientName":"Vikram",
        "patientIssue":"cardio",
        "patientBMI":21.4,
        "patientType":"op"
    }
]

router.delete('/discontinue/:uid',async(req,res)=>{
    const id = req.params.uid
    patients = patients.filter(pat=>pat.patientId!==id)
    res.json({message:"action taken"})
})

router.patch('/mod/:uid',async(req,res)=>{
    const key = req.params.uid
    const bmi = req.body.bmi
    patients.map(pat=>{
        if(pat.patientId===key){
            pat.patientBMI = bmi
            res.json({message:`${bmi} updated of the patient ${pat.patientName}`})
        }
    })
    res.json({error:`${key} is not matched for any patient`})
})

router.get('/op',async(req,res)=>{
    const shortlisted = patients.filter(pat=>pat.patientType==="op")
    res.json(shortlisted)
})

router.get('/ip',async(req,res)=>{
    const shortlisted = patients.filter(pat=>pat.patientType==="ip")
    res.json(shortlisted)
})

router.get('/viewAll',async(req,res)=>{
    res.json(patients)
})

router.post('/register',async(req,res)=>{
    const{patientName,patientIssue,patientBMI} = req.body
    const newPatient = {
        "patientId":uuid(),
        "patientName":patientName,
        "patientBMI":patientBMI,
        "patientIssue":patientIssue,
        "patientType":"op"
    }
    patients.push(newPatient)
    res.json({"message":`${newPatient.patientName} is registered`})
})

module.exports = router