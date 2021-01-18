

// Create HTML and CSS files for instruction page
//Set Up Timer fuction and clear out first form of insctructions
// Create Questions fuctions to pop with startBtn



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
        document.getElementById("timer").innerHTML = "Hurry Only " + secondsLeft + " "
        +"seconds left!";
      

    
  if(secondsLeft <= 0){
    clearInterval(countDown);
    alert("Your Time Is Up!");
}
    }, 1000);
};





//Pop-Questions




startBtn.addEventListener("click",function(){

    start();
    setTimer();

})