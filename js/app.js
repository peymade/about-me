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
    //console.log('Yep! I have spent most of my life in Seattle.')
    alert('Yep! I have spent most of my life in Seattle.')
  } else if (lowercaseAnswerOne === 'no'){
    //console.log('Nope- you didn\'t get the right answer this time. I am from Seattle.')
    alert('Nope- you didn\'t get the right answer this time. I am from Seattle.')
  } else {
    //console.log('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
    alert('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
  }

  //Ask 2nd question
  let answerTwo = prompt('Am I an only child?'); 

  //Make answer lowercase
  let lowercaseAnswerTwo = answerTwo.toLowerCase();
  console.log(lowercaseAnswerTwo, '(this is the lower case version)');

  //Check and see if answer is correct. Answer to Q2 is NO
  if (lowercaseAnswerTwo === 'yes'){
    //console.log('Nope, that\'s not correct. I have a younger sister named Catherine!')
    alert('Nope, that\'s not correct. I have a younger sister named Catherine!')
  } else if (lowercaseAnswerTwo === 'no'){
    //console.log('Yep! That\'s right. I have one sibling- a younger sister named Catherine.')
    alert('Yep! That\'s right. I have one sibling- a younger sister named Catherine.')
  } else {
    //console.log('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
    alert('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
  }

  //Ask 3rd question
  let answerThree = prompt('Do I like watching movies?') 

  //Make answer lowercase
  let lowercaseAnswerThree = answerThree.toLowerCase();
  console.log(lowercaseAnswerThree, '(this is the lower case version)');

  //Check and see if answer is correct. Answer to Q3 is NO
  if (lowercaseAnswerThree === 'yes'){
    //console.log('Nope, that\'s not correct. I don\'t much care for movies- I prefer TV shows. My favorite is a German show called \'Dark.\'')
    alert('Nope, that\'s not correct. I don\'t much care for movies- I prefer TV shows. My favorite is a German show called \'Dark.\'')
  } else if (lowercaseAnswerThree === 'no'){
    //console.log('Yep! That\'s right. I don\'t much care for movies- I prefer TV shows. My favorite is a German show called \'Dark.\'')
    alert('Yep! That\'s right. I don\'t much care for movies- I prefer TV shows. My favorite is a German show called \'Dark.\'')
  } else {
    //console.log('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
    alert('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
  }

  //Ask 4th question
  let answerFour = prompt('Do I enjoy visiting national parks?') 

  //Make answer lowercase
  let lowercaseAnswerFour = answerFour.toLowerCase();
  console.log(lowercaseAnswerFour, '(this is the lower case version)');

  //Check and see if answer is correct. Answer to Q4 is YES
  if (lowercaseAnswerFour === 'yes'){
    //console.log('That\'s right! My favorite national park is Canyonlands.')
    alert('That\'s right! My favorite national park is Canyonlands.')
  } else if (lowercaseAnswerFour === 'no'){
    //console.log('That\'s not right. I LOVE national parks. My favorite is Canyonlands.')
    alert('That\'s not right. I LOVE national parks. My favorite is Canyonlands.')
  } else {
    //console.log('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
    alert('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
  }

  //Ask 5th question
  let answerFive= prompt('Have I ever pulled 2 consecutive all-nighters?') 

  //Make answer lowercase
  let lowercaseAnswerFive = answerFive.toLowerCase();
  console.log(lowercaseAnswerFive, '(this is the lower case version)');

  //Check and see if answer is correct. Answer to Q5 is YES
  if (lowercaseAnswerFive === 'yes'){
    //console.log('Correct! I did this so I could stay up writing songs with one of my best friends.')
    alert('Correct! I did this so I could stay up writing songs with one of my best friends.')
  } else if (lowercaseAnswerFive === 'no'){
    //console.log('Nope, not correct. I did this a few weeks ago to try to be more creative with writing music. I ended up just being very sleepy.')
    alert('Nope, not correct. I did this a few weeks ago to try to be more creative with writing music. I ended up just being very sleepy.')
  } else {
    //console.log('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to keep going with the game.')
    alert('Huh. You didn\'t answer with either \'yes\' or \'no\'. Press OK to enter the site.')
  }
    alert('Alright! The game is done. Thanks for playing, ' + userName + '. Press OK to enter the site.')
} else {
  alert('Darn. Well I will take you to my site anyway :)');
}
