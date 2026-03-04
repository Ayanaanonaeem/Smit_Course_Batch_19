var a=document.querySelector("h1")

console.log(a);
 a.innerHTML="i will Finish my frontend this Year"
 a.style .backgroundColor="black"


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