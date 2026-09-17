const body=document.querySelector("body")
const box=document.querySelectorAll(".box")

box.forEach((ele)=>{
   ele.addEventListener("click",(e)=>{
   body.style.backgroundColor=e.target.id
   
    
   })
})

