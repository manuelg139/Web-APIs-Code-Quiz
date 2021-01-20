

// Create HTML and CSS files for instruction page
//Set Up Timer fuction and clear out first form of insctructions
// Create Questions fuctions to pop with startBtn



var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var instructions = document.getElementById("Instructions");
var questionbox = document.getElementById("question-box");
var answerChoices = document.getElementById("answers");
var questionHead = document.getElementById("questions");

// was starting at one 
var questionNumber = -1;
var answer;


//  Questions



var questions = [
    {
    title: "What does Michael pretend to fire Pam over in season one?",
    choices: ["Note answering the phone", "Stealing Post-it Notes", "Wearing Glasses", "So she can go to Art School"],
    answer: "Stealing Post-it Notes",
    },

    {
    title: "Finish this quote from Dwight when he was asking Michael questions after being offered the spare room in Michael's new condo: 'Question. My grandparents left me a large number of _________.'",
    choices: ["Beet Seeds", "Chickens", "Tractors", "Armories"],
    answer: "Armories",
    },   
    
    {
    title: "On the day that he's supposed to move to Boulder, Colorado, Michael says, I can't do this. All the channels are going to be different there. I'm not going to be able to find my shows. I am not going to start ______ at level one. I don't think my credits are gonna transfer",
    choices: ["Management", "Improv", "Local Collage", "Anger Management"],
    answer: "Improv",
    },    
    
    {
    title: "What did Kevin buy for himself when he got himself for Secret Santa?",
    choices: ["A Foot Bath", "M&M's", "A New Toupee", "A Turtle",],
    answer: "A Foot Bath",
    },    

    {
    title: "What's in the thermos that Michael offers Pam during morning deliveries for the Michael Scott Paper Company?",
    choices: ["A Triple Espresso Shot", "Milk and Sugar", "Monster and ProteinShake", "Tea and 10 sugars",],
    answer: "Milk and Sugar",
    },
    
    {
    title: "Aside from Jim, who in the office has an obvious crush on Pam throughout the show??",
    choices: ["Dwight", "Andy", "Ryan", "Toby",],
    answer: "Toby",
    },    

 {
    title: "What do Shrutes stand in while getting married?",
    choices: ["Their Graves", "Blocks of Hay", "Beet Juice", "Grandmas Ashes",],
    answer: "Their Graves",
    },    

 {
    title: "What is Michael and Jan's safe word if things go too far?",
    choices: ["Chaka Khan", "Bonfire", "Sublime", "Foliage",],
    answer: "Foliage",
    },    

 {
    title: "What song do the CPR class teacher tells the office to sing?",
    choices: ["Dancing Queen", "I Will Survive", "Superstition", "Stayin Alive",],
    answer: "Stayin Alive",
    },    

 {
    title: "And lastly, what's the name of Ryan's baby?",
    choices: ["Ray J.", "Drake", "Jake", "Lil Jay",],
    answer: "Drake",
    },    

];






//Timer 


//Clear out form as we start
function start(){
    
    instructions.classList.add('d-none');
    questionbox.classList.remove('hide');
   

    setTimer();
    popQuestions();
}
  
//Set value and conditions to Timer
function setTimer(){

    var secondsLeft = 120;
    var countDown = setInterval(function() {
        secondsLeft--;
        document.getElementById("timer").innerHTML = "☞ Hurry Only " + secondsLeft + " "
        +"seconds";
      

    
  if(secondsLeft <= 0 || questionNumber === questions.length){
    clearInterval(countDown);
    timer.textContent = "☠ G A M E O V E R ☠";

}
    }, 1000);
};



// Event Listeners for Buttons
startBtn.addEventListener("click", start);



//Pop-Questions

function popQuestions() {
    questionNumber++;

    // answer is the question
    answer = questions[questionNumber].answer

    // displays questions and clears html content
    questionHead.textContent = questions[questionNumber].title;
    answerChoices.innerHTML = "";

    // variables for the choices
    var choices = questions[questionNumber].choices;

//loop choices and append as buttons
    for (var i = 0; i < choices.length; i++) {
        var nextChoice = document.createElement("button");

        // buttons contain choices
        nextChoice.textContent = choices[i]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
    }

}





// Validating the right answers and moving on to next question
answerChoices.addEventListener("click", function (event) {

    // Creating the feedback for the R/W Answers
    var feedbackEl = document.getElementsByClassName("feedback")[0]
    
     // evaluation of user's answer choices & feedback
     if (answer === event.target.textContent) {   
        feedbackEl.innerHTML = "<img src='https://github.com/manuelg139/Web-APIs-Code-Quiz/blob/main/assets/images/dwight-cursor.png'>";
    
    } else {
        feedbackEl.innerHTML = "WRONG.";
      
    }    
    popQuestions();  

});




