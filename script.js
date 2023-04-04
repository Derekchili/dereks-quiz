// define variable for tracking tim
var timeH2 = document.querySelector("#timer");
// variable for keeping highscore
var highScoreH2 = document.querySelector("#highscore");
// variable to start the game
var startBtn = document.querySelector("#start-time");
// variable for questions multiple choice
var multiple1 = document.querySelector(".ans1");
var multiple2 = document.querySelector(".ans2");
var multiple3 = document.querySelector(".ans3");
var multiple4 = document.querySelector(".ans4");
// variable to keep initials with highscore
var intl = document.querySelector("#initials");
var intlInput = document.querySelector("#initials-input");
// defines variable for questions
var qBox = document.querySelector("#questions-box");
var inputDv = document.querySelector("#inputDiv");
// var holdInterval = 0;
// this variable stores the penalty time for wrong answer
var penalty = 10;
// define all questions and answers asked BCS can have mutiple things here
var Qh1 = document.querySelector("h1");

// This variable holds all the questions fo the quiz
var allQuestions = [
  {
    question: "How many eyelids do dogs have?",
    answers: ["3", "5", "2", "1"],
    correct: "3",
  },
  {
    question: "What sense are puppies born without?",
    answers: ["eyesight", "taste", "hearing", "smell"],
    correct: "hearing",
  },
  {
    question: "What is the most popular breed of dog in the USA?",
    answers: ["Poodle", "German Shepard", "Labrador", "Golden Retriever"],
    correct: "Labrador",
  },
  {
    question: "How many teeth do adult dogs have?",
    answers: ["36", "42", "54", "28"],
    correct: "42",
  },
];
// This variable shuffles the questions so they dont repeat on the page
var questionNumbers = ["q1", "q2", "q3", "q4"];
allQuestions = shuffle(allQuestions);
var currentQ = 0;

var currentIndex;
function shuffle(array) {
  currentIndex = array.length;
  var temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  // console.log(array);
  return array;
}

// this variable hides the containerafter user clicks start
qBox.style.display = "none";
// some global variables
var secondsLeft = 60;
var currentQuestion = 0;
var timeStarter;
var isGameDone = false;

startBtn.addEventListener("click", function () {
  displayQuestion();
  startBtn.style.display = "none";
  startTime();
});

// this function sets the  the time viarable
function startTime() {
  timeStarter = setInterval(function () {
    secondsLeft--;
    timeH2.textContent = secondsLeft + " seconds left";
    if (secondsLeft <= 0) {
    }
  }, 1000);
}

// This function is once start is clicked now it's generating new questions.
function displayQuestion() {
  
  var currentQuestionNumber = questionNumbers[currentQuestion];
 
  var currentQuestionObj = allQuestions[currentQ];
  
  Qh1.textContent = currentQuestionObj.question;

  multiple1.textContent = currentQuestionObj["answers"][0];
  multiple2.textContent = currentQuestionObj["answers"][1];
  multiple3.textContent = currentQuestionObj["answers"][2];
  multiple4.textContent = currentQuestionObj["answers"][3];
}
// This function checks if answer is right or wrong
function checkAnswer(event) { 
  var answer = event.target.textContent;
  var currentQuestionObj = allQuestions[currentQ];
  var correctAnswer = currentQuestionObj["correct"];

  if (answer === correctAnswer) {  
    if (currentQuestion == allQuestions.length - 1) {    
    } else {
      currentQ++;
      displayQuestion();
    }
  } else {
    // alert to show incorrect answer and -10 seconds
    if (currentQuestion == allQuestions.length - 1) {
    } else {
      secondsLeft -= penalty;
      // alert('Wrong');
      currentQ++;
      displayQuestion();
    }
  }
  currentQuestion++;

  if (currentQuestion < questionNumbers.length) {  
  } else {
    endGame();
  }
}

// This function is for the game ending
function endGame() {
  // Hides the container with questions in it
  container.style.display = "none";

  highScoreH2.textContent = secondsLeft;
  clearInterval(timeStarter);


  // make initials input appear
//   inputDv. = "";  
  // on submit of initials, save to localstorage and render leaderboard
}

function saveScore () {
    // get existing scores
    // insert new scvore
    // save new array to ls
}

// This function grabs the users initials and inputs them to the H2 element on the page

document.getElementById("inputBtn").addEventListener("click", function() {
  var input = document.getElementById("inputDiv").value;
  document.getElementById("initials-input").textContent = input;
});

// if yes there is a new high score. save the new high score, then display it into highScoreH2 element

// if not, then display the stored high score
// if (secondsLeft <= currentQuestion) {
//     clearInterval(secondsLeft);
// }

// // Display the high scores in the #highscore element

//   // Add submit event to form
//   intlInput.addEventListener("submit", function(event) {
//     event.preventDefault();

//     var intlsText = intlsInput.value.trim();

//     // Return from function early if submitted todoText is blank
//     if (intlsText === "") {
//       return;
//     }

//     // Add new initialsText to initals array, clear the input
//     intl.push(intlsText);
//     intlsInput.value = "";

//     // Store updated initials in localStorage, re-render the list
//     storeIntl();
//     // renderIntl();
//   });
//   init();

// // for the function below will run once the page loads
// function init() {
//     // Get stored initials from localStorage
//     var storedIntls = JSON.parse(localStorage.getItem("initials"));

//     // If initials were retrieved from localStorage, update the intitials array to it
//     if (storedIntls !== null) {
//       intitials = storedIntls;
//     }

//     //  helper function that will render initials to the DOM
//     // renderIntl();
//   }

// // Get the existing high scores from localStorage
// var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// // Add the new score to the high scores array
// highScores.push(scoreObj);

// // Sort the high scores by remaining time in ascending order
// highScores.sort(function(a, b) {
//     return a.remainingTime - b.remainingTime;
// });

// Save the high scores to localStorage
// localStorage.setItem("highScores", JSON.stringify(highScores));

// add event listeners to each multiple choice answer, this is called with the textContent of the
// selected answer as an argument, this allows it to check if right or not..
// multiple1.addEventListener("click", function() {
// checkAnswer(multiple1.textContent);
//  });

// multiple2.addEventListener("click", function() {
// checkAnswer(multiple2.textContent);
//  });

// multiple3.addEventListener("click", function() {
// checkAnswer(multiple3.textContent);
//  });

//  multiple4.addEventListener("click", function() {
// checkAnswer(multiple4.textContent);
//  });

// // Load the JSON data using fetch() API
// fetch()
//   .then(response => response.json())
//   .then(data => {
//     // Parse the JSON data into a JavaScript object
//     const questions = data.questions;

//     // Define a function to generate a random integer
//     function getRandomInt(max) {
//       return Math.floor(Math.random() * Math.floor(max));
//     }

//     // Select a random question from the object
//     const randomIndex = getRandomInt(questions.length);
//     const randomQuestion = questions[randomIndex];

//     // Display the question and its possible answers to the user
//     console.log(randomQuestion.question);
//     console.log(randomQuestion.answers.join(', '));
//   })
//   .catch(error => {
//     console.error('Error loading questions:', error);
//   });

// // function for diplaying question1 and four possible answers
// function questionOne() {
//     Qh1.textContent = allQuestions.q1.question1;
// // // repeat more times
//     multiple1.textContent = allQuestions.q1.answers1[0];
//     multiple2.textContent = allQuestions.q1.answers1[1];
//     multiple3.textContent = allQuestions.q1.answers1[2];
//     multiple4.textContent = allQuestions.q1.answers1[3];
// };
// // function for diplaying question2 and four possible answers
// function questionTwo() {
//     Qh1.textContent = allQuestions.q2.question2;

//     multiple1.textContent = allQuestions.q2.answers2[0];
//     multiple2.textContent = allQuestions.q2.answers2[1];
//     multiple3.textContent = allQuestions.q2.answers2[2];
//     multiple4.textContent = allQuestions.q2.answers2[3];
// };
// // function for diplaying question3 and four possible answers
// function questionThree() {
//     Qh1.textContent = allQuestions.q3.question3;
// // // repeat more times
//     multiple1.textContent = allQuestions.q3.answers3[0];
//     multiple2.textContent = allQuestions.q3.answers3[1];
//     multiple3.textContent = allQuestions.q3.answers3[2];
//     multiple4.textContent = allQuestions.q3.answers3[3];
// };
// // function for diplaying question4 and four possible answers
// function questionFour() {
//     Qh1.textContent = allQuestions.q4.question4;

//     multiple1.textContent = allQuestions.q4.answers4[0];
//     multiple2.textContent = allQuestions.q4.answers4[1];
//     multiple3.textContent = allQuestions.q4.answers4[2];
//     multiple4.textContent = allQuestions.q4.answers4[3];
// };

// // have one for the right answers under here
// function correctAnswer() {
//     Qh1.textContent = allQuestions.q1.correct1;

//     multiple1.textContent = allQuestions.q1.correct1.answers1[0];
//     multiple2.textContent = allQuestions.q2.correct2.answers2[2];
//     multiple3.textContent = allQuestions.q4.correct3.answers3[2];
//     multiple4.textContent = allQuestions.q4.correct4.answers4[1];

// };

// this is the question for the for loop if var is obj....

// var obj = {
//     name: "Simon",
//     age: "20",
//     clothing: {
//         style: "simple",
//         hipster: false
//     }
// }

// for(var propt in obj){
//     console.log(propt + ': ' + obj[propt]);
// }

// for loop for the questions and choices??

// Object.keys(obj).forEach(function(key,index) {
//     // key: the name of the object key
//     // index: the ordinal position of the key within the object
// });

// more possiblitiy of for loop for questions..

// if (typeof allQuestions === 'object' && allQuestions !== null) {
//     Object.keys(allQuestions).forEach(key => {
//         console.log("\n" + key + ": " + allQuestions[key]);
//     });
// }

// // *** Explanation line by line ***

// // Explaining the bellow line
// // It checks if obj is neither null nor undefined, which means it's safe to get its keys.
// // Otherwise it will give you a "TypeError: Cannot convert undefined or null to object" if obj is null or undefined.
// // NOTE 1: You can use Object.hasOwnProperty() instead of Object.keys(obj).length
// // NOTE 2: No need to check if obj is an array because it will work just fine.
// // NOTE 3: No need to check if obj is a string because it will not pass the 'if typeof obj is Object' statement.
// // NOTE 4: No need to check if Obj is undefined because it will not pass the 'if type obj is Object' statement either.
// if (typeof obj === 'object' && obj !== null) {

//     // Explaining the bellow line
//     // Just like in the previous line, this returns an array with
//     // all keys in obj (because if code execution got here, it means
//     // obj has keys.)
//     // Then just invoke built-in javascript forEach() to loop
//     // over each key in returned array and calls a call back function
//     // on each array element (key), using ES6 arrow function (=>)
//     // Or you can just use a normal function ((key) { blah blah }).
//     Object.keys(obj).forEach(key => {

//         // The bellow line prints out all keys with their
//         // respective value in obj.
//         // key comes from the returned array in Object.keys(obj)
//         // obj[key] returns the value of key in obj
//         console.log("\n" + key + ": " + obj[key]);
//     });
// }

// stores remaining time to highscore h2 #highscore .highScoreH2
// function
//      handle answer clicks
//
//      if
//      answer is WRONG
//          subtract time from timer
//          make sure time is displayed correctly on page
//          flash wrong answer message (setTimeout)
//
//      update question variable to next question
//      display question on page
//
//      if
//      question is the last question
//      trigger quiz completion

// function
//      tracking time
//          subtract time
//          update the page
//
//      if
//      timer hits zero
//          trigger quiz completion

// function
//      saving high scores
//          get value of user input (name/initals)
//          validate input
//          retreive existing data from local storage
//          update the high score data
//          save updated data back to local storage
//          redirect to start screen after save

// function
//      listening for key press
//          check if the key pressed was 'Enter' for saving scores
//          OPTIONAL check if the key pressed was 'a', 'b', 'c' for answers

// event listeners
//      click start
//      click answers
//      click save score
//      keyups
// questionNum()
//    rendering a question
//          clear/remove previous question
//          getting first question
//          add question to the question container
//          make button for each answer
//          add answers to the answers container

// function
//      handle quiz completion
//          stop timer
//          hide quiz container
//          show end screen
//          show time remaining as score

// function
//      handle answer clicks
//
//      if
//      answer is WRONG
//          subtract time from timer
//          make sure time is displayed correctly on page
//          flash wrong answer message (setTimeout)
//
//      update question variable to next question
//      display question on page
//
//      if
//      question is the last question
//      trigger quiz completion

// function
//      tracking time
//          subtract time
//          update the page
//
//      if
//      timer hits zero
//          trigger quiz completion

// function
//      saving high scores
//          get value of user input (name/initals)
//          validate input
//          retreive existing data from local storage
//          update the high score data
//          save updated data back to local storage
//          redirect to start screen after save
