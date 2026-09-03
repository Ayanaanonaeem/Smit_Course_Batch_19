const user={
    username:"Ayan",
    age:16,
    welcomeUser:function(){
        // console.log(`${this.username} welcome to js`);
        console.log(this);
        
        
    }
}

// user.welcomeUser()
user.username="anas"
// user.welcomeUser()

// This refer krta hai context ko agr object main use krrahe hain 

// node main this console kren to woh khali curly bracket ko refer krta hai 

// aur brower main this window ko refer krta hai 

console.log(this);



// function main this alag hota hai agr ismain this.uername likhte hain to iske context ko refer nahi krta 
function addOne() {
    let username="Ayan"
    console.log(this);
    
}
// addOne()


//arrow function main this alag hota hai normal function ki apni properties deta hai but arrow function main kahli curly bracket deta hai

var addtwo=()=>{
    let username="Ayan"
    console.log(this);
    // console.log(this);
    
}
addtwo()


const addThree=(num1,num2)=>{
    return num1+num2
}


console.log(addThree(1,2))

// hum arrow function main implicit return bhi krsakte hain  ismain return use nhi krte 

// const addFour=(num1,num2)=>num1+num2

// console.log(addFour(1,2))




// agr hamen object return krna huwa to hum aese return krsakte hain 

const addFour=(num1,num2)=>({username:"ayan"})

console.log(addFour(1,2))

