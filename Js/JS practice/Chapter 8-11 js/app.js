// Concatenation
var name="Ayan ";
var lastName="Naeem";

console.log(name+lastName);

var abc="1"
var cde="2"


console.log(1+1+abc);

// do string ke bech plus laagdo to woh concatenate hojatin hai 

// agr hum variable main number as a string rakhen, aur plus lagaden to woh concatenate hojata hai 
// lkn age koi aur operation lagayen to woh chal jayega

// Prompt

// var a=prompt("enter your age");
// console.log(a);

var userBirthYear=prompt("Enter your birth year")
var currentYear=2026
var userAge=currentYear-userBirthYear

console.log(userAge);

// for converting the string into number we have three ways number 1 is we can use plus before varaible 

var hello="2"
var newhello=hello


// Or we can use method like NUmber or parseint or parse

newhello=Number(hello)
parseInt(hello)
parseFloat(hello)
console.log(typeof(newhello));



// var userNum=+prompt("Enter a Number")
// if (userNum%2==0) {
//     console.log("Your number is even");

    
    
// } else {
//     console.log("Your number is odd");
    
// }

// Comparison operator

// == is used for comparing only 
// === it also check datatype also 

var username=prompt('Enter you name')
var capitalizeUserName= username.toUpperCase()
if (capitalizeUserName==="AYAN") {
    console.log("Welcome ayan");
    
}if (capitalizeUserName!=="AYAN") {
    console.log("welcome",username);
    
} else {
    console.log("Welcome ayan");
    
}

