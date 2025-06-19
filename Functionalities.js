// function isPrime(digit){
//     if(digit==2||digit==3||digit==5||digit==7||digit%2!=0&&digit%3!=0&&digit%5!=0&&digit%7!=0){
//         // return true
//         console.log(digit+" is prime")
//     }
//     else{
//         console.log(digit+" is not prime")
//     }
// }

// arrow
let isPrime = (digit) => {
    if(digit==2||digit==3||digit==5||digit==7||digit%2!=0&&digit%3!=0&&digit%5!=0&&digit%7!=0){
        // return true
        console.log(digit+" is prime")
    }
    else{
        console.log(digit+" is not prime")
    }
}

isPrime(19)