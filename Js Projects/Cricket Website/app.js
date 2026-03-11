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
let userselection;
const fifthDiv=document.getElementById("fifth")
const sixthDiv=document.getElementById("sixth")
let score=document.getElementById("score")
let wicket=document.getElementById("wicket")
let paragraph;        
let paragraph_2;        
let paragraph_3;        

let myobj={
	score:0,
	out:0,
	target:0,
 
}
const batting={
	wicket:["bowled","lbw","caught","runout"],
	score:[0,1,2,3,4,5,6]
}
firstBtn.addEventListener("click", function () {
	if (firstInput.value == "") {
		alert("please enter a value first");
	} else {
		playerName = firstInput.value;
		firstDiv.classList.replace("flex", "none");
        secondDiv.classList.replace("none","flex")
		 paragraph=document.createElement("p")
         paragraph.textContent="Player name: "+playerName;
	    fifthDiv.appendChild(paragraph)

        

	}
});

for (let i = 0; i < para.length; i++) {
    para[i].addEventListener("click",function() {
       selectedTeam=para[i].innerText
       secondDiv.classList.replace("flex","none")
	   thirdDiv.classList.replace("none","flex")
	    paragraph_2=document.createElement("p")
        paragraph_2.textContent="Your Team: "+selectedTeam;
	    fifthDiv.appendChild(paragraph_2)

        
	   
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
let scoreAndwicketRandomNum;
let wicketRandomNum;
var wicketName;
let scoreRandomNum;
var scoreName;
var currentWicket;
var currentscore;
var targetchild;
var target;
let numTarget;


bat.addEventListener("click",function() {
	
	userselection=bat.innerText
	// console.log(userselection);
	alert("You are batting first")	
        
	fourthDiv.classList.replace("flex","none")
	fifthDiv.classList.replace("none","flex")
	paragraph_3=document.createElement("p")
	paragraph_3.textContent="You are "+userselection+"ing";
	fifthDiv.appendChild(paragraph_3)

   document.addEventListener("keypress",function (e) {
	if (e.key==" ") {		
		scoreAndwicketRandomNum=Math.floor(Math.random()*2)
		wicketRandomNum=Math.floor(Math.random()*4)
		wicketName=batting.wicket[wicketRandomNum]
		if (scoreAndwicketRandomNum==0) {
			currentWicket=Number(wicket.innerText)+1
			wicket.innerText=currentWicket
			alert("you are "+wicketName)
			if (currentWicket==11) {
				alert("So you are all out click okay for next innings")
				wicket.innerText=0
				target=score.innerText
				numTarget=Number(target)+1

				targetchild=document.createElement("h2")
				targetchild.textContent="Target :"+numTarget
				score.innerText=0
				fifthDiv.appendChild(targetchild)
				// console.log(score.innerText);
				
				
				
			}
			
			
		} else {
			scoreRandomNum=Math.floor(Math.random()*7)
			scoreName=batting.score[scoreRandomNum]
			currentscore=Number(score.innerHTML)+scoreName
			score.innerText=currentscore
			alert("you have made "+scoreName+" run")
		}
		
		
	}

	
})


	
})

bowl.addEventListener("click",function() {
	
	userselection=bowl.innerText
	console.log(userselection);
	alert("You are bowling first")	
	fourthDiv.classList.replace("flex","none")
	fifthDiv.classList.replace("none","flex")

	paragraph_3=document.createElement("p")
	paragraph_3.textContent="You are "+userselection+"ing";
	fifthDiv.appendChild(paragraph_3)

	

})

console.log(currentWicket);






	
