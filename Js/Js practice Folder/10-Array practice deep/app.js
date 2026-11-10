let arr=["apple","mango","banana","orange"]
let arr2=["1","2","3","4"]

// console.log(arr[0]);

// console.log(arr.includes("apple"));//ye btata hai ke array ke undar ye maujood hai ya nahi

// console.log(arr.indexOf("mango"));// ye index btata hai agr woh maujood hai to
// console.log(arr.indexOf("lichi"));// ye index btata hai agr woh maujood hai to agr nahi to -1 


// console.log(arr.join());// string main convert krdeta hai array ko

var newarr=arr.push("lichi")
// console.log(newarr);//ye length return krta hai array ki
// console.log(arr);


var newarr2=arr.pop()
// console.log(newarr2);//ye jo element nikla woh dega
// console.log(arr);

// same goes for shift and unshift
// shift is used for poping the value from start 
// unshift is used is pushing the value in start 


var myarr=["apple","mango","banana","orange"]

var slicedArr=myarr.slice(1,3)//slice array main se chezen nikal deta hai but orignial array update nahi krta ye copy bnata hai

console.log(slicedArr);
console.log(myarr);

var splicedArr=myarr.splice(1,3)//ye chezen nikalta hai but orignal array update krdeta hai
console.log(splicedArr);
console.log(myarr);


// 888888888888888888888 Important 888888888888888888888888888888

/*
DEEP COPY 
DEEP COPY MAIN DONON KA REFERENCE ALAG HOJAYEGA ARR1 AUR ARR2 KA INKO COMPARE KRENGE FALSE DEGA 
DIFFERENCE YE HAI ISKE UNDAR KA BHI NEW OBJ BNATA HAI TO INNER REFERENCE ALAG HOTA HAI

SHALLOW COPY 

SHALLOW COPY MAIN REFERENCE ALAG HOTA HAI INNER OBJECT KA REFERENCE SAME HOTA HAI TO INNER KO COMAPRE KRENGE TO TRUE DEGA 

*/

// Array more methods

var AyanArr=["aloo","piyaz","tamatat","harimirch"]
var Ayarr2=["fish","meat","chicken"]

var combineArr=AyanArr.concat(Ayarr2)// array ko combine krta hai 
console.log(combineArr);

var mynewArr=[1,2,4,5,[5,6],[7,[9,10],11]]

var flatArr=mynewArr.flat(2)// ye array jo depth hota hai usko undar se ek flat array bnadeta hai
console.log(flatArr);

console.log(Array.isArray("ayan"));//ye array check krne ke liye use hota hai
console.log(Array.from("ayan"));//ye array banane ke liye use hota hai 

let core=100
let core2=100
let core3=100
console.log(Array.of(core,core2,core3));//ye kisi set ko array banane ke liye use hota hai 

 












