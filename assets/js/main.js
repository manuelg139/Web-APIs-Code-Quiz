

// Create HTML and CSS files for instruction page
//Set Up Timer fuction and clear out first form of insctructions
// Create Questions fuctions to pop with startBtn and append the choices buttons 
//Add event to correct answer and respond feednback
//create HTML elements for Highscores Page
//Add formula for calculating the scores 
// Set up local storage for highscores


var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");
var instructions = document.getElementById("Instructions");
var questionbox = document.getElementById("question-box");
var timerEl = document.getElementById("timer");
var submitbox = document.getElementById("submit-score");
var userScoreElement = document.getElementById("user-score");

var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");

var questionNumber = -1;
var answer;
var userNameInput;



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
   

    startTimer();
    popQuestions();
}
  

//Set value and conditions to Timer
function startTimer(){

    var secondsLeft = (questions.length * 20 + 1);
    var countDown = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "☞ Hurry Only " + secondsLeft + " "
        +"seconds";
      
        if(secondsLeft === 0 || questionNumber === questions.length){
        clearInterval(countDown);
        timer.textContent = "☠ G A M E O V E R ☠";
        scoreList();
          //secondsleft is runing displayScore - question == q.l is not
    }
    }, 1000);
};




//Pop-Questions

function popQuestions() {
    questionNumber++;

    // answer is the question
    answer = questions[questionNumber].answer;
    console.log(questions[questionNumber]);
    console.log("Answer is   " + questions[questionNumber].answer) 
    // displays questions and clears html content
    questionHead.textContent = questions[questionNumber].title;
    answerChoices.innerHTML = "";

    // variables for the choices
    var choices = questions[questionNumber].choices;

//loop choices and append as buttons
    for (var q = 0; q < choices.length; q++) {
        var nextChoice = document.createElement("button");

        // buttons contain choices
        nextChoice.textContent = choices[q]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-dark btn-block");
        console.log("Answer is   " + questions[questionNumber].answer)

    }

}


function totalScore(){
    userNameInput = document.getElementById("userName").value 
    console.log(userName.value)

    //create an object to store new local scores
    var newScore = {
        name: userNameInput,
        score: secondsLeft,
    };
    //Make an array and push object in it 
    // hs = the current scores on local storage and the new scores
    var highScores = JSON.parse(localStorage.getItem(highScores) || "[]");
    highScores.push(newScore)
    //stringify and put into LS
    localStorage.setItem("highScores", JSON.stringify(highScores));

}

// Validating the right answers and moving on to next question
answerChoices.addEventListener("click", function (event) {
    // Creating the feedback for the R/W Answers
    var feedbackEl = document.getElementsByClassName("feedback")[0]
    var answer = questions[questionNumber].answer;
     // evaluation of user's answer choices & feedback
     if (answer === event.target.textContent) {   
        feedbackEl.innerHTML = "You Are Correct <br><br> <img src=\"https://media3.giphy.com/media/nGzeO4uSxRUcg/giphy.gif\" height=\"150px\">";
        setTimeout(hideFb, 4000);
        showFb();   
    } else {
        feedbackEl.innerHTML = "You Are Wrong <br><br> <img src=\"https://i.pinimg.com/originals/07/99/fb/0799fb6840eb887526c61784c431e655.gif\" height=\"150px\">";
       // this.secondsLeft = secondsLeft - 20; not working
       setTimeout(hideFb,4000);
        console.log(this.secondsLeft)
        showFb();
    }    
  
    
    setTimeout(popQuestions, 4000); // matching the timer for the gif feedback
});



function scoreList(){
    questionbox.classList.add('d-none');
    submitbox.classList.remove('hide');
    userScoreElement.textContent = "Final Score is... " + secondsLeft + ".";
}


// Event Listeners for Buttons
startBtn.addEventListener("click", start);
submitBtn.addEventListener("click", function (event) {
    totalScore();

    window.location.href = './highscores.html'
});


function showFb() {
    var feedbackEl = document.getElementsByClassName("feedback")[0]
    feedbackEl.removeAttribute('style');
}
function hideFb(){
    var pElement = document.getElementsByClassName("feedback")[0]
    pElement.style.display='none'
}




