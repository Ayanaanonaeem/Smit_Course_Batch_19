

// ****************************** let & Const difference ****************************************


let a="String"
a="Blue" //hum let ko reassign krsakte hain aese without using let

console.log(a);

{

    let b=24
    console.log(b);
    
}

let c=10
{
    let c=20
    console.log(c);
    
}
console.log(c);

 

// agr hamen value fix rakhni hai to hum const use krte hain 

const name="ayan" 
// const name="shayan"   hum const ko reassign nhi krsakte 


// ****************************** Arrow function ****************************************


// three type of arrow function

// 1. Simple arrow function

var arrowFunc1=()=>{console.log("hello World");}
arrowFunc1()

// 2. Arrow function with one parameter
// For single paramter

var arrowFunc2=param=>{console.log(param);}
arrowFunc2(2)

// for double parameter

var arrowFunc3=(param,second)=>{console.log(param,second);}
arrowFunc3(23,4)

// 3.Arrow Function with return

var arrowFunc4=()=>12
console.log(arrowFunc4());


// ****************************** Template literals ****************************************



const fName="Ayan"
const lName="Naeem"
const age=20

console.log(`my name is ${fName} ${lName} and i'm ${age} years Old`);




