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
var intlInput = document.querySelector("#initials-input");
// defines variable for questions
var qBox = document.querySelector("#questions-box");
var inputDv = document.querySelector("#inputDiv");
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

  // on submit of initials, save to localstorage and render leaderboard
  // Will be adding local storage later
}

// This function grabs the users initials and inputs them to the H2 element on the page

document.getElementById("inputBtn").addEventListener("click", function () {
  var input = document.getElementById("inputDiv").value;
  document.getElementById("initials-input").textContent = input;
});
