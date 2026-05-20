

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

var arrowFunc5=((hello)=>{
   
   console.log("this is "+hello);
   
})
arrowFunc5("meow")



// ****************************** Template literals ****************************************



const fName="Ayan"
const lName="Naeem"
const age=20

console.log(`my name is ${fName} ${lName} and i'm ${age} years Old`);




// ******************************  Default parameter ****************************************

// agr hum arguments dena bhul jayen to hum default parameter desakte hain jiski value kuch bhi rakhsakte hain agr niche hamne argument diya ho aur default paramter bhi diya ho to ye niche wala hi lega

function sum(a,b=0,c=12) {
    console.log(a+b+c);
    
}
sum(2,3)

// yhn hamne default bhi diya hai ar arguments bhi diye hain to ye default nhi lega niche jo diya hai woh lega 
function sum(a,b=0,c=12) {
    console.log(a+b+c);
    
}
sum(2,0,3) //output 5


// ******************************  ...spread operator ****************************************

// spread operator array or object ki value ko copy krne main help krta hai without any involvement of 
// reference 

console.log("spread operator");


var array=[1,2,3,4,5,6,7,8]

var array2=[...array]

array2[0]=2
console.log(array2);
console.log(array);


var array4=array
array4[0]=2
console.log(array,"==> array 4");

// spread operator example with object 

const obj={
    name:"Ayan",
    rollNo:"2022f-bit-060"
}

const obj2={...obj}
obj.name="Iqbal"

console.log(obj2);


// ******************************  ...rest operator ****************************************

// rest operator ap parameter main three dot deta hain agr argument main koi value bach jati hai to woh usmain store hojati hai array format main


function greet(a,b,...c) {
    console.log(a,b,c);
    
}

greet(1,2,3,4,5,6,7,8,9)


// ******************************  Destructuring  ****************************************
 
const newArray=[1,2,3,4,5,6,7,8,9,10]

var [one,two,pakora, ,five]=newArray

console.log(pakora,"==> one");


const myObj={
    name:"moiz",
    father:"abid",
    role:"IT"

}

var {name:myName,father,role}=myObj

father="naeem"//idhar bs variable ka name naeem hoga uper se change nhi hoga

console.log(myObj);


// ******************************  Promises  ****************************************

var p=new Promise((res,rej)=>{
    if(false){
       return res()
    }else{
       return rej()
    }
})

p
.then(function(){
    console.log("resolve hogya hai");
    
})
.catch(function(){
    console.log("reject hogya hai");
    
})




var ans=new Promise((res,rej)=>{
   var myNum=Math.floor(Math.random()*10)
   if(myNum>5){
    res()
   }else{
    rej()
   }

})

ans.then(function() {
    console.log("greater than 5");
    
})
.catch(function () {
    console.log("less than 5");
    
})

var p1=new Promise((res,rej)=>{
    return res("ghr pr aao")
})

var p2=p1.then(function(data){
    console.log(data);
    return new Promise((res,rej)=>{
          return res("gate kholo aur gate lgao")
    })
    
})

var p3=p2.then(function(data){
   console.log(data);
   return new Promise((res,rej)=>{
       return res("laptop kholo")
   })
})

p3.then(function(data){
console.log(data);

})


// ******************************  Try catch  ****************************************

// agr ap chahte  ho ek error ki wjh apka agey wala code khrab na ho woh lazmi chale to ap try catch use krte ho 

// Example




try {
    console.log(hey);
    
} catch (err) {
    console.log(err);
    
}





// ******************************  Ternary Operator ****************************************

var userAge=14
var ageCheck=userAge>18?"Age is greater than 18":"Age is less than 18"



console.log(ageCheck,"===> Ternary Operator");


// ******************************  Optional Chaining ****************************************

// const obj11=null
// console.log(obj11.age,">>>>>> result");//======> yhn error ayega

const obj12=null
console.log(obj12?.age,">>>>>> result");//======> yhn undefined ayega

const obj10={
    name:"Ayan",
    hello:{
        city:"karachi"
    }
}

console.log(obj10.address,"=============> result of 278");

const user={}

console.log(user.age.city);//error ayega
console.log(user?.age?.city);//undefined ayega

console.log("Ayan");

// ****************************** Fetch Api ****************************************

const url="url"

async function fetchData() {
    const response=await fetch(url)
    console.log(response);
    
}

fetchData()



console.log("hello this is my code");
console.log("Hello my name is Ayan")
console.log ("hi this is my laptop which get hang some time")





