let number = 41.934;

console.log(number.toFixed(2)); //point ke bd ki value fixed krta hai 

console.log(number.toPrecision(2)); //ye kitne number ap chte ho apne value main 


let number2=1000000
console.log(number2.toLocaleString('en-PR'));//for putting commas in number it is us based 


// 88888888888888888888888 Maths 88888888888888888888

console.log(Math.abs(-10)); // for making negative value positive 

console.log(Math.round(4.2)) //for rounding off number

console.log(Math.ceil(4.2));// uper round off krta hai

console.log(Math.floor(4.4));//niche round off krta hai

 
console.log(Math.random());
console.log( Math.floor(Math.random()*10) + 1);

//ye tareeqa hai agr hamen kisi value se kisi value tk apna number chaiye ho

let min=10
let max=20

console.log(Math.floor(Math.random() * ( max - min + 1 )) + min);

