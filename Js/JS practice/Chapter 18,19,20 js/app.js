// for loop

var array1 = [];

for (let i = 0; i < 3; i++) {
	var userValue = prompt("Enter your values");
	array1.push(userValue);
}
console.log(array1);

// for(let i=0; i<array1.length;i++){
//     if (array1[i]=="anas") {
//         console.log("anas found");
//         break
//     }
//     else{
//        console.log("anas is not in this array");

//     }
// }

// chapter 19 flags bollean array length and loopus interuptus


// this below example is called flag 

var anasfound = false;
for (let i = 0; i < array1.length; i++) {
	if (array1[i] == "anas") {
		anasfound = true;
		console.log("Anas found");
		break;
	}
}

if ((anasfound = false)) {
	console.log("anas is not found");
}


// flag one more example

var cities=["karachi","islamabad","lahore","hyderabad"]
var cityTocheck="karachi"

var cityfound=false

for(i=0; i<=cities.length; i++){
    if (cities[i]==cityTocheck) {
        cityfound=true
        console.log("i found the city");
        break
        
    }
}
if (cityfound==false) {
    console.log("your city is not here");
    
}


for loop nested


let n=5;
for (let i = 0; i <=n; i++) {
  var row=""
  for (let j = 0; j < i; j++) {
   row +="*"
    
  }
  console.log(row);
  
}

// for making pyramid
let n=5;
for (let i=0; i<=n; i++) {
  var row=""
  for (let j = 0; j <=i; j++) {
    row+="*"
    
  }
  console.log(row);
  
}