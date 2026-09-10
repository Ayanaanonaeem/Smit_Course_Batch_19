// Agr hun query selector All krte hain to node list milti hai to forEach milta hai iski properties
// main 
// aur agr query selector krenge to first element milega

const para=document.querySelectorAll("p")
const para2=document.querySelector("p")

console.log(para);

// aur agr hum classname se target kren to htmlcollection milti hai isko array main convert krna 
// parhta hai 

const item=document.getElementsByClassName("item")
const myArr=Array.from(item)


myArr.map((val)=>{
    val.style.backgroundColor="purple"
    val.style.color="white"
})

// aur querySelector se .laga kr hum classes ko bhi lesakte hain aur id ko hash laga ke bhi nodelit hi milegi
const haai=document.querySelectorAll(".item")
console.log(haai);

// we can set get and ask question like this element has attribute or not 
const attri=para2.getAttribute("id")
console.log(para2.hasAttribute("id"));
para2.setAttribute("class","bye")

