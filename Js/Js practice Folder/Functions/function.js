// function hello(){
//     console.log("hitesh");
    
// }
// console.log(hello());

function mySum(num1,num2){
    let result=num1+num2
    return result
}

var result=mySum(2,3)
console.log(result);


function meow(name){
   if(!name){
    console.log( " enter your name");
    
    return
   }
    return `hi this is ${name}`
  
}
var result=meow("Ayan")
console.log(result);
