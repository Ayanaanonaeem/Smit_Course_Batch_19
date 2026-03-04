var para=document.getElementById("para")
var head=document.getElementById("head")
// var head2= document.getComputedStyle("head")
function big() {
    para.className+=" big"
    para.style.fontSize="60px"
    head.style.visibility="hidden"
}
var head=document.getElementById("head").margin

// ham properties ko read bhi krsakte hain ye uper wale syntax ko use krke




// ------------------------chapter 56------------------------

// we can target all the parapgraph together with tag name 

var para=document.getElementsByTagName("p")


var para1txt=para[0]
para1txt.innerHTML="hello"


// but ye hamen array main dega not in a single value 


// ------------------------chapter 57------------------------

// If we want to target a specific div paragraphs so you can do like this 
var div=document.getElementById("div")
var para2=div.getElementsByTagName("p")
console.log(para2);

