'use strict';

/* To select the element from html in javascript we use ,
//console.log(document.querySelector('.message')); // this selects the element with class="message".

console.log(document.querySelector('.message').textContent); // this selects only the text content of the element.


// We can set the values besides getting from the elemeents.
document.querySelector('.message').textContent = '🎉 Correct Number!'; // So here we actually did DOM manipulation , we manipulated the textContent of the selected element .

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 17;

// To select the input value , we use 'value' property on the element
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/











// We define this number outside the eventListener otherwise if declared inside the eventListener , then the number changes its value after every click which makes no sense.
let secretNumber = Math.trunc(Math.random()*20) + 1 ; // To generate the random number between 1 and 20.


let score = 20; // This variable is called 'state variable' because it is a part of so called application-state.


let highscore = 0 ; // We need a variable for highscore.



// Refactoring Code by using functions:
//We pass the 'message' as a parameter to the function , so ,that message gets displayed for multiple conditions respectively. 
const displayMessage = function(message) { 
  document.querySelector('.message').textContent = message ;
}


// -  We didnot call the function , we just defined and passed the function to the event handler , It is the javascript engine that calls the function whenever the click event happens.

document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  // We can execute dom manipulations as well.
  //document.querySelector('.message').textContent = '🎉 Correct Number!';


  // Generally when there is an input field , the input is always stored as a string , but here we need to compare the input value with a randomly generated number.
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess ,typeof guess);


  // Implementation of the game : 
  // 1. Case : when there is no guess from the user.
  if(!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  }

  // When you win the game
  else if(guess === secretNumber){
    
    //document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');

    document.querySelector('.number').textContent = secretNumber; // Secret numer should be displayed only when the guess is correct.

    document.querySelector('.score').textContent = score ;

    if(score > highscore){
      highscore = score ; // So if the current score is greater than the previous highscore , then the highscore gets updated to the current score.
      document.querySelector('.highscore').textContent = highscore ;
    }
   
   
    // Manipulating CSS styles
    // 1. We need to access 'style' property of the element and then select the css property that we want to manipulate.
    // 2. We need to specify the value and unit('30rem') within a string.
    // 3. This manipulation gets applied as INLINE STYLE in HTML.
    document.querySelector('body').style.backgroundColor = '#60b347' ;

    document.querySelector('.number').style.width = '30rem';
  }

  // Refactoring our code means removing duplicates , restructuring the code without changing functionality(how it works).
  else if(guess !== secretNumber){
    if(score > 1){

      //document.querySelector('.message').textContent = (guess > secretNumber) ? '📈 Too High!' : '📉 Too Low!';

      displayMessage((guess > secretNumber) ? '📈 Too High!' : '📉 Too Low!');// IMPORTANT : Here we pass the expression as an argument which gets evaluated first and passes a string to the function.

      score--; 
      document.querySelector('.score').textContent = score;

    } 
    else {
      document.querySelector('.message').textContent = '💥 You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
/*  // When guess is too high
  else if(guess > secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = '📈 Too High! ';
      score--; 
      document.querySelector('.score').textContent = score;
    } 
    else {
      document.querySelector('.message').textContent = '💥 You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is too low
  else if(guess < secretNumber) {
    if(score > 1){
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--; 
      document.querySelector('.score').textContent = score;
    } 
    else {
      document.querySelector('.message').textContent = '💥 You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/

});





// Implementing RESET functionality on AGAIN! button.
document.querySelector('.again').addEventListener('click',function() {
  
  score = 20;
  document.querySelector('.score').textContent = score;
  
  secretNumber = Math.trunc(Math.random()*20) + 1 ; // We reassign a value to secret number.

  //document.querySelector('.message').textContent = 'Start guessing...' ;
  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';
  
  document.querySelector('.guess').value = '';
  
  document.querySelector('body').style.backgroundColor = '#222' ;

  document.querySelector('.number').style.width = '15rem';
})