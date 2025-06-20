const prompt = require('prompt-sync')()
let myCustomers = [
    {
        "account-number":6545678345,
        "account-holder":"Dharshan",
        "account-balance":798.4,
        "is-active":true,
    },
    {
        "account-number":765456789234,
        "account-holder":"Harish",
        "account-balance":500.4,
        "is-active":true,
    },
    {
        "account-number":3456787654567,
        "account-holder":"Pooja",
        "account-balance":1203.4,
        "is-active":true,
    }
]

// CRUD

const openAccount = () =>{
    console.log("Enter the KYC details such as name, accountnumber, balance ")
    // json
    const newAccount = {
        "account-number":Number(prompt("Enter the account number ")),
        "account-holder":prompt("enter the name "),
        "account-balance":Number(prompt("enter account balance ")),
        "is-active":true,
    }
    myCustomers.push(newAccount)
    console.log("your account opened successfully")
}

const viewCustomers = () =>{
    myCustomers.map((obj,ind)=>{
        (obj['is-active'])?console.log(obj):console.log()
    })
}
// update
const transaction = () =>{
    const accNo = Number(prompt("enter the account number to perform transaction "))
    const amount = Number(prompt("enter the amount to perform transaction "))
    const type = prompt("enter the type of transaction (credit/ debit)")
    for(var index = 0;index<myCustomers.length;index++){
        if(myCustomers[index]['account-number']==accNo){
            if(type=='credit'){
                myCustomers[index]['account-balance']+=amount
                console.log(amount+" has been deposited to "+accNo)
                return
            }
            else if(type==='debit'){
                if(myCustomers[index]['account-balance']>=amount){
                    myCustomers[index]['account-balance']-=amount
                    console.log(amount+" has been debited from "+accNo)
                }
                else{
                    console.log("Insufficient balance")
                }
                return
            }
        }
    }
    console.log("Invalid Account number ")
}

const closeAccount = () =>{
    const accNo = Number(prompt("enter the account number to perform transaction "))
    for(var index = 0;index<myCustomers.length;index++){
        if(myCustomers[index]['account-number']==accNo){
            myCustomers[index]['is-active']=false
            console.log("account has been suspended/closed")
            return
        }
    }
    console.log("invalid account number")
}

// openAccount()
// viewCustomers()

// menu driven approach
while(true){
    console.log("Welcome back teller ")
    console.log("1. Open New Account\n2. View Accounts\n3. Transaction\n4. Close account\nAny to Exit")
    var choice = Number(prompt("Enter the choice "))
    switch(choice){
        case 1: openAccount();break;
        case 2: viewCustomers();break;
        case 3: transaction();break;
        case 4: closeAccount();break;
        default: return;
    }
}