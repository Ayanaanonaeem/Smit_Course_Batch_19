// For generating random numbers we have math.random

// YE hamesha less than one random number deta hai LKN AGR HUM ISKO KISI BHI NUM SE MULTIPLY KRDENGE TO WHN TK KOI BHI RANDOM NUM DESAKTA HAI

var num=Math.random()

console.log(num);
console.log(num*20);


// for converting strings into number 
var userAge=prompt("Enter your Age")

var eligiblityCriteria=userAge+18

console.log(eligiblityCriteria);

// Wrong

var intUserAge=parseInt(userAge)
console.log(intUserAge);
 
eligiblityCriteria=intUserAge+18

console.log(eligiblityCriteria);


// we can also convert the string into floating point agr hamare pass koi user floating value dedeta hai to hum parse float use krenge

var floUserAge=parseFloat(userAge)

 
eligiblityCriteria=floUserAge+18

console.log(eligiblityCriteria)




// ------------------- Chapter 29-----------------------//

// we can convert the string in number using Number 

var string="1.459939"
console.log(string);

console.log(Number(string));


// We can convert the number into string also by using tostring()

var num=10101003
console.log(num);
console.log(num.toString());

// -----------------------chapter 30------------------//

// for controlling the length of decimal we used tofixed()

var num2=10.03030494

// hum jitne numbers chahte hain point ke bad to hum bracket main woh value likh denge
console.log(num2.toFixed(2));


