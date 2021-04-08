'use strict'; 

//Prompt the user to enter their name, give a greeting
let userName = prompt('Welcome to Peyton\'s guessing game site. What is your name?');
console.log('Our user\'s name is '+ userName);

// Ask user if they want to play a game
alert('Hi there, ' + userName + '! So glad you decided to stop by. Press OK to continue.')
let gameAnswer = prompt('Okay ' + userName + ', would you like to play a game to learn more about me? (enter either yes or no.)')

//Make their answer lowercase
let lowercaseGameAnswer = gameAnswer.toLowerCase();
console.log(lowercaseGameAnswer, '(this is the lower case version)');

// Set score variable for questions
var score = 0;

//Part 1 of Game 

//If answer is yes, then start the game. If it is not, them take them to the site. 
if (lowercaseGameAnswer === 'yes'){
  alert('Great! Press OK to get started.');

  //Ask 1st question
  let answerOne = prompt('Am I from Seattle, WA?'); 

  //Make answer lowercase
  let lowercaseAnswerOne = answerOne.toLowerCase();
  console.log(lowercaseAnswerOne, '(this is the lower case version)');

  //Check and see if answer is correct. Answer to Q1 is YES
  if (lowercaseAnswerOne === 'yes'){
    alert('Yep! I have spent most of my life in Seattle.');
    score = 1;
  } else if (lowercaseAnswerOne === 'no'){
    alert('Nope- you didn\'t get the right answer this time. I am from Seattle.')
    score = 0;
  } else {
    alert('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
    score = 0;
  }

  //Ask 2nd question
  let answerTwo = prompt('Am I an only child?'); 

  //Make answer lowercase
  let lowercaseAnswerTwo = answerTwo.toLowerCase();
  console.log(lowercaseAnswerTwo, '(this is the lower case version)');

  //Check and see if answer is correct. Answer to Q2 is NO
  if (lowercaseAnswerTwo === 'yes'){
    alert('Nope, that\'s not correct. I have a younger sister named Catherine!')
  } else if (lowercaseAnswerTwo === 'no'){
    alert('Yep! That\'s right. I have one sibling- a younger sister named Catherine.')
    score = score + 1;
    // console.log(personalQuestionsScore);
  } else {
    alert('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
  }

  //Ask 3rd question
  let answerThree = prompt('Do I like watching movies?') 

  //Make answer lowercase
  let lowercaseAnswerThree = answerThree.toLowerCase();
  console.log(lowercaseAnswerThree, '(this is the lower case version)');

  //Check and see if answer is correct. Answer to Q3 is NO
  if (lowercaseAnswerThree === 'yes'){
    alert('Nope, that\'s not correct. I don\'t much care for movies- I prefer TV shows. My favorite is a German show called \'Dark.\'')
  } else if (lowercaseAnswerThree === 'no'){
    alert('Yep! That\'s right. I don\'t much care for movies- I prefer TV shows. My favorite is a German show called \'Dark.\'')
    score = score + 1;
  } else {
    alert('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
  }

  //Ask 4th question
  let answerFour = prompt('Do I enjoy visiting national parks?') 

  //Make answer lowercase
  let lowercaseAnswerFour = answerFour.toLowerCase();
  console.log(lowercaseAnswerFour, '(this is the lower case version)');

  //Check and see if answer is correct. Answer to Q4 is YES
  if (lowercaseAnswerFour === 'yes'){
    alert('That\'s right! My favorite national park is Canyonlands.')
    score = score + 1;
  } else if (lowercaseAnswerFour === 'no'){
    alert('That\'s not right. I LOVE national parks. My favorite is Canyonlands.')
  } else {
    alert('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
  }

  //Ask 5th question
  let answerFive= prompt('Have I ever pulled 2 consecutive all-nighters?') 

  //Make answer lowercase
  let lowercaseAnswerFive = answerFive.toLowerCase();
  console.log(lowercaseAnswerFive, '(this is the lower case version)');

  //Check and see if answer is correct. Answer to Q5 is YES
  if (lowercaseAnswerFive === 'yes'){
    alert('Correct! I did this so I could stay up writing songs with one of my best friends.')
    score = score + 1;
  } else if (lowercaseAnswerFive === 'no'){
    alert('Nope, not correct. I did this a few weeks ago to try to be more creative with writing music. I ended up just being very sleepy.')
  } else {
    alert('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to enter the site.')
  }
    alert('Alright! The quiz is done. Thanks for playing, ' + userName + '. Press OK to move on to part 2 of the game.')
} else {
  alert('Darn. You\'re not getting away with not playing a game, though. We\'ll move onto part two :)');
}

// Part 2 of Game

//Make variables for a flag, a counter for the number of guesses, and the value of the correct answer.
let numberCorrect = false;
let guessNumOne = 4;
let faveNum = 24;

//As long as they have more guesses, and they haven't gotten the answer (the flag isn't turned to TRUE) they can continue guessing.
while(guessNumOne > 0 && numberCorrect === false) {
 //Set variable equal to their guess
  let faveNumGuess = parseInt(prompt('Can you guess my favorite number? It is between 1-30. You have ' + guessNumOne + ' tries remaining.'));
  console.log(typeof faveNumGuess);
  // If the answer is right, tell them, turn the flag to TRUE, and add 1 to their score
  if (faveNumGuess === faveNum){
   alert("Yes! You guessed it.");
    numberCorrect = true;
    score = score + 1;
  // If their number was too high or low, or outside of the number bounds, let them know
  } else if (faveNumGuess < 24 && faveNumGuess >=0){
    alert('Sorry, too low. Press OK.');
  } else if (faveNumGuess > 24 && faveNumGuess <=30){
    alert('Sorry, too high. Press OK.');
  } else if (faveNumGuess >=31 || faveNumGuess <=0){
    alert('That is not in the 1-30 range, or is not an expected input. Press OK.');
  } 
  // Decrease their number of guesses by 1
  guessNumOne--;
  console.log(guessNumOne);
}

alert('My favorite number is 24, because it has so many factors and is so nice and symmetrical feeling.')

// Part 3 of Game

alert('Now, we will move on to section 3 of the get-to-know-me-game.')

// Make array with favorite activities, and give a total number of guesses. Name is TWO because in the previous game, there is guessNumOne
let myActivities = ['reading', 'playing piano', 'cooking', 'making jewelry', 'listening to music', 'walking my dog'];
let guessNumTwo = 6;

// Create a flag (an on/off switch) to tell me that a condition is changed

let activityCorrect = false;

// As long as they have more guesses and they haven't gotten the answer yet, enter into the while loop
while(guessNumTwo > 0 && activityCorrect === false) {
  let activityGuess = prompt('Can you guess one of the activites I\'ve enjoyed during quarantine? I will give you ' + guessNumTwo + ' tries.');
  // Iterate through the array to look for their answer
  for(let index = 0; index < myActivities.length; index++){
    // If their guess matches the current array item, tell them, and turn the flag to true, and add 1 to their score. 
    if (activityGuess === myActivities[index]){
      alert("Yes! You guessed one of them.");
      activityCorrect = true;
      score = score + 1;
    }
  }
  // If the flag was not turned true by the previous codeblock, tell them that their answer wasn't in the array.
  if (activityCorrect === false){
    alert('That was not one of the activities.');
  }
  // Decrement their guesses by 1
  guessNumTwo--;
  console.log(guessNumTwo);
}

alert('The possible answers were: reading, playing piano, cooking, making jewelry, listening to music, and walking my dog. Press OK to see your total score for all 7 questions.')
alert('Your score was: ' + score + ' out of 7. Great job! Press OK to move on to the site to learn more about me.')

