// Ye map new ARRAY RETURN KRTA HAI



let a = [1, 2, 3, 4, 5, 6, 7, 8];

var result = a.map((ele) => {
  return ele + 1;
});
console.log(result);
console.log(a);

// YE FILTER OUT KRKE NEW ARRAY RETURN KRTA HAI

var filterRes = a.filter((ele) => {
  return ele > 4;
});

console.log(filterRes);

// YE EK VALUE DATA HAI AUR DATA KO REDUCE KRDETA HAI
var reduceRes = a.reduce((prev, curr) => {
  return prev + curr;
});
console.log(reduceRes);

// YE ARRAY RETURN NHI KRTA ALAG ALAG LINE MAIN VALUE RETURN KRTA HAI

var forEachRes = a.forEach((ele) => {
  console.log(ele);
});

console.log(forEachRes);


//  YE SINGLE VALUE RETURN KRTA HAI 
var findRes = a.find((ele) => {
  return ele == 8;
});
console.log(findRes);


// promise practice

let p=new Promise((res,rej)=>{
    if(false){
      return res()
    }
    else{
       return rej()
    }
})

p.then(()=>{
  console.log("resolve hogya g");
  
})
.catch (()=>{
  console.log("reject hogya g");

})       

// jhn data tumhe lage ke wait krke ayega to tum whn async await ka use kroge 

async function fetchData() {
  var raw=await fetch("https://jsonplaceholder.typicode.com/posts")
  var data=await raw.json()
  myData(data)
  
}

function myData(data) {
  console.log(data);
  
}
fetchData()

var myfunc=()=>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res=>res.json())
  .then(data=>hello(data))
 
}
function hello(data) {
  console.log(data);
  
}

myfunc()

function Multiply(a,b) {
  console.log(a*b);
  
}
function Sum(a,b) {
  console.log(a*b);
  
}
function divide(a,b) {
  console.log(a/b);
  
}
function subtract(a,b) {
  console.log(a-b);
  
}
function subtract(a,b) {
  console.log(a-b);
  
}
function subtract(a,b) {
  console.log(a-b);
  
}
function add(a,b) {
  console.log(a+b);
  
}