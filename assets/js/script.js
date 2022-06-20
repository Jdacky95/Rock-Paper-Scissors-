// Declaring Game and Rock, Paper, Scissors div areas 
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let yourScoreNum = 0;
let compScoreNum = 0;

// Declare lets play and "Restart":

let rules = document.getElementById("rules");
let letsPlay = document.getElementById("lets-play");
let restart = document.getElementById("restart");

// Declaring elements picked: 

let youPicked = document.getElementById("you-picked");
let compPicked = document.getElementById("comp-picked");
let result = document.getElementById("result");

// Declaring scores to be updated: 

const yourScore = document.getElementById("your-score");
const computerScore = document.getElementById("computer-score");

// Function for the game over restart div:

function gameOver() {
    yourScoreNum = 0;
    compScoreNum = 0;
    yourScore.innerHTML = yourScoreNum;
    computerScore.innerHTML = compScoreNum;

    if (yourScoreNum || compScoreNum < 5) {
        letsPlay.innerHTML = "";
        rules.innerHTML = "First to five wins!";
        restart.innerHTML = "";
        youPicked.innerHTML = "";
        compPicked.innerHTML = "";
        result.innerHTML = "";


    }
}

// Computer Choice: Code for the computer to pick a random choice from the Array for the play function:

function computerPick() {

    const picks = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return picks[randomNumber];

}

// Win function that increments score and shows the 'win' results in the dom:

function win() {
    yourScoreNum++;
    yourScore.innerHTML = yourScoreNum;
    result.innerHTML = "YOU WIN!";

}

// Lose function that decrements score and shows the 'lose' result:

function lose() {
    compScoreNum++;
    computerScore.innerHTML = compScoreNum;
    result.innerHTML = "Computer Wins.";


}

// tie function that shows 'tie' result:

function tie() {

    result.innerHTML = "It's a tie!";

}

/*  Play function: Contains a switch function that switches between all possible user and computer choices and assigns 'win', 'lose' or 'tie' 
functions appropriately, produces 'computer picked' variable in the DOM */



function play(yourPick) {

    const computerPicked = computerPick();

    switch (yourPick + computerPicked) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();

            break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":

            lose();
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie();
            break;
    }
    compPicked.innerHTML = computerPicked;

    rules.innerHTML = "";
    letsPlay.innerHTML = "";
    restart.innerHTML = "";

    if (yourScoreNum >= 5) {
        letsPlay.innerHTML = "You are the Champion!";
        restart.innerHTML = "Would you like to play again?";

    }
    if (compScoreNum >= 5) {
        restart.innerHTML = "Would you like to play again?";
        letsPlay.innerHTML = "The Computer wins this time!";

    }



}

// Event click  listeners for the rock paper and scissor icons. (yourPick)- shows Picks in the DOM.


rock.addEventListener('click', function () {

    play("rock");
    youPicked.innerHTML = "Rock";
});

paper.addEventListener('click', function () {

    play("paper");
    youPicked.innerHTML = "Paper";

});

scissors.addEventListener('click', function () {

    play("scissors");
    youPicked.innerHTML = "Scissors";

});

// Event click listener for "play again"

restart.addEventListener('click', function () {
    gameOver();
});