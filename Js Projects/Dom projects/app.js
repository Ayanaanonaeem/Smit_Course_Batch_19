var isstatus=document.querySelector("h3")
var btn=document.querySelector("button")
var flag=0
btn.addEventListener("click",function() {
    if(flag==0){
        isstatus.innerHTML="Friends"
        isstatus.style.color="green"
        btn.innerHTML="Remove friend"
        btn.style.backgroundColor="purple"
        btn.style.color="white"
        flag=1

    }else{
        isstatus.innerHTML="Stranger"
        isstatus.style.color="red"
        btn.innerHTML="Add friend"
        btn.style.backgroundColor="cadetblue"
        btn.style.color="white"
        
        flag=0
    }
})