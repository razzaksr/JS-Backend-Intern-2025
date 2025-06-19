// data logic is list/array
cart = ["laptop","levis","allon solly","nike"]

// const iterate = (value, index) =>{
//     console.log(value+" @ "+index)
// }
// // read
// cart.map(iterate)

// read
// cart.map((value,index)=>{
//     console.log(value+" @ "+index)
// })


// let shortlisted = cart.filter((val,ind)=>{
cart = cart.filter((val,ind)=>{
    return ind>=1 && ind <=2
})

// console.log(shortlisted)
console.log(cart)