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

// Declaring elements picked: 

const picked = document.querySelector(".picked");
const youPicked = document.getElementById("you-picked");
const compPicked = document.getElementById("comp-picked");
let result = document.getElementById("result");

// Declaring scores to be updated: 

const scores = document.querySelector(".scores");
const yourScore = document.getElementById("your-score");
const computerScore = document.getElementById("computer-score");

// Declaring Turns left: 

const turns = document.getElementById("turns-left");



let gameOver = false
// Start of play functions



// Computer Choice:

function computerPick() {

    const picks = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return picks[randomChoice];
}

function showPick(pick) {
    if (pick === "rock") return "Rock";
    if (pick === "paper") return "Paper";
    return "Scissors";
}

function win() {
    yourScoreNum++;
    yourScore.innerHTML = yourScoreNum;
    result.innerHTML = "YOU WIN!";
    turnsLeft--;
    turns.innerHTML = turnsLeft;
    if (yourScoreNum === 5) {
    letsPlay.innerHTML = "You are the Champion!";
    restart.innerHTML = "Would you like to play again?";
    
}
// if (yourScoreNum || compScoreNum === 3){
//     restart.innerHTML = "Would you like to play again? "
// }
    }





function lose() {
    compScoreNum++;
    computerScore.innerHTML = compScoreNum;
    result.innerHTML = "you lose !";
    turnsLeft--;
    turns.innerHTML = turnsLeft;
    if (compScoreNum === 5) {
        letsPlay.innerHTML = "The Computer wins this time!";
        restart.innerHTML = "Would you like to play again?";
    }
    

}

function tie() {

    result.innerHTML = "It's a tie!";
    turnsLeft--;
    turns.innerHTML = turnsLeft;

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

    compPicked.innerHTML = showPick(computerPicked);
    youPicked.innerHTML = showPick(yourPick);

}


// console.log("hi")




// Event click  listeners for the rock paper and scissor icons. (yourPick)



rock.addEventListener('click', function () {
    play("rock")
})

paper.addEventListener('click', function () {
    play("paper")
})

scissors.addEventListener('click', function () {
    play("scissors")
})



