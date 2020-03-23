alert('Hey, are you here to play?');
alert('Are you sure?');
alert('Maybe go outside instead!');




// global variables for game
let choices = ['rock', 'paper', 'scissors'];
let computers_choice;
let players_choice;
let player_lives = 3;
let computer_lives = 3;
let message_area = document.getElementById('game_area');
let cleararea = false;

document
    .getElementById('playGame')
    .addEventListener('click', runGame)

function runGame() {
  if (cleararea) {
    message_area.innerHTML = '';
  }

  clearArea = false;

  message_area.innerHTML += ':))  :((  :0  :))  :(( :))<br />';
  message_area.innerHTML +='Computer lives: ' + computer_lives + '<br />';
  message_area.innerHTML +='Player lives: ' + player_lives + '<br />';
  message_area.innerHTML +='Choose your weapon!' + '<br />';
  message_area.innerHTML +='*************<br />';

  let players_choice = document.getElementById('gameOption')
  players_choice = players_choice.options[players_choice.selectedIndex].value;
  computers_choice = choices[Math.floor(Math.random() * choices.length)];

  console.log('*************');
  console.log('Computer chose: ' + computers_choice);
  console.log('Player chose: ' + players_choice);
  console.log('*************');

  if (players_choice == computers_choice) {
    console.log('Tie! No one wins, play again.');
  } else if (players_choice == 'rock') {
    checkComputerWins('paper', 'covers', 'smashes');
  } else if (players_choice == 'paper') {
    checkComputerWins('scissors', 'cuts', 'covers');
  } else if (players_choice == 'scissors') {
    checkComputerWins('rock', 'smashes', 'cuts');
  } else {
    console.log("Well that's not a valid choice");
  }

  checkStatus();
}

function checkComputerWins(validateChoice, winMessage, loseMessage) {
  if (computers_choice == validateChoice) {
    console.log('You lose! ' + computers_choice + ' ' + winMessage + ' ' + players_choice + '<br />');
    player_lives = player_lives - 1;
  } else {
    console.log('You win! ' + players_choice + ' ' + loseMessage + ' ' + computers_choice + '<br />');
    computer_lives = computer_lives - 1;
  }
}

function checkStatus() {
  if (player_lives == 0) {
    showWinLoseMessage("lost");
  } else if (computer_lives == 0) {
    showWinLoseMessage("won");
  } else {
    message_area.innerHTML += 'Select another choice!<br />';
    message_area.innerHTML += '*********** <br /><br />';
  }
}

function showWinLoseMessage(status) {
  message_area.innerHTML += '*************<br />';
  message_area.innerHTML += 'Game over.<br />';
  message_area.innerHTML += '*************<br />';
  message_area.innerHTML += 'You ' + status + '! Now take your dog for a walk!<br />';
}


