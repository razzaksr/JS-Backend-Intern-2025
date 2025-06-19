const prompt = require('prompt-sync')()
// import numby as num
let orders = ["surface pro","flip flops","pen drive","redmi note 14"]

// Create
const createOrder = () =>{
    const pro = prompt("Enter the product","")
    orders.push(pro)
    console.log(pro+" order placed")
}
// Read
const readAll = () =>{
    orders.map((val,ind)=>{
        console.log(val)
    })
}
// Update
const updateOne = () =>{
    const pos = Number(prompt("enter the index"))
    const pro = prompt("enter the new product")
    orders[pos] = pro
    console.log(pro+ "updated @ "+pos)
}
// Delete
const deleteFew = () =>{
    const limit = Number(prompt("Tell us index til to be deleted "))
    orders = orders.filter((val,ind)=>{
        return ind>=limit
    })
}

// createOrder()
// updateOne()
deleteFew()
readAll()