// Constructor function hamari help krta hai hamen bachata hai zyada object banane se

var obj1={
    name:"Ayan",
    lastName:"Naeem"
}

var obj2={
    name:"jawaid",
    lastName:"Miandad"
}

function Student(name,lastName) {
    this.name=name
    this.lastName=lastName
}

var student3=new Student("Ali","iqbal")
var student4=new Student("Saif","urRehaman")

console.log(student3);
console.log(student4);

// Hum constuctor function main function bhi bnasakte hain 


// Constructor function =============> Object banane ki machine
// Prototype  =============> shared method ka store


// Prototype Example
function Student1(name) {
    this.name=name
    this.greet=function () {
        console.log("hi this is "+this.name);
        
    }
}

var Object=new Student1("Ayan")
console.log(Object);

// yhn hr object ke liye greet function banega best practice hai hum ise prototype main dalden


function Student5(name) {
    this.name=name
}

Student5.prototype.greet=function() {
    console.log("hi this is "+this.name);
    
}
var Object2=new Student5("faraz")
console.log(Object2.greet());


// So yhn pr ye huwa hai ke ab jo function hai woh prototype main store horaha hai aur memory waste hone se bach rahi hai 