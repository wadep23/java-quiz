var timerEl = document.getElementById('timer');
var questionForm = document.getElementById('questionBody');
var questions = document.getElementById('question');
var answerBox = document.getElementById('answerContainer');
var answers = document.getElementById('answerOptions');
var isRightOrWrong = document.getElementById('answer');
var rightOrWrong = document.getElementById('answerRight');
var start = document.getElementById('startQuiz');


// Create intro hero element
quizIntro();

function quizIntro(){
  // need to call a reset function
  var heading = document.createElement('h3');
  heading.setAttribute('id', 'quizIntro');
  heading.textContent = "Welcome to the 'Quizinator 3000'!"
  
  var intstructions = document.createElement('p');
  intstructions.setAttribute('id', 'quizInstructions');
  intstructions.textContent = 'You have 75 seconds to complete this quiz. Each correct answer will add ten seconds to your timer. Each wrong answer will deduct 10 seconds. Good luck and may the force be with you!'
  
  var startQuiz = document.createElement('button');
  startQuiz.setAttribute('id', 'startQuiz');
  startQuiz.setAttribute('class', 'btn btn-primary');
  // startQuiz.setAttribute('onClick', timer);
  startQuiz.textContent = 'Lets Go!';
  
  questionForm.appendChild(heading);
  questionForm.appendChild(intstructions);
  questionForm.appendChild(startQuiz);
  
  startQuiz.addEventListener('click', timer, clearForm);
}

// quiz function round 1
function round1(){
  var heading = document.createElement('h4');
  heading.setAttribute('id', 'quiz');
  heading.textContent = "Question 1: When was the first computer virus created?"
  
  var answers = document.createElement('ul');
  answers.setAttribute('id', 'answers');
  
  var answer1 = document.createElement('button');
  answer1.setAttribute('id', 'ans1');
  answer1.setAttribute('class', 'btn btn-secondary');
  answer1.textContent = '1996'
  
  var answer2 = document.createElement('button');
  answer2.setAttribute('id', 'ans2');
  answer2.setAttribute('class', 'btn btn-secondary');
  answer2.textContent = '1988'
  
  var answer3 = document.createElement('button');
  answer3.setAttribute('id', 'ans3');
  answer3.setAttribute('class', 'btn btn-secondary');
  answer3.textContent = '2007'
  
  var answer4 = document.createElement('button');
  answer4.setAttribute('id', 'ans4');
  answer4.setAttribute('class', 'btn btn-secondary');
  answer4.textContent = '1983'
  
  questionForm.appendChild(heading);
  questionForm.appendChild(answers);
  questionForm.appendChild(answer1);
  questionForm.appendChild(answer2);
  questionForm.appendChild(answer3);
  questionForm.appendChild(answer4);
  
  console.log("round 1!")

  

  answer1.addEventListener('click', function(){
    console.log("wrong");
  });
  answer2.addEventListener('click', function(){
    console.log("incorrect");
  });
  answer3.addEventListener('click', function(){
    console.log('Negative Ghost Rider');
  });
  answer4.addEventListener('click', function(){
    console.log('Bingo Bango!');
    correct();
    clearForm();
    round2();
  });
}
// starts round 2
function round2(){

  console.log("round 2!")
  
  var heading = document.createElement('h4');
  heading.setAttribute('id', 'quiz');
  heading.textContent = " Question 2: What would you use to select an element by ID from the DOM?"

  var answers = document.createElement('ul');
  answers.setAttribute('id', 'answers');
  
  var answer1 = document.createElement('button');
  answer1.setAttribute('id', 'ans1');
  answer1.setAttribute('class', 'btn btn-secondary');
  answer1.textContent = '.getElementById'
  
  var answer2 = document.createElement('button');
  answer2.setAttribute('id', 'ans2');
  answer2.setAttribute('class', 'btn btn-secondary');
  answer2.textContent = 'elementSelector'
  
  var answer3 = document.createElement('button');
  answer3.setAttribute('id', 'ans3');
  answer3.setAttribute('class', 'btn btn-secondary');
  answer3.textContent = 'onClick'
  
  var answer4 = document.createElement('button');
  answer4.setAttribute('id', 'ans4');
  answer4.setAttribute('class', 'btn btn-secondary');
  answer4.textContent = 'if else statement'
  
  questionForm.appendChild(heading);
  questionForm.appendChild(answers);
  answers.appendChild(answer1);
  answers.appendChild(answer2);
  answers.appendChild(answer3);
  answers.appendChild(answer4);
  
  
  
  
  
  answer1.addEventListener('click', function(){
    console.log("Si Senor");
    correct();
    clearForm();
    round3();
  });
  answer2.addEventListener('click', function(){
    console.log("incorrect");
  });
  answer3.addEventListener('click', function(){
    console.log('Negative Ghost Rider');
  });
  answer4.addEventListener('click', function(){
    console.log('Nope');

  });
}
// Starts round 3
function round3(){
  console.log("round 3!")
  
  var heading = document.createElement('h4');
  heading.setAttribute('id', 'quiz');
  heading.textContent = " Question 3: how many functions can exist in an application"

  var answers = document.createElement('ul');
  answers.setAttribute('id', 'answers');
  
  var answer1 = document.createElement('button');
  answer1.setAttribute('id', 'ans1');
  answer1.setAttribute('class', 'btn btn-secondary');
  answer1.textContent = '25'
  
  var answer2 = document.createElement('button');
  answer2.setAttribute('id', 'ans2');
  answer2.setAttribute('class', 'btn btn-secondary');
  answer2.textContent = '15'
  
  var answer3 = document.createElement('button');
  answer3.setAttribute('id', 'ans3');
  answer3.setAttribute('class', 'btn btn-secondary');
  answer3.textContent = 'unlimited'
  
  var answer4 = document.createElement('button');
  answer4.setAttribute('id', 'ans4');
  answer4.setAttribute('class', 'btn btn-secondary');
  answer4.textContent = 'ask Alex'
  
  questionForm.appendChild(heading);
  questionForm.appendChild(answers);
  answers.appendChild(answer1);
  answers.appendChild(answer2);
  answers.appendChild(answer3);
  answers.appendChild(answer4);
  
  console.log("round 1")
  
  
  // Create event listeners for answers
  answer1.addEventListener('click', function(){
    console.log("wrong");
  });
  answer2.addEventListener('click', function(){
    console.log("incorrect");
  });
  answer3.addEventListener('click', function(){
    console.log('Yes!');
    correct();
    clearForm();
    round4();
  });
  answer4.addEventListener('click', function(){
    console.log('I mean you could ask Alex but he might be disappointed in you');

  });
}
function timer() {
  var timeLeft = 75;
  
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = "Time: " + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = 'Time: 0';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      
      
    }
  }, 1000);
  var questionForm = document.getElementById("quizIntro");
  questionForm.remove();
  var questionForm = document.getElementById("quizInstructions");
  questionForm.remove();
  var questionForm = document.getElementById("startQuiz");
  questionForm.remove();
  console.log("success");
  
  round1();
}function correct(){
  timerEl += 10;
}

function incorrect(){
  timerEl -= 10;
}
function clearForm() {
  questionForm.innerHTML = "";
}

function stopTime() {
  if (test) { console.log("stopTime");}
  timerEl = 0;
  clearInterval(timer);
}
function endOfGame() {
  console.log("endOfGame");
  stopTime();
  clearForm();

  timerTab.setAttribute("style", "visibility: hidden;");

  var heading = document.createElement("p");
  heading.setAttribute("id", "main-heading");
  heading.textContent = "GAME OVER - I hope you have enjoyed this";

  // creates elements with the instructions for the game
  var instructions = document.createElement("p");
  instructions.setAttribute("id", "instructions");
  instructions.textContent = " Your score is " + score; 

  // creates button to start the game
  var playAgain = document.createElement("button");
  playAgain.setAttribute("id", "playAgain");
  playAgain.setAttribute("class", "btn btn-secondary");
  playAgain.textContent = "Play again";

  // creates input for user to add initials
  var par = document.createElement("p");

  var initialsLabel = document.createElement("label");
  initialsLabel.setAttribute("for","userInitials");
  initialsLabel.textContent = "Enter Initials: ";

  var initialsInput = document.createElement("input");
  initialsInput.setAttribute("id","userInitials");
  initialsInput.setAttribute("name","userInitials");
  initialsInput.setAttribute("minlength","3");
  initialsInput.setAttribute("maxlength","3");
  initialsInput.setAttribute("size","3");


  mainEl.appendChild(heading);
  mainEl.appendChild(instructions);
  mainEl.appendChild(initialsLabel);
  mainEl.appendChild(initialsInput);
  mainEl.appendChild(par);
  mainEl.appendChild(playAgain);

  playAgain.addEventListener("click", round1);

  initialsInput.addEventListener("input", function() {
    initialsInput.value = initialsInput.value.toUpperCase();
    if ( initialsInput.value.length === 3 ) { 

      //create object for this score
      var thisScore = [ { type: quizType, name: initialsInput.value, score: score } ]; 

      //get highscores from memory
      var storedScores = JSON.parse(localStorage.getItem("highScores")); 
      if (test) { console.log("storedScore",storedScores); }

      if (storedScores !== null) { 
        storedScores.push(thisScore[0]); 
      } else {
        storedScores = thisScore;
      }

      localStorage.setItem("highScores", JSON.stringify(storedScores));
      highScores();
    }
  });
}
function highScores() {
  stopTime();
  clearDetails();

  timerTab.setAttribute("style", "visibility: hidden;");

  //get scores from storage
  let storedScores = JSON.parse(localStorage.getItem("highScores")); 

  // draw heading
  let heading = document.createElement("h2");
  heading.setAttribute("id", "main-heading");
  heading.textContent = "Top 5 High Score Hall of Fame";

  mainEl.appendChild(heading);

  // Render a new li for each score
  // TODO check for this error 
  if ( storedScores !== null ) {
    // sort scores
    storedScores.sort((a,b) => (a.score < b.score) ? 1: -1);

    // sets the number of scores to display to 5 or the number of games played. Which ever is less
    let numScores2Display = 5;
    if ( storedScores.length < 5 ) { 
      numScores2Display = storedScores.length; 
    }

    for (var i = 0; i < numScores2Display; i++) {
      var s = storedScores[i];

      var p = document.createElement("p");
      p.textContent = s.name + " " + s.score + " ( " + s.type + " )";
      mainEl.appendChild(p);
    }
  } else {
    var p = document.createElement("p");
    p.textContent =  "Your Initials Here!"
    mainEl.appendChild(p);
  }


  // creates button to start the game
  let playAgain = document.createElement("button");
  playAgain.setAttribute("id", "playAgain");
  playAgain.setAttribute("class", "btn btn-secondary");
  playAgain.textContent = "Play!";

  mainEl.appendChild(playAgain);

  playAgain.addEventListener("click", init);
}

highscoreDiv.addEventListener("click", highScores);