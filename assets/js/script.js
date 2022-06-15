// Declaring Game and Rock, Paper, Scissors div areas 
const game = document.querySelector(".game");
const buttons = document.querySelector(".btn1");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let yourScoreNum = 0;
let compScoreNum = 0;


// Declaring elements picked: 

const picked = document.querySelector(".picked");
const youPicked = document.getElementById("you-picked");
const compPicked = document.getElementById("comp-picked");
const result = document.getElementById("result");

// Declaring scores to be updated: 

const scores = document.querySelector(".scores");
const yourScore = document.getElementById("your-score");
const computerScore = document.getElementById("computer-score");

// Declaring Turns left: 

const turns = document.getElementById("turns-left");

// Start of play functions

// function play()

function computerPick() {
    const picks = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return picks[randomChoice];
}

function win(yourPick, computerPicked){
    yourScoreNum++;
    yourScore.innerHTML = yourScoreNum;
    result.innerHTML = "YOU WIN!";

}

function lose(yourPick, computerPicked){
    compScoreNum++;
    computerScore.innerHTML = compScoreNum;
    result.innerHTML = "you lose !";

}

function tie(yourPick, computerPicked){
    
    result.innerHTML = "It's a Tie!";

}



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

}


// console.log("hi")


// Computer Choice:



rock.addEventListener('click', function () {
    play("rock")
})

paper.addEventListener('click', function () {
    play("paper")
})

scissors.addEventListener('click', function () {
    play("scissors")
})