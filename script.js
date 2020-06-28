var score = 0;
var timeEl = document.querySelector(".time");
var submit = document.getElementById("submit-button");
var secondsLeft = 30;
var startButton = document.querySelector("#start-button");
var nextQuestion = document.querySelector("#answer-button");
var submitButton = document.querySelector("#submit-button");
var questionContainerEl = document.getElementById("question-container");
var questionEl= document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var an1 = document.getElementById("an1");
var an2 = document.getElementById("an2");
var an3 = document.getElementById("an3");
var an4 = document.getElementById("an4");
var scoreEl = document.getElementById("scoreCount");
var userGuess = "";
var questions =[
  {
  title: "How many programming languages exist?",
  choices: ["10", "700", "150", "50"],
  answer: "700"
  },
  {
  title: "What is the purpose of CSS?",
  choices: ["Fix html", "Color things", "Keep elements off html", "Style the page"],
  answer: "Style the page"
  },
  {
  title: "What can go inside an array?",
  choices: ["Numbers", "Strings", "Booleans", "All of the above"],
  answer: "All of the above"
  },
  {
  title: "How many parents can a child element have?",
  choices: ["1", "2", "infinite", "none"],
  answer: "1"
  },
  {
  title: "What is the purpose of JQuery?",
  choices: ["Make us suffer", "Replace Javascript", "Allow us to write less", "Nothing its obsolete"],
  answer: "Allow us to write less"
  },

  
]

//Start button is clicked and starts quiz and timer
startButton.addEventListener("click", startQuiz); 
startButton.addEventListener("click", showQuestion);
startButton.addEventListener("click", setTime); 


//quizz is started
function startQuiz() {
console.log("started")
startButton.classList.add("hide");
questionContainerEl.classList.remove("hide");
showQuestion;
 }
// Question #1
  function showQuestion(){
  var i = "0";  
questionEl.textContent = questions[i].title
 an1.textContent = questions[i].choices[0];
 an2.textContent = questions[i].choices[1];
 an3.textContent = questions[i].choices[2];
 an4.textContent = questions[i].choices[3];
 
 an2.addEventListener("click", addPoints);
 //when an answer is picked go to next question
answerButtons.addEventListener("click", setQuestion2);
//if points arent added take away time
  if(addPoints)
  {console.log("congradulations")
}else {subtractTime}
}
 
//subtract time for wrong answers
function subtractTime(){
  console.log("you have been penalized!!!");
 }
//Add points
 
 function addPoints(){
   console.log("you got 1 point")
   score++;
   alert("You have " + score + " point(s)!" );
   scoreEl.textContent = "Score = " + score;
 }
 


//Question #2
 function setQuestion2() {
  var i = "1";
 console.log("next question")
 questionEl.textContent = questions[i].title
 an1.textContent = questions[i].choices[0];
 an2.textContent = questions[i].choices[1];
 an3.textContent = questions[i].choices[2];
 an4.textContent = questions[i].choices[3]; 
 an4.addEventListener("click", addPoints);
 answerButtons.addEventListener("click", setQuestion3);
}

//Question #3
function setQuestion3() {
  var i = "2";
 console.log("next question")
 questionEl.textContent = questions[i].title
 an1.textContent = questions[i].choices[0];
 an2.textContent = questions[i].choices[1];
 an3.textContent = questions[i].choices[2];
 an4.textContent = questions[i].choices[3];
 
 an2.addEventListener("click", addPoints); 
 answerButtons.addEventListener("click", setQuestion4);
}

//Question #4
function setQuestion4() {
  var i = "3";
 console.log("next question")
 questionEl.textContent = questions[i].title
 an1.textContent = questions[i].choices[0];
 an2.textContent = questions[i].choices[1];
 an3.textContent = questions[i].choices[2];
 an4.textContent = questions[i].choices[3]; 
 
 an1.addEventListener("click", addPoints);
 answerButtons.addEventListener("click", setQuestion5);
}

//Question #5
function setQuestion5() {
  var i = "4";
 console.log("next question")
 questionEl.textContent = questions[i].title
 an1.textContent = questions[i].choices[0];
 an2.textContent = questions[i].choices[1];
 an3.textContent = questions[i].choices[2];
 an4.textContent = questions[i].choices[3]; 
 
 an3.addEventListener("click", addPoints);
 answerButtons.addEventListener("click", endQuiz);
}

//end quiz
function endQuiz(){
  questionContainerEl.classList.add("hide");
  answerButtons.classList.add("hide");
  submit.classList.remove("hide");


}
//set Highscore
function setHighScore(){
  scoreEl.textContent =left
  console.log(scoreEl.textContent);
  return left;
  }

  var highScores = [];

submit.addEventListener("click",function(){
    console.log(score.textContent);
     highScores.push(score.textContent);
     localStorage.setItem('user',JSON.stringify(highScores));
 })


//timer is started
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " Seconds left ";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        question.textContent = "GAME OVER";
        answerButtons.classList.add("hide");
        submit.classList.remove("hide");
      }
  
    }, 1000);
  }
  
