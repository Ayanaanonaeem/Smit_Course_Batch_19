const firstInput = document.getElementById("first-input");
const firstBtn = document.getElementById("first-btn");
const firstDiv = document.getElementById("first");
let playerName;
const secondDiv = document.getElementById("second");
const para = document.getElementsByClassName("teams");
let selectedTeam;
const thirdDiv = document.getElementById("third");
const thirdDivPara = document.querySelectorAll(".toss");
const bat = document.getElementById("bat");
const bowl = document.getElementById("bowl");
const fourthDiv = document.getElementById("fourth");
let userselection;
const fifthDiv = document.getElementById("fifth");
const sixthDiv = document.getElementById("sixth");
let score = document.getElementById("score");
let wicket = document.getElementById("wicket");
let paragraph;
let paragraph_2;
let paragraph_3;
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
const para1 = document.getElementById("sixthpara1");
const para2 = document.getElementById("sixthpara2");
const para3 = document.getElementById("sixthpara3");
const para4 = document.getElementById("sixthpara4");
const batting = {
	wicket: ["bowled", "lbw", "caught", "runout"],
	score: [0, 1, 2, 3, 4, 5, 6],
};

let myobj = {
	score: 0,
	out: 0,
	target: 0,
};

firstBtn.addEventListener("click", function () {
	if (firstInput.value == "") {
		alert("please enter a value first");
	} else {
		playerName = firstInput.value;
		firstDiv.classList.replace("flex", "none");
		secondDiv.classList.replace("none", "flex");
	}
});

for (let i = 0; i < para.length; i++) {
	para[i].addEventListener("click", function () {
		selectedTeam = para[i].innerText;
		secondDiv.classList.replace("flex", "none");
		thirdDiv.classList.replace("none", "flex");
	});
}

// alert("now it a time for toss chose one")

var randomTossNumber = Math.ceil(Math.random() * 2);
var anotherRandomNum = Math.ceil(Math.random() * 2);
var batBallArray = ["none", "bat", "ball"];

var randomSelection = batBallArray[Math.ceil(Math.random() * 2)];

for (let i = 0; i < thirdDivPara.length; i++) {
	thirdDivPara[i].addEventListener("click", function () {
		if (randomTossNumber == 2) {
			alert("You won the toss now choose bat or ball");
			thirdDiv.classList.replace("flex", "none");
			fourthDiv.classList.replace("none", "flex");
		} else if (randomTossNumber == 1) {
			alert(
				`You loss the toss and the computer selected to ${randomSelection} first`,
			);
			thirdDiv.classList.replace("flex", "none");
			sixthDiv.classList.replace("none", "flex");

			sixthDiv.addEventListener("click", function () {
				sixthDiv.classList.replace("flex", "none");
				if (randomSelection == "bat") {
					Batting();
				} else {
					Bowling();
				}
			});
		}
	});
}
var flag=0
function handleKeyPress(e) {
    if (e.key == " ") {
        scoreAndwicketRandomNum = Math.floor(Math.random() * 2);
        wicketRandomNum = Math.floor(Math.random() * 4);
        wicketName = batting.wicket[wicketRandomNum];

        if (scoreAndwicketRandomNum == 0) {
            myobj.out = myobj.out + 1;
            wicket.innerText = myobj.out;
            alert("you are " + wicketName);
            checkingTarget();

            if (myobj.out == 11 && flag==0) {
                alert("So you are all out click okay for next innings");
                alert("Now you are bowling");

                wicket.innerText = 0;
                myobj.out = 0;
                myobj.target = Number(score.innerText) + 1;
                para4.innerText = "Target: " + myobj.target;
                score.innerText = 0;
                myobj.score = 0;
            }
        } else {
            scoreRandomNum = Math.floor(Math.random() * 7);
            scoreName = batting.score[scoreRandomNum];
            myobj.score = Number(score.innerHTML) + scoreName;
            score.innerText = myobj.score;

            alert("you have made " + scoreName + " run");
            checkingTarget();
        }
    }


}

function Batting() {
	userselection = bat.innerText;
	// console.log(userselection);
	alert("You are batting first");

	fourthDiv.classList.replace("flex", "none");
	fifthDiv.classList.replace("none", "flex");
	para3.innerText = userselection + "ting";
	para1.innerText = "Player name:" + playerName;
	para2.innerText = "Selected Team:" + selectedTeam;

	document.addEventListener("keypress", handleKeyPress)
	


}

function handleKeyPressGame(e) {
    if (e.key == " ") {
        scoreAndwicketRandomNum = Math.floor(Math.random() * 2);
        wicketRandomNum = Math.floor(Math.random() * 4);
        wicketName = batting.wicket[wicketRandomNum];

        if (scoreAndwicketRandomNum == 0) {
            myobj.out = myobj.out + 1;
            wicket.innerText = myobj.out;

            alert("you are " + wicketName);
            checkingTarget();

            if (myobj.out == 11 && flag==0) {
                alert("So you are all out click okay for next innings");
                alert("Now you are batting");

                wicket.innerText = 0;
                myobj.out = 0;
                myobj.target = Number(score.innerText) + 1;
                para4.innerText = "Target: " + myobj.target;
                score.innerText = 0;
                myobj.score = 0;
            }
        } else {
            scoreRandomNum = Math.floor(Math.random() * 7);
            scoreName = batting.score[scoreRandomNum];
            myobj.score = Number(score.innerHTML) + scoreName;
            score.innerText = myobj.score;

            alert("you have made " + scoreName + " run");
            checkingTarget();
        }
    }
}
function Bowling() {
	userselection = bowl.innerText;
	alert("You are bowling");
	fourthDiv.classList.replace("flex", "none");
	fifthDiv.classList.replace("none", "flex");
	para3.innerText = userselection + "ing";
	para1.innerText = "Player name:" + playerName;
	para2.innerText = "Selected Team:" + selectedTeam;

	document.addEventListener("keypress", handleKeyPressGame)
	

}

function checkingTarget() {
	if(myobj.target!=0){
		if (myobj.score>=myobj.target) {
			alert("You won the match")
			fifthDiv.classList.replace("flex","none")
		}
	    else if(myobj.out==11){
			alert("You lose the match")
			flag++
			fifthDiv.classList.replace("flex","none")


		}
	}
}
