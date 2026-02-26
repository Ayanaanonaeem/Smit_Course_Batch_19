// Function

function greeting(name) {

    console.log("Welcome",name);
    
}
greeting("Ayan")
greeting("Farhan")
greeting("Furqan")


function sum(a,b){
    console.log(a+b);
    
}
sum(2,3)

function subtract(a,b){
  console.log(a-b);
  
}
subtract(12,4)

// Greeting function
var name="ayan"
function greetUser(greeting) {
    console.log(greeting);    
}
greetUser(name)

// ---------------------------Chapter 36==================

function sum(a,b,c){
    console.log(a+b+c);
    
}
sum(3,2,3);//this is called arguments


// -----------------------------chapter 37----------------

// we can use return in function for returning our result in function 

function sum2(a,b) {
    c=a+b
    return c;
}
var result=sum2(9,2)
console.log(result);

// Agr hum return nhi use krenge to function hamen kuch bhi nhi dega



// -----------------------------Chapter 38--------------------------

// local and global varaible 
var thesum=4
function hello(){
     return thesum=6
     
    
    
}
hello()
// console.log(thesum);


// Agr hum global variable bnayen uper aur phr hum nivhe function main usse change aur uske bd us varaible 
// ko console karwalen to jo function main change kia hai woh nhi ayega uper wala hi ayega agr hum functionse
// us variable ko return karwate hain aur function ko call krte hain tb change hojayega hamra varaible otherwise nhi hoga
