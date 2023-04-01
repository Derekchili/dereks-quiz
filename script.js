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
var questions = [
    {
    ask:"How many eyelids do dogs have?",
    mulitple:["3", "5","2", "1",],
    answer:"3"
    },
    {
    ask:"What sense are puppies born without?",
    multiple:["eyesight", "taste", "hearing", "smell"],
    answer:"hearing"},
    {
    ask:"What is the most popular breed of dog in the USA?",
    multiple:["Poodle", "German Shepard", "Labrador", "Golden Retriever"],
    answer:"Labrador"
    },
    {
    ask:"How many teeth do adult dogs have?",
    multiple:["36", "42", "54", "28"],
    answer:"42"
    },
];
var randomQuestion = questions[Math.floor(Math.random()*questions.length)];
console.log(randomQuestion);
var secondsLeft = 60;
// this variable holds the timmer
var holdInterval = 0;
// this variable stores the penalty time for wrong answer
var penalty = 10;
// define all questions and answers asked BCS can have mutiple things here

// function that starts the game/timer?
function startGame(){

}
//      start quiz
//          hide start button
//          show the quiz container
//          display first question
//          start timer
//          display countdown on screen
// I'll need to append the child or element in html
// function not sure if this will work that will start the questions
    function questions(){
        for (var i = 0; i < questions.length; i++) {
            var userQuestion = questions[questionIndex].ask;
            var userChoice = questions[questionsIndex].multiple;
            questionsDiv.textContent = userQuestion;
            console.log(questions);
        }
    }
//      rendering a question
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