
const firstInput = document.getElementById("first-input");
const firstBtn = document.getElementById("first-btn");

const firstDiv = document.getElementById("first");
const secondDiv = document.getElementById("second");
const thirdDiv = document.getElementById("third");
const fourthDiv = document.getElementById("fourth");
const fifthDiv = document.getElementById("fifth");
const sixthDiv = document.getElementById("sixth");

const teams = document.querySelectorAll(".teams");
const tossOptions = document.querySelectorAll(".toss");

const bat = document.getElementById("bat");
const bowl = document.getElementById("bowl");

const scoreElement = document.getElementById("score");
const wicketElement = document.getElementById("wicket");

const para1 = document.getElementById("sixthpara1");
const para2 = document.getElementById("sixthpara2");
const para3 = document.getElementById("sixthpara3");
const para4 = document.getElementById("sixthpara4");

const batting = {
    wickets: ["Bowled", "LBW", "Caught", "Run Out"],
    runs: [0, 1, 2, 3, 4, 6],
};

// Game state
const game = {
    playerName: "",
    selectedTeam: "",
    userChoice: "",

    currentScore: 0,
    wickets: 0,
    target: 0,

    innings: 1,
    battingSide: "user",

    matchStarted: false,
    gameOver: false,
};

let messageElement;


// HELPER FUNCTIONS

function showSection(sectionToShow) {
    [firstDiv, secondDiv, thirdDiv, fourthDiv, fifthDiv, sixthDiv]
        .forEach((section) => {
            section.classList.add("none");
            section.classList.remove("flex");
        });

    sectionToShow.classList.remove("none");
    sectionToShow.classList.add("flex");
}

function updateScoreboard() {
    scoreElement.innerText = game.currentScore;
    wicketElement.innerText = game.wickets;

    para1.innerText = `Player name: ${game.playerName}`;
    para2.innerText = `Selected Team: ${game.selectedTeam}`;

    if (game.innings === 1) {
        para4.innerText = "Target: Not set";
    } else {
        para4.innerText = `Target: ${game.target}`;
    }

    para3.innerText =
        game.battingSide === "user"
            ? "You are Batting"
            : "You are Bowling";
}

function showMessage(message) {
    if (messageElement) {
        messageElement.innerText = message;
    }
}

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// STEP 1: ENTER PLAYER NAME
-

firstBtn.addEventListener("click", function () {
    const name = firstInput.value.trim();

    if (!name) {
        alert("Please enter your name first!");
        firstInput.focus();
        return;
    }

    game.playerName = name;

    showSection(secondDiv);
});

// Allow Enter to submit the name.
firstInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        firstBtn.click();
    }
});


// STEP 2: SELECT TEAM


teams.forEach(function (team) {
    team.addEventListener("click", function () {
        game.selectedTeam = team.innerText.trim();

        showSection(thirdDiv);
    });
});


// STEP 3: TOSS


tossOptions.forEach(function (option) {
    option.addEventListener("click", function () {
        const playerToss = option.innerText.trim();

        const computerToss =
            Math.random() < 0.5 ? "Heads" : "Tails";

        if (playerToss === computerToss) {
            alert("You won the toss! Choose Bat or Bowl.");

            showSection(fourthDiv);
        } else {
            game.userChoice = Math.random() < 0.5 ? "bat" : "bowl";

            alert(
                `You lost the toss! Computer chose to ${
                    game.userChoice === "bat" ? "bat" : "bowl"
                } first.`
            );

            // If computer chooses to bat, user bowls first.
            // If computer chooses to bowl, user bats first.
            game.battingSide =
                game.userChoice === "bat" ? "user" : "computer";

            showSection(sixthDiv);
        }
    });
});


// STEP 4: USER CHOOSES BAT


function Batting() {
    if (game.matchStarted || game.gameOver) return;

    game.userChoice = "bat";
    game.battingSide = "user";

    startMatch();
}

// STEP 5: USER CHOOSES BOWL


function Bowling() {
    if (game.matchStarted || game.gameOver) return;

    game.userChoice = "bowl";
    game.battingSide = "computer";

    startMatch();
}


// START MATCH


function startMatch() {
    game.currentScore = 0;
    game.wickets = 0;
    game.target = 0;
    game.innings = 1;
    game.matchStarted = true;
    game.gameOver = false;

    // Add a live match message without changing the HTML.
    messageElement = document.getElementById("match-message");

    if (!messageElement) {
        messageElement = document.createElement("p");
        messageElement.id = "match-message";

        const heading = fifthDiv.querySelector("h1");

        heading.insertAdjacentElement("afterend", messageElement);
    }

    showSection(fifthDiv);
    updateScoreboard();

    showMessage(
        "Press SPACE to play the next ball."
    );
}


// PLAY ONE BALL


function playBall() {
    if (!game.matchStarted || game.gameOver) return;

    // A wicket occurs on approximately 1 out of 6 balls.
    const isWicket = Math.floor(Math.random() * 6) === 0;

    if (isWicket) {
        game.wickets++;

        const dismissal = randomItem(batting.wickets);

        showMessage(
            `WICKET! ${dismissal} — ${game.wickets} wicket(s) down.`
        );
    } else {
        const runs = randomItem(batting.runs);

        game.currentScore += runs;

        showMessage(
            runs === 0
                ? "Dot ball! No runs scored."
                : `${runs} run(s)! Current score: ${game.currentScore}.`
        );
    }

    updateScoreboard();

    // Check whether the chasing side has won.
    if (
        game.innings === 2 &&
        game.battingSide === "user" &&
        game.currentScore >= game.target
    ) {
        endMatch(true);
        return;
    }

    if (
        game.innings === 2 &&
        game.battingSide === "computer" &&
        game.currentScore >= game.target
    ) {
        endMatch(false);
        return;
    }

    // Ten wickets means the innings is over.
    if (game.wickets >= 10) {
        finishInnings();
    }
}


// END FIRST INNINGS / START SECOND


function finishInnings() {
    if (game.innings === 1) {
        const firstInningsScore = game.currentScore;

        game.target = firstInningsScore + 1;
        game.innings = 2;

        // Switch batting side.
        game.battingSide =
            game.battingSide === "user" ? "computer" : "user";

        game.currentScore = 0;
        game.wickets = 0;

        updateScoreboard();

        showMessage(
            `First innings complete! Target: ${game.target}. Second innings begins!`
        );

        alert(
            `Innings complete! Target is ${game.target} runs.`
        );

        return;
    }

    // If the second innings ends without reaching the target,
    // the first innings team wins.
    const userWon = game.battingSide === "computer";

    endMatch(userWon);
}


// MATCH RESULT


function endMatch(userWon) {
    game.gameOver = true;
    game.matchStarted = false;

    const result = userWon
        ? "🏆 YOU WON THE MATCH!"
        : "🏏 COMPUTER WON THE MATCH!";

    showMessage(
        `${result} Final score: ${game.currentScore}/${game.wickets}`
    );

    alert(result);
}


// SPACEBAR CONTROLS


document.addEventListener("keydown", function (event) {
    if (event.code !== "Space") return;
    if (!game.matchStarted || game.gameOver) return;

    // Prevent page scrolling while playing.
    event.preventDefault();

    playBall();
});


// COMPUTER'S FIRST INNINGS


sixthDiv.querySelector("button").addEventListener("click", function () {
    if (game.matchStarted || game.gameOver) return;

    startMatch();
});
