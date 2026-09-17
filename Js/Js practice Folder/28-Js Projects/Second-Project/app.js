const btn=document.querySelector("#button")




btn.addEventListener("click",(e)=>{
      e.preventDefault()
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const result=document.querySelector("#result")
  
    
   if (height==""|| height < 0 || isNaN(height)) {
     alert("Enter a valid height")
   }else if(weight==""|| weight < 0 || isNaN(weight)){
    alert("Enter a valid weight")
   }
   else{
    result.innerHTML=`<span>Result:${(weight / (height / 100) ** 2).toFixed(2)}</span>`
   }
})