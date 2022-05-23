// Get all required elements
var startBtn = document.querySelector('.start_btn button');
var infoBox = document.querySelector('.info_box');
var exitBtn = infoBox.querySelector('.buttons .quit');
var continueBtn = infoBox.querySelector('.buttons .restart');
var quizBox = document.querySelector('.quiz_box');

// var scoreResult = document.getElementsByClassName('scoreResult');
// var latestScore = scoreResult.val().stringfy() + saveScore.val().stringify


//If Start Quiz Button is clicked, 
startBtn.onclick = ()=>{
    infoBox.classList.add("activeInfo"); //show the info box
}

//If Exit Button is clicked, 
exitBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); // hide info box
}

//If Continue Button is clicked,
continueBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); 
    quizBox.classList.add("activeQuiz"); // show the quiz box
}



//If continue => Function Play Game() + Loop 
// while Play Game, if input value was incorrect score--, 
// while Play Game, if input value was incorrect time_sec--, 