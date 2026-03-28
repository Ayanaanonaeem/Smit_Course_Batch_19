var cont=document.querySelector("#main")
var crsr=document.querySelector(".cursor")

cont.addEventListener("mousemove",function (detls) {
    
    crsr.style.left=detls.x+"px"
    crsr.style.top=detls.y+"px"
    
})