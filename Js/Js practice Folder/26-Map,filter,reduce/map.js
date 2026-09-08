// map return krta hai ek array 

var arr=[1,2,3,4,5,6,7,8]
const myArr=arr.map((val)=>val*10)
console.log(myArr);

const Chaining=arr.map((val)=>val*10).map((val)=>val+1).filter((val)=>val>=30)
console.log(Chaining);

