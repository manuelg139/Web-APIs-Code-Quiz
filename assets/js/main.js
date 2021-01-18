

// Create HTML and CSS files for instruction page
// Create HTML for Questions panels with answers list and next button 


var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var quizEl = document.getElementById("quiz");
var instructions = document.getElementById("Instructions");



//Timer 


//Clear out form as we start
function start(){
    startBtn.remove();
    instructions.remove();
}
  
//Set value and conditions to Timer
function setTimer(){

    var secondsLeft = 120;
    var countDown = setInterval(function() {
        secondsLeft--;
        document.getElementById("timer").innerHTML = secondsLeft + " "
        +"seconds";
      
    
    
  if(secondsLeft <= 0){
    clearInterval(countDownTimer);
    alert("Time is up!");
    // document.getElementById("time").innerHTML = "Time is up!"
}
    }, 1000);
};

startBtn.addEventListener("click",function(){

    start();
    setTimer();


})