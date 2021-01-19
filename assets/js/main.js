

// Create HTML and CSS files for instruction page
//Set Up Timer fuction and clear out first form of insctructions
// Create Questions fuctions to pop with startBtn



var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var instructions = document.getElementById("Instructions");
var questionbox = document.getElementById("question-box");
var answerChoices = document.getElementById("choices");
var questionText = document.getElementById("questions");
var answerBtns = document.getElementById("answerchoice");

// was starting at one 
var questionNumber = -1;


//  Questions

var questions = [
    {
    q: "What is A?",
    c: ["B", "T", "A", "C"],
    a: "A",
    },

    {
    q: "What is B",
    c: ["B", "T", "A", "C"],
    a: "B",
    },   
    
    {
    q: "",
    c: "",
    a: "",
    },    
    
    {
    q: "",
    c: "",
    a: "",
    },    

    {
    q: "",
    c: "",
    a: "",
    },
    
    {
    q: "",
    c: "",
    a: "",
    },    
];





//Timer 


//Clear out form as we start
function start(){
    
    instructions.classList.add('d-none');
    questionbox.classList.remove('hide');
   


}
  
//Set value and conditions to Timer
function setTimer(){

    var secondsLeft = 10;
    var countDown = setInterval(function() {
        secondsLeft--;
        document.getElementById("timer").innerHTML = "Hurry Only " + secondsLeft + " "
        +"seconds";
      

    
  if(secondsLeft <= 0 || questionNumber === questions.length){
    clearInterval(countDown);
    timer.textContent = "Game Over";

}
    }, 1000);
};




//Pop-Questions

function popQuestions() {
    questionNumber++;

    // answer is the question
    var answer = questions[questionNumber].answerBtn;

    // displays questions and clears html content
    questionText.textContent = questions[questionNumber].q;
    answerChoices.innerHTML = "";

    // variables for the choices
    var choices = questions[questionNumber].c;

//loop choices as buttons
    for (var q = 0; q < choices.length; q++) {
        var nextChoice = document.createElement("button");
 
        nextChoice.textContent = choices[q]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
    }

}

answerChoices.addEventListener("click", function (event) {
    var feedbackEl = document.getElementsByClassName("feedback")[0]
    
    if (answer === event.target.textContent) {   
        feedbackEl.innerHTML = "YES!";
        showFeedback();   
        
    } else {
        pElement.innerHTML = "WRONG.";
        secondsLeft = secondsLeft - 20;
        showFeedback();
    }    })


// Event Listeners for Buttons

startBtn.addEventListener("click",function(){

    start();
    setTimer();

    popQuestions();
})

//NOTES IM STRUGGLING TO DEFINE ANSWER 