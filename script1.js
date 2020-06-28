var score = 0;
var timeEl = document.querySelector(".time");

var secondsLeft = 30;
var startButton = document.querySelector("#start-button");
var nextQuestion = document.querySelector("#answer-button");
var submitButton = document.querySelector("#submit-button");
var questionContainerEl = document.getElementById("question-container");
var questionEl= document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");
var an1 = document.getElementById("an1");
var an2 = document.getElementById("an2");
var an3 = document.getElementById("an3");
var an4 = document.getElementById("an4");
var userGuess = "";
var questions =[
  {
  question: "How many programming languages exist?",
  choices: [
    {text: "10", correct: false},
    {text: "700", correct: true},
    {text: "150", correct: false},
    {text: "50", correct: false}
]
  }
]
//   {
//     question: "What is the purpose of CSS?",
//   choices: ["Fix html", "Color things", "Keep elements off html", "Style the page"],
//   answer: "Style the page"
//   },
//   {
//     question: "What can go inside an array?",
//   choices: ["Numbers", "Strings", "Booleans", "All of the above"],
//   answer: "All of the above"
//   },
//   {
//     question: "How many parents can a child element have?",
//   choices: ["1", "2", "infinite", "none"],
//   answer: "1"
//   },
//   {
//     question: "What is the purpose of JQuery?",
//   choices: ["Make us suffer", "Replace Javascript", "Allow us to write less", "Nothing its obsolete"],
//   answer: "Allow us to write less"
//   },

  
// ]

//Start button is clicked and starts quiz and timer
startButton.addEventListener("click", startQuiz); 
startButton.addEventListener("click", showQuestion); 
startButton.addEventListener("click", setTime); 


//quizz is started
function startQuiz() {
console.log("started")
startButton.classList.add("hide");
questions = 0
questionContainerEl.classList.remove("hide");
// for (i = 0; i < questions.length; i++) {
showQuestion;
}
 

//  { break; }
//   }
 
function showQuestion(questions){
  questionEl.innerText =  question.question
//   var i = "0";
//   questionEl.textContent = questions[i].question
//  an1.textContent = questions[i].choices[0];
//  an2.textContent = questions[i].choices[1];
//  an3.textContent = questions[i].choices[2];
//  an4.textContent = questions[i].choices[3];

}

 //when an answer is picked go to next question
answerButtonEl.addEventListener("click", setNextQuestion);

 function setNextQuestion() {

 console.log("next question")

}

function selectAnswer(){

}

//timer is started
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " Seconds left ";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        question.textContent = "GAME OVER";
      
      }
  
    }, 1000);
  }
  
