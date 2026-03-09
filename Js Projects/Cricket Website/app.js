const firstInput = document.getElementById("first-input");
const firstBtn = document.getElementById("first-btn");
const firstDiv = document.getElementById("first");
let playerName;
const secondDiv = document.getElementById("second");
const para=document.getElementsByClassName("teams")
let selectedTeam;
const thirdDiv=document.getElementById("third")
// const thirdDivPara=document.querySelectorAll(".toss")

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
	   thirdDiv.classList.replace("none","flex")
       
	   
    })
    
}

// alert("now it a time for toss chose one")

var randomTossNumber=Math.ceil(Math.random()*2)

function checkToss(params) {
	
}


