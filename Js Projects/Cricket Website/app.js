const firstInput = document.getElementById("first-input");
const firstBtn = document.getElementById("first-btn");
const firstDiv = document.getElementById("first");
let playerName;
const secondDiv = document.getElementById("second");
const para=document.getElementsByClassName("teams")
let selectedTeam;


firstBtn.addEventListener("click", function () {
	if (firstInput.value == "") {
		alert("please enter a value first");
	} else {
		playerName = firstInput.value;
		firstDiv.classList.replace("flex", "none");
        secondDiv.classList.replace("none","flex")
	}
});

for (let i = 0; i < para.length; i++) {
    para[i].addEventListener("click",function() {
       selectedTeam=para[i].innerText
       secondDiv.classList.replace("flex","none")
       
        
    })
    
}


