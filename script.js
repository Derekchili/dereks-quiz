// define variable for tracking tim
var timeH2 = document.querySelector("#timer");
// variable for keeping highscore
var highScoreH2 = document.querySelector("#highscore");
// variable to start the game
var startBtn = document.querySelector("#start-time");
// variable for questions multiple choice
var  multipleUl= document.querySelector("#MultipleChoice");
// variable to keep initials with highscore
var intials = document.querySelector("#initials");
// defines variable for questions
var qBox = document.querySelector("#questions-box");

var questions1 = [{
    ask:"How many eyelids do dogs have?",
    mulitple:["3", "5","2", "1",],
    answer:"3" }]

var question2 = [{
    ask:"What sense are puppies born without?",
    multiple:["eyesight", "taste", "hearing", "smell"],
    answer:"hearing"}]

var question3 = [{
    ask:"What is the most popular breed of dog in the USA?",
    multiple:["Poodle", "German Shepard", "Labrador", "Golden Retriever"],
    answer:"Labrador"}]

var question4 = [{
    ask:"How many teeth do adult dogs have?",
    multiple:["36", "42", "54", "28"],
    answer:"42"}];

var quizQ = ["questions1", "question2", "question3", "question4"];
var randomQ = getRandomItems(quizQ);

function getRandomItems(quizQ) {
    let usedIndexes = []; //keeps track of used index
    let randomIitems = [];

    for (let i = 0; i < quizQ.length; i++) {
        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * quizQ.length); //generates a random index
        } while (usedIndexes.includes(randomIndex)); // makes sure the index has not been used yet
        usedIndexes.push(randomIndex); //add index to the usedIndexes
        randomIitems.push(quizQ[randomIndex]);
    }
    return randomIitems;
}
console.log(randomQ);
//  random questions function
// var questionIndex = 0;

//     function quiz() {
//         for (var i = 0; userChoice > userQuestion; i++) {
//                 var userQuestion = questions[questionIndex].ask;
//                 var userChoice = questions[questionIndex].multiple;
//         }   
//             console.log(userQuestion);
//         }
// quiz()
// hids the container
qBox.style.display = "none";

var secondsLeft = 60;
// this function sets the  the time viarable
function startTime() {
    var timeStarter = setInterval(function(){    secondsLeft--;
        timeH2.textContent = secondsLeft;
        if(secondsLeft === 0) {
          clearInterval(timeStarter);  
        }},1000)
}
startTime();


var holdInterval = 0;
// this variable stores the penalty time for wrong answer
var penalty = 10;
// define all questions and answers asked BCS can have mutiple things here

// function that starts the game/timer?

//      start quiz
//          hide start button
//          show the quiz container
//          display first question
//          start timer
//          display countdown on screen
// I'll need to append the child or element in html
// function not sure if this will work that will start the questions
// var questionIndex = 0;
//     function questionNum() {
//         for (var i = 0; userChoice > userQuestion; i++) {
//                 var userQuestion = questions[questionIndex].ask;
//                 var userChoice = questions[questionIndex].multiple;
//         }   
//             console.log(userQuestion);
//         }
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

// function
//      listening for key press
//          check if the key pressed was 'Enter' for saving scores
//          OPTIONAL check if the key pressed was 'a', 'b', 'c' for answers

// event listeners
//      click start
//      click answers
//      click save score
//      keyups