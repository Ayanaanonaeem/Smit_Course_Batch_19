var newObj={
    name:"Ayan",
    age:20,
    proffesion:"Mern stack developer"
}

// console.log(typeof newObj);// object

var array=[1,2,3,4,5,6]
// console.log(typeof array);// object


function mysum() {
 var a=3
 var b=4
 b+a
    
}

// console.log(typeof mysum);//function


// console.log(typeof null);//object 


// baqi sb ki wohi ayegi jo hai unki 
 
var name3=Symbol("123")
var name2=Symbol("123")

// console.log(name3 ===name2);

// ye false dega hamesha kynke ye donon alag hain



// 888888888888888888888888888888888888888888888888

// there are two type of memory in js 

// 1. stack 
// primitive datatype store hote hain 

// jb bhi primitive data type change krte hain to uski copy main change hota hai 

// example

let username="ayan"
let anotheName=username //another name ko copy mili username ki is wjh se ismain change nahi huwa 
anotheName="jawaid"

// console.log(username);
// console.log(anotheName);








// 2. heap
// non primitive datatype store hote hain 

// jb bhi nonprimtive data type change krte hain to uski orignial value main change hota hai 



// example

let userOne={
    0:"faraz",
    age:13,
}

let userTwo=userOne
userTwo.name1="ayan"

console.log(userOne[0]);
console.log(userOne["name1"]); //for accesing keys in obj
// console.log(userTwo);


// yhn pr user two ko reference mila copy nahi milli is wjh se direct user one main change huwa 






