// string methods

let myString="hellothisisAyan"


//trim end ki spaces hatane main aur shuruh ki spaces htane ke liye use hota 
let newstr=myString.trim() 

console.log(newstr);


//yhn jo bracket main denge aur uper dekhega string main ye chez hain to usko array main tod dega
console.log(myString.split(" ")); 

// output [hello,this, isAyan]



// is index pr kia character hai ye dekhne ke liye charat use krte hain
console.log(myString.charAt(1))


// aur hum string ko slice bhi krsakte hain aur slice main - value bhi desakte hain
console.log(myString.slice(-4,-2))







