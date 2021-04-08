// // Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// // Indicates through an alert if the guess is “too high” or “too low”.
// // It should give the user exactly four opportunities to get the correct answer.
// // After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.


// //If the guess is between 0 and 24, or 24 and 30, tell them it was wrong
// // while ((numberGuess < 24 && numberGuess >=0) || (numberGuess > 24 && numberGuess <=30)) {
// //     if (numberGuess < 24 && numberGuess >=0){
// //         numberGuess = prompt('Sorry, too low. Try again.');
// //         guessCount++
// //      } else if (numberGuess > 24 && numberGuess <=30){
// //         numberGuess = prompt('Sorry, too high. Try again.');
// //         guessCount++
// //      } else {
// //        alert('Congrats! You got it right.');
// //          break;
// //      }
// //  }

//  let numberGuess = prompt('Now for a more difficult question. What is my favorite number? (Hint, it is between 1 and 30.');
//  let numberCorrect = 24

// //  for (let guessCount=1; guessCount<=4; guessCount++) {
// //   while ((numberGuess < 24 && numberGuess >=0) || (numberGuess > 24 && numberGuess <=30)) {
// //     if (numberGuess < 24 && numberGuess >=1){
// //         numberGuess = prompt('Sorry, too low. Try again.');
// //         console.log(guessCount);
// //      } else if (numberGuess > 24 && numberGuess <=30){
// //         numberGuess = prompt('Sorry, too high. Try again.');
// //         console.log(guessCount);
// //      } else if (numberGuess >=31 || numberGuess <=0) {
// //         numberGuess = prompt('That number is not in the range between 1 and 30. Try again.');
// //         console.log(guessCount);
// //      } else {
// //        alert('Congrats! You got it right.');
// //        console.log(guessCount);
// //          break;
// //      }
// //  }
// //  }

//  for (let guessCount=1; guessCount<=4; guessCount++) {
//   while (numberGuess !== numberCorrect) {
//     if (numberGuess < 24 && numberGuess >=1){
//         numberGuess = prompt('Sorry, too low. Try again.');
//         console.log(guessCount);
//      } else if (numberGuess > 24 && numberGuess <=30){
//         numberGuess = prompt('Sorry, too high. Try again.');
//         console.log(guessCount);
//      } else {
//         numberGuess = prompt('That number is not in the range between 1 and 30. Try again.');
//         console.log(guessCount);
//      }
//  } alert('Congrats!');
//  }


// //  if (numberGuess >=31 || numberGuess <=0)

// let guessCount = 1;

// while(guessCount<4){
//   if (numberGuess === numberCorrect) {
//     alert('Yay! You got it right. Press OK to move on.');
//     break;
//   } else if (numberGuess < 24 && numberGuess >=1){
//     numberGuess = prompt('Sorry, too low. Try again.');
//     console.log(guessCount);
//  } else if (numberGuess > 24 && numberGuess <=30){
//   numberGuess = prompt('Sorry, too high. Try again.');
//   console.log(guessCount);
// } else {
//   numberGuess = prompt('That number is not in the range between 1 and 30. Try again.');
//   console.log(guessCount);
// } guessCount++
// }


