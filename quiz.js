var questionEL = document.querySelector("#question");
var timerEl = document.querySelector("#timer");
var questionListEL = document.querySelector("#questionList");
// keeping track of questions to display currently
var index = 0;

var myButtonEl = document.getElementById("myButton");
var scoreEl = document.getElementById("score");
var myQ = JSON.parse(localStorage.getItem("myQuestions"));
var timeLeft = 75;
// console.log(myQ);

// var optionButton;
// var text;
// console.log(questionsArray);
// console.log(JSON.stringify(questionsArray));
// To start game
// to get my questions to display on page

function displayQuestion() {
    questionEL.textContent = questionsArray[index].theQuestion;

    for (var i = 0; i < questionsArray[index].choices.length; i++) {
        // to display answers and question
        // console.log(questionListEL.children[i].children);
        questionListEL.children[i].children[0].textContent = questionsArray[index].choices[i];
    }



}





function startGame() {
    document.querySelector("#myButton").style = "display: none;";

    var timeLapse = setInterval(function() {



        if (timeLeft === 0) {
            clearInterval(timeLapse);

            goToFinished;
        } else {
            timeLeft--;
            timerEl.textContent = "Time:" + timeLeft;


        }
    }, 1000);
    document.querySelector(".the-question").style = "display: inline;";
    displayQuestion();
}
myButtonEl.addEventListener("click", startGame);
// 
questionListEL.addEventListener("click", function(event) {
    var varReply = "";
    if (event.target.textContent === questionsArray[index].correctAnswer) {
        console.log(event.target);
        console.log("correct");
        document.getElementById("reply").textContent = "Correct";
        index++;
        displayQuestion();

    } else if (event.target.textContent !== questionsArray[index].correctAnswer) {
        console.log("Wrong!");
        document.getElementById("reply").textContent = "Wrong";
        index++;
        displayQuestion();

    }




});

document.getElementById("score").textContent = timeLeft;




// function goToFinished() {
//     timerEl.textContent = "";
//     var scoreCard = document.getElementById("#score");
//     scoreEl.appendChild(scoreCard);
//     document.querySelector(".score").style = "display: none;";
// }