var array=["apple","mango","banana","orange","peach"]
var fruitToCheck="GUAUA"
fruitToCheck=fruitToCheck.toLowerCase()
for (let i = 0; i < array.length; i++) {
    if (fruitToCheck==array[i]) {
        console.log("Your fruit is here");
        
    }
    
    
    
}
console.log("Your fruit is not here");

// We can use touppercase also 
// FOR MAKING WORD FIRST LETTER CAPITAL
var userinput=prompt("Enter a word")
var firstChar=userinput.slice(0,1).toUpperCase()
var otherChar=userinput.slice(1).toLowerCase()
var wordToCheck=firstChar+otherChar

if (wordToCheck=="helicopter") {
    console.log("word found");
    
}

// for checking month with three chracter
var monthArr=["jan","feb","mar","apr","may","jun"]
var usermonth=prompt("Enter a month");
var monthToCheck=usermonth.slice(0,3).toLowerCase()
console.log(monthToCheck);

for (let i = 0; i < monthArr.length; i++) {
    if(monthArr[i]==monthToCheck) {
        console.log("Your month is available");
        
    }
    
}

// for checking double space

var str="para  meow"
for (let i = 0; i < str.length; i++) {
   if (str.slice(i,i+2)=="  ") {
     console.log("Double space found");
     
   }
    
}

// for finding words from a paragraph!
var text="It is startling to think that, even in the darkest depths of World War 2, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his"

 var firstChar = text.indexOf("World War 2");
 console.log(firstChar);
 
 if (firstChar !== -1) {
   text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
   console.log(text,"==> hello");
  
}
// for (let i=0; i < para.length; i++){
//     if (para.slice(i,i+3)=="can") {
//         console.log("Found");
        
//     }
// }

// To know at which index character is available we have indexof()

var string="china japan california japan"
console.log(string.indexOf("california"));

// if the finding word is not present in the string then it give -1 shown in below example

console.log(string.indexOf("p"));



// ismain btayega yeah agey se hi gin ke konse index pr hai pr lkn dekhega piche se

console.log(string.lastIndexOf("japan"));



