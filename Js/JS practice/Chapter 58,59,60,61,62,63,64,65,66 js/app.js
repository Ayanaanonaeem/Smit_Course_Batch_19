var a=document.querySelector("h1")

console.log(a);
 a.innerHTML="i will Finish my frontend this Year"
 a.style.backgroundColor="black"


var para=document.querySelector("p")

para.addEventListener("click",function(){
    para.style.color="white"
    para.style.backgroundColor="yellow"
})

var btn=document.getElementById("btn")
var bulb=document.getElementById("bulb")
var checkVlaue=btn.innerText
btn.addEventListener("click", function() {
    
    if(checkVlaue=="ON"){
        bulb.style.backgroundColor="white"
        btn.innerText="OFF"
        checkVlaue="OFF"
    }else{
        bulb.style.backgroundColor="yellow"
        btn.innerText="ON"
        checkVlaue="ON"
    }
})

// the upward logic is good but the best practice is to make a Flag 

var flag=0
btn.addEventListener("click", function() {
    
    if(flag==0){
        bulb.style.backgroundColor="white"
        btn.innerText="OFF"
        flag=1
    }else{
        bulb.style.backgroundColor="yellow"
        btn.innerText="ON"
        flag=0
    }
})

// this is the best practice 

var heading=document.querySelectorAll("h1")

heading.forEach(function(e) {
    
    e.innerHTML="bye"
    
    
})

//  this is how we can select multiple h1 and give css 

// innerHTML ke undar hum pora tag dalsakte hain html ka 
// but textcontent ke undar hum agr pora tag bhi likhen to woh as a text ayega 

var lara=document.getElementById("lara")
var nodes=lara.childNodes;
console.log(nodes,"===> nodes");

console.log(nodes[1].textContent);
console.log(nodes[3].nodeName); //you can find the tag name by using node name

console.log(lara.childNodes.length); //you can also find the length of the parent element nodes




// yhn pr div ke 7 child hain kynke hr tag ke bd text node zaroor hota hai agr hamre div ka direct child p hoga to woh array pr 1 pe ayega kynke 0 pr hamara text node hoga 


var head_2=document.getElementById("head")
console.log(head_2.getAttribute("onclick"));

// we can get any attribut in html using js


// We can also get,change and remove the attribute from the html using js

var div=document.getElementById("divhai")
div.setAttribute("style","background-color:red") //this is how we can change the attribute

head_2.setAttribute("class","main")
head_2.innerText="meow"


div.removeAttribute("style") //this is how we can remove the attribute from html using js

console.log(div);


