

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


//  Questions

var questions = [
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
]





//Timer 


//Clear out form as we start
function start(){
    
    instructions.classList.add('d-none');
    questionbox.classList.remove('hide');

}
  
//Set value and conditions to Timer
function setTimer(){

    var secondsLeft = 120;
    var countDown = setInterval(function() {
        secondsLeft--;
        document.getElementById("timer").innerHTML = "Hurry Only " + secondsLeft + " "
        +"seconds";
      

    
  if(secondsLeft <= 0){
    clearInterval(countDown);
    alert("Your Time Is Up!");
}
    }, 1000);
};





startBtn.addEventListener("click",function(){

    start();
    setTimer();


})