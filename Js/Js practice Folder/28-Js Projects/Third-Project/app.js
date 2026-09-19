const userGuess=document.querySelector("#userguess")
const prevGuess=document.getElementById("prev-guesses")
let remainGuess=document.getElementById("remain-guesses")
const display=document.getElementById("display-msg")
const button=document.getElementById("button")
let remainGuess2=9
const EnterRightNum=false
const User_Guess_Array=[]




function isNumberCorrect(){
   const userNumber=userGuess.value
   if (userNumber=="") {
      displayMsg("Please enter a correct number!")     
   }else{
     checkNumber()
    
     
   }
}

function displayMsg(msg){
    display.innerText=`${msg}`
}

function submitGuess() {
    isNumberCorrect()    
       
}

function checkNumber() {
    const userNumber=Number(userGuess.value)
    const randomNum=Math.floor(Math.random()*100+1)
    if (randomNum==userNumber) {
        displayMsg("You enter a correct Number")
        gamewon()
    }
    else if(userNumber<0 || userNumber>100){
        displayMsg("please enter a num smaller than 100 and greater than 0")
        
    }   
    else{

        displayMsg(`You guess a wrong number the correct Number is ${randomNum}`)   
        remainingGuess()
    }
     prevGuessManager()  
    
}

function remainingGuess(){

    if (remainGuess2==0) {
        displayMsg("game over")
        button.setAttribute("disabled","true")

            
    }
    else{
        remainGuess.innerText=remainGuess2
        remainGuess2=remainGuess2-1   
    }
}

function prevGuessManager(){
    prevGuess.innerText+=`${userGuess.value}, `
}

function gamewon(){
    displayMsg(`You won the game`)
}

