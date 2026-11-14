// for...of  → values
// for...in  → keys / indexes

const arr=["apple","mango","banana"]
for (const num of arr) {
    //   console.log(num);
      
}


const str="congratulation"
for (const element of str) {
    // console.log(element);
    
}

// for of objects ke liye nahi hai 
const obj={
    name:"ayan",
    age:20
}



for (const key in obj) {
    const element =key;
    console.log(typeof element,"27");
   
}

// for in keys pr chalta hai bs 

// for in array aese chalega 
for (const num in arr) {
    console.log(arr[num],"35");
    
    
    
}

// for in in string aese chalega

var newStr="prettyGood"
for (const words in newStr) {
   
    console.log(newStr[words]);
    
    
}

const obj3={
    name:"Ayan",
    age:"30"
}
// console.log(obj3[name])