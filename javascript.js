// an array consisting of Rock, Paper and Scissors 
let arrayrps = ['Rock', 'Paper', 'Scissors'];
let computerchoice;
let playerchoice;

function getComputerChoice(){
    let index = Math.floor(Math.random()*3); // generates a number between 0 and 2
    computerchoice = arrayrps.at(index); // uses our random number generator as an index selector from our array and stores it in variable
    computerchoice = computerchoice.toUpperCase();
    return computerchoice;
}

function getPlayerChoice(){
    playerchoice = prompt("Rock, Paper, or Scissors?"); // asks the user to pick rock, paper, or scissors
    playerchoice = playerchoice.toUpperCase(); // changes our userinput to all caps - makes it case insensitve
    return playerchoice;
}


function playround(x, y){ //plays a round of rock paper scissors 
    x = getPlayerChoice(); //calls upon the playerchoice function so the player can make their choice
    y = getComputerChoice(); //calls upon the computerchoice function so the computer can make their choice 
    
    if(playerchoice == computerchoice){
        alert("It's a tie!");
    } else if ((playerchoice === "PAPER" && computerchoice === "ROCK")||
               (playerchoice === "ROCK" && computerchoice === "SCISSORS")||
               (playerchoice === "SCISSORS" && computerchoice === "PAPER")){
                alert("You win!");
    } 
    else {
        alert("You lose. Sorry!");
    }
}










console.log(getComputerChoice);
console.log(getPlayerChoice);
console.log(playround);
