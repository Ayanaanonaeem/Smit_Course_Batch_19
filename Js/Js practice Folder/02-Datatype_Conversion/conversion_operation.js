let score = true
// console.log(typeof score);

let convertedScore=Number("hello")
// console.log(convertedScore);
// console.log(typeof convertedScore);


// agr hum number() main string likh den aur uski type dekhen to number hojati hai woh
// but real main nan number hoti hai 

// hamne dekha ke undefined ko number main convert kren to woh wese nan hai lkn uski type number hai

// aur agr hum null ko convert kren to woh 0 hojata hai aur uski type bhi numbeer hai 


// agr hum bollean value ko number main convert kren to true 1 hoga aur false 0 hoga 


let number=1
let convertedNumber=Boolean(number)

// console.log(convertedNumber);
// console.log(typeof convertedNumber);


// aur is trah hum number ko bollean main convert krsakte hain

// kuch falsy value hoti hain js main jo sirf false return krtin hain 

let number2=45
let convertedNumber2=String(number2)


// console.log(convertedNumber2);
// console.log(typeof convertedNumber2);



// aur number ko stirng main convert krsakte hain 

let num = 2 + "2"
let num2 = "2" + 2
let num3 = 2 + 2 + "6"
let num4 = "2" + 2 + 6

console.log(num);//22
console.log(num2);//22
console.log(num3);//46
console.log(num4);//226

console.log("2"> 1);//true
console.log("2"== 2);//true

console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);//false

// this is not the write way to do that's why we use typescript or ===












