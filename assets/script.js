// 1. Get all required elements
var startBtn = document.querySelector('.start_btn button');
var infoBox = document.querySelector('.info_box');
var exitBtn = infoBox.querySelector('.buttons .quit');
var continueBtn = infoBox.querySelector('.buttons .restart');
var quizBox = document.querySelector('.quiz_box');
var option_list = document.querySelector(".option_list");
var timeCount = quizBox.querySelector(".timer .time_sec")

// var scoreResult = document.getElementsByClassName('scoreResult');
// var latestScore = scoreResult.val().stringfy() + saveScore.val().stringify


//2a. If Start Quiz Button is clicked, 
startBtn.onclick = ()=>{
    infoBox.classList.add("activeInfo"); //show the info box
}

//2b. If Exit Button is clicked, 
exitBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); // hide info box
}

//2c. If Continue Button is clicked,
continueBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); 
    quizBox.classList.add("activeQuiz"); // show the quiz box
    showQuestions(0)
    queCounter(1)
    startTimer()
}

var que_count = 0;
var que_numb = 1;
var counter;


var next_btn = quizBox.querySelector(".next_button")

//3b. If Next Button is clicked
next_btn.onclick = ()=>{
    if (que_count < questions.length){ //show questions
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb)
    } else{
        console.log("Questions completed");
    }
     
}

// 3a. Get Questions, Options from array 
function showQuestions(index){
    var que_text = document.querySelector(".que_text");
    var que_tag = "<span>" + questions[index].numb + ". " + questions[index].question + "</span>";
    var option_tag = '<div class= "option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class= "option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class= "option">'+ questions[index].options[2] +'<span></span></div>'
                    + '<div class= "option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    var option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}

function optionSelected(answer){
    var userAns = answer.textContent;
    var correctAns = questions[que_count].answer;
    if(userAns === correctAns){
        console.log("Answer is Correct");
    } else {
        console.log("Answer is Wrong")
    }
}

function startTimer(m,s){
    // counter = setInterval(timer, 1000);
    var presentTime = timeCount.innerHTML = 05 + ":" + 00;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1]--));

    if (s==59){m=m-1}
    if(m<0){
        return
    }

    timeCount.innerHTML = m + ":" + s;
    console.log(m)
    setTimeout(startTimer, 1000)
}

function checkSecond(sec){
    if (sec < 10 && sec >=0) {sec = "0" + sec}; // add zero in from of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec
}


function queCounter(index){
    var bottom_ques_counter = quizBox.querySelector(".total_que");
var totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
bottom_ques_counter.innerHTML = totalQuesCountTag;
}

//If continue => Function Play Game() + Loop 
// while Play Game, if input value was incorrect score--, 
// while Play Game, if input value was incorrect time_sec--, 