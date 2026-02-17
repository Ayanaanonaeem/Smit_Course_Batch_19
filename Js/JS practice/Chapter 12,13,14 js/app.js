// var userPlace=prompt("What is the capital of Pakistan")
// var correctAns="islamabad"
// var userscore=3;

// if (userPlace==correctAns) {
//     console.log("correct");
//     userscore++
    
// } else{
//     userscore--;
//     console.log("incorrect");
    
// }
// console.log(userscore);

// // more cases of if else 

// var userweight=+prompt("enter your weight")
// var age=+prompt("Enter your age")
// var gender=prompt("Enter your gender")

// if (userweight<100 && age>18 && gender=="male") {
//     console.log("you are eligible");

    
// } else {
//     console.log("you are not eligible");
    
// }

// if(userweight < 100 || age > 18 || gneder == "male"){
//     console.log("You are eligible");
    
// }

// // licence eligiblity model

// var userAge=+prompt("Enter your Age")


// if (userAge>=18) {
//     console.log("You are eligible For driving Licenese");
    
// } else {
//     console.log("You are not Eligible");
    
// }

// Nested if else

var userFood=prompt("Enter your dish","biryani,pizza")

if(userFood=="pizza"){
   var flavour=prompt("enter your flavour","paproni, fajita, malaiboti")
   if (flavour=="paproni") {
     alert("You select paproni")
   }
   else if(flavour="fajita"){
     alert("Your flavour is fajita")
   }
   else{
    alert("Your flavour is malaiboti")
   }
}else{
    var biryanitype=prompt("Enter which biryani do you love", "beef,chicken,mutton")
    if(biryanitype=="beef"){
        alert("your beef biryani order is done")       
    }
    else if(biryanitype=="chicken"){
        alert("your chicken biryani order is done") 
    }
    else{
        alert("your mutton biryani order is done")
    }
}
