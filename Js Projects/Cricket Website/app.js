const firstInput = document.getElementById("first-input");
const firstBtn = document.getElementById("first-btn");
const firstDiv = document.getElementById("first");
let playerName;
const secondDiv = document.getElementById("second");
const para=document.getElementsByClassName("teams")
let selectedTeam;
const thirdDiv=document.getElementById("third")
const thirdDivPara=document.querySelectorAll(".toss")
const bat=document.getElementById("bat")
const bowl=document.getElementById("bowl")
const fourthDiv=document.getElementById("fourth")

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
var anotherRandomNum=Math.ceil(Math.random()*2)
var batBallArray=["none","bat","ball"]

var randomSelection=batBallArray[Math.ceil(Math.random()*2)]




for (let i = 0; i < thirdDivPara.length; i++) {
    thirdDivPara[i].addEventListener("click",function() {
       if (randomTossNumber==2) {
		 alert("You won the toss now choose bat or ball")
		 thirdDiv.classList.replace("flex","none")
		 fourthDiv.classList.replace("none","flex")
	   }else if (randomTossNumber==1) {
		 alert(`You loss the toss and the computer selected to ${randomSelection} first`)
		 thirdDiv.classList.replace("flex","none")

	   } 	   
    })    
}




