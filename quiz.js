var questionEL = document.querySelector("#question");
var timerEl = document.querySelector("#timer");

questionEL.textContent = questionsArray[0].theQuestion;
var myButtonEl = document.getElementById("myButton");
var scoreEl = document.getElementById("score");
var myQ = JSON.parse(localStorage.getItem("myQuestions"));
var timeLeft = 75;
console.log(myQ);
myButtonEl.addEventListener("click", startGame);
// To start game
function startGame() {
    document.querySelector("#myButton").style = "display: none";

    var timeLapse = setInterval(function() {



        if (timeLeft === 0) {
            clearInterval(timeLapse);

            goToFinish;
        } else {
            timeLeft--;
            timerEl.textContent = "time:" + timeLeft;


        }
    }, 1000);
}



function goToFinish() {
    timerEl.textContent = "";
    var scoreCard = document.getElementById("#score");
    scoreEl.appendChild(scoreCard);
}