// define variable for tracking tim
var timeH2 = document.querySelector("#timer");
// variable for keeping highscore
var highScoreH2 = document.querySelector("#highscore");
// variable to start the game
var startBtn = document.querySelector("#start-time");
// variable for questions multiple choice
var  multiple1= document.querySelector(".ans1");
var  multiple2= document.querySelector(".ans2");
var  multiple3= document.querySelector(".ans3");
var  multiple4= document.querySelector(".ans4");
// variable to keep initials with highscore
var intials = document.querySelector("#initials");
// defines variable for questions
var qBox = document.querySelector("#questions-box");
var holdInterval = 0;
// this variable stores the penalty time for wrong answer
var penalty = 10;
// define all questions and answers asked BCS can have mutiple things here
var Qh1 = document.querySelector("h1");

var allQuestions = {
    q1 :{ question1:"How many eyelids do dogs have?",
          answers1:["3", "5", "2", "1"],
          correct1:"3",
        },
    
    q2 :{ question2:"What sense are puppies born without?",
          answers2:["eyesight", "taste", "hearing", "smell"],
          correct2:"hearing",
         },
    
    q3 :{ question3:"What is the most popular breed of dog in the USA?",
          answers3:["Poodle", "German Shepard", "Labrador", "Golden Retriever"],
          correct3:"Labrador",
        },
    
    q3 :{ question4:"How many teeth do adult dogs have?",
          answers4:["36", "42", "54", "28"],
          correct4:"42",
      },

};



//  random questions function I think.....


// function getRandomItems(allQuestions) {
//     let usedIndexes = []; //keeps track of used index
//     let randomIitems = [];

//     for (let i = 0; i < allQuestions.length; i++) {
//         let randomIndex;

//         do {
//             randomIndex = Math.floor(Math.random() * allQuestions.length); //generates a random index
//         } while (usedIndexes.includes(randomIndex)); // makes sure the index has not been used yet
//         usedIndexes.push(randomIndex); //add index to the usedIndexes
//         return allQuestions[randomIndex];
//         // randomIitems.push(quizQ[randomIndex]);
//     }
//     return randomIitems;
// }
// console.log(allQuestions);



// hids the container
qBox.style.display = "none";

var secondsLeft = 60;
// this function sets the  the time viarable
// function that starts the game/timer?
function startTime() {
    startBtn.addEventListener("click", function(){
    questionOne();
    startBtn.style.display = "none";
        var timeStarter = setInterval(function(){    
        secondsLeft--;
        timeH2.textContent = secondsLeft + " seconds left";
        if(secondsLeft => 0) {
          clearInterval(timeStarter);  
          clearInterval(startBtn)
        }},1000)
        
})
};
startTime();
   
function questionOne() {
    Qh1.textContent = allQuestions.q1.question1;
// // repeat more times
    multiple1.textContent = allQuestions.q1.answers1[0];
    multiple2.textContent = allQuestions.q1.answers1[1];
    multiple3.textContent = allQuestions.q1.answers1[2];
    multiple4.textContent = allQuestions.q1.answers1[3];

//     // Qh1.textContent = allQuestions.q2.question2;

//     multiple1.textContent = allQuestions.q2.answers2[0];
//     multiple2.textContent = allQuestions.q2.answers2[1];
//     multiple3.textContent = allQuestions.q2.answers2[2];
//     multiple4.textContent = allQuestions.q2.answers2[3];

    // Qh1.textContent = allQuestions.q3.question3;

    // multiple1.textContent = allQuestions.q3.answers3[0];
    // multiple2.textContent = allQuestions.q3.answers3[1];
    // multiple3.textContent = allQuestions.q3.answers3[2];
    // multiple4.textContent = allQuestions.q3.answers3[3];

    // Qh1.textContent = allQuestions.q4.question4;

    // multiple1.textContent = allQuestions.q4.answers4[0];
    // multiple2.textContent = allQuestions.q4.answers4[1];
    // multiple3.textContent = allQuestions.q4.answers4[2];
    // multiple4.textContent = allQuestions.q4.answers4[3];
    

};

// have one for the right answers under here
    // multiple1.textContent = allQuestions.q1.correct1;
    // multiple2.textContent = allQuestions.q2.correct2;
    // multiple3.textContent = allQuestions.q4.correct3;
    // multiple4.textContent = allQuestions.q4.correct4;




// })
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
// 