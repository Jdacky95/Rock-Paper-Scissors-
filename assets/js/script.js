// Declaring Game and Rock, Paper, Scissors div areas 
const game = document.querySelector(".game");
const buttons = document.querySelector(".btn1");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let yourScoreNum = 0;
let compScoreNum = 0;
let turnsLeft = 5;



// Declare lets play and "Restart":

let letsPlay = document.getElementById("lets-play")
let restart = document.getElementById("restart")
// let rules = document.getElementById("rules")

// Declaring elements picked: 

const picked = document.querySelector(".picked");
let youPicked = document.getElementById("you-picked");
let compPicked = document.getElementById("comp-picked");
let result = document.getElementById("result");

// Declaring scores to be updated: 

const scores = document.querySelector(".scores");
const yourScore = document.getElementById("your-score");
const computerScore = document.getElementById("computer-score");

// Declaring Turns left: 

const turns = document.getElementById("turns-left");




//
// Start of play functions



// Computer Choice:

function gameOver() {
    yourScoreNum  = 0;
    compScoreNum = 0;
    yourScore.innerHTML = yourScoreNum;
    computerScore.innerHTML = compScoreNum;
    console.log("test");
    if (yourScoreNum || compScoreNum < 5){
        letsPlay.innerHTML = "Lets Play!"
        restart.innerHTML = ""
        youPicked.innerHTML=""
        compPicked.innerHTML=""
        result.innerHTML=""
        
    }
}

// function showPicks(){
//     compPicked.innerHTML = computerPick()
// }

// function showPick() {
//     if (computerPick() === "rock") return compPicked.innerHTML = "Rock";
//     if (pick == "paper") return "Paper";
//     if (pick ==  "Scissors"); return "scissors";
    
// }

function computerPick() {
   
    const picks = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return picks[randomNumber]; 
        
    
    
        
}



function win() {
    yourScoreNum++;
    yourScore.innerHTML = yourScoreNum;
    result.innerHTML = "YOU WIN!";
    if (yourScoreNum === 5) {
    letsPlay.innerHTML = "You are the Champion!";
    restart.innerHTML = "Would you like to play again?";
}
    }

function lose() {
    compScoreNum++;
    computerScore.innerHTML = compScoreNum;
    result.innerHTML = "you lose !";
    if (compScoreNum === 5) {
        letsPlay.innerHTML = "The Computer wins this time!";
        restart.innerHTML = "Would you like to play again?";
    }
    
}

function tie() {

    result.innerHTML = "It's a tie!";
    
}

// function play()


function play(yourPick) {

    const computerPicked = computerPick();
    
    switch (yourPick + computerPicked) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win()
            
            break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
        
            lose()
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie()
            break;
    }

    console.log(computerPicked)
    compPicked.innerHTML = computerPicked
}







// Event click  listeners for the rock paper and scissor icons. (yourPick)



rock.addEventListener('click', function () {
    
    play("rock")
    youPicked.innerHTML = "Rock"
})

paper.addEventListener('click', function () {
    
    play("paper")
    youPicked.innerHTML = "Paper"
    
})

scissors.addEventListener('click', function () {
    
    play("scissors")
    youPicked.innerHTML = "Scissors"
    
})

// Event click listener for "play again"


restart.addEventListener('click', function() {
    gameOver()
})
// }

