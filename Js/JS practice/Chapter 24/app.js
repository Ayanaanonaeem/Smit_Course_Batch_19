// Agr hum kisi character ka pata lagana ho ke woh kis index pr hai to hum charat use krgenge

var userinput=prompt("Enter your name")

var firstchar=userinput.charAt(0)
 
var lastchar=userinput.charAt(userinput.length-1)

console.log(firstchar+lastchar);


// for replacing the word from the paragraph we use replace

var para="The first string inside the parentheses is the segment to be replaced. The second string is the segment to be inserted. In the above code, the segment 'World War II' is replaced by the segment 'the Second World War' in the string represented by the variable "

var newpara=para.replace("World War II","second world war")

console.log(newpara);



// For replacing all the words from the para we use replaceAll

var newpara2=para.replaceAll("the","Meoww")

console.log(newpara2);








