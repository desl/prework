var playChoice = "";
var counter = 0;

do {
  playChoice = prompt("Enter your choice (rock, paper, or scissors):");
  counter ++;
} while ( !(playChoice === "rock" || playChoice === "paper" || playChoice === "scissors" || counter > 2))

//playChoice = "fork";

console.log("Player Chose: ", playChoice);

var compChoice = Math.random()*3;
if (compChoice < 1){
  compChoice = "rock";
} else if (compChoice < 2){
  compChoice = "paper";
} else {
  compChoice = "scissors"
}

console.log("Computer chose:", compChoice);

if (playChoice === compChoice){
  console.log("Tie Game!");
} else if (playChoice === "rock" && compChoice === "scissors"){
  console.log("Player wins!", playChoice, "beats", compChoice);
}else if (playChoice === "scissors" && compChoice === "paper"){
  console.log("Player wins!", playChoice, "beats", compChoice);
}else if (playChoice === "paper" && compChoice === "rock"){
  console.log("Player wins!", playChoice, "beats", compChoice);
}else {
  console.log("Computer wins!", compChoice,"beats", playChoice);
}