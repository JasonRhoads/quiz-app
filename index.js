const qTotal = 3;
let correctAnswers = 0;

let currentQuestion = 1;

const answerList = {
    1 : {
        question : "eCommercePlatform",
        answer : "",
    },
    2 : {
        question : "shopifyDevNecessary",
        answer : "",
    },
    3 : {
        question: "shopifyDevs",
        answer : "",
    },
};

let answers = ['shopCommerce','devNecAll','shopifyDevsAll'];


function setQuestionNumbers() {
    document.getElementById("qNum").innerText = currentQuestion;
}

function setQuestionTotal() {
    document.getElementById("qTotal").innerText = qTotal;
}

setQuestionNumbers();
setQuestionTotal();

function hasAnswer(currentAnswer) {
    return (document.querySelector(`input[type='radio'][name='${answerList[currentAnswer].question}']:checked`)) ? true : false;
}

function next() {
    //get the previous question
    let prevQuestion = document.getElementById(`question${currentQuestion}`);
    if(hasAnswer(currentQuestion)){
        saveAnswer(currentQuestion);
        currentQuestion++;
        setQuestionNumbers();
        //hide the previous qusestion
        prevQuestion.classList.remove('active-question');
        //show the next question
        document.getElementById(`question${currentQuestion}`).classList.add('active-question');
    } else {
        window.alert('please select an answer');
    }
};


function prev() {
    let prevQuestion = document.getElementById(`question${currentQuestion}`);
    if(hasAnswer(currentQuestion)){
        saveAnswer(currentQuestion);
        currentQuestion--;
        setQuestionNumbers();
        //hide the previous qusestion
        prevQuestion.classList.remove('active-question');
        //show the next question
        document.getElementById(`question${currentQuestion}`).classList.add('active-question');
    } else {
        window.alert('please select an answer');
    }
}


function saveAnswer(currentAnswer) {
    answerList[currentQuestion].answer = document
        .querySelector(`input[type='radio'][name='${answerList[currentAnswer].question}']:checked`).value;
}


function submit() {
    if(hasAnswer(currentQuestion)){
        saveAnswer(currentQuestion);
        document.getElementById('question3').classList.remove('active-question');
        document.getElementsByTagName('h2')[0].style.display = "none";
        showScorePage();
    } else {
        window.alert('please select an answer');
    }   
}


function showScorePage() {
    checkScore();
    document.getElementById('result').style.display = "block";
    document.getElementById('scorePercent').innerText = (correctAnswers / qTotal * 100).toFixed(0);
    document.getElementById('answerMessage').innerText = (getScoreMessage());
}

function checkScore() {
    for (let i = 1; i <= qTotal; i++) {
        if(answerList[i].answer === answers[i - 1]) {
            correctAnswers++;
        }
    }
}

function getScoreMessage() {
    let msg = "";
    switch(correctAnswers){
        case 0:
            msg = "Dang! You did not get any right.";
            break;
        case 1:
            msg = "Nice Try! You got 1 right";
            break;
        case 2:
            msg = `2 out of ${qTotal} aint bad!`;
            break;
        case 3:
            msg = "You got them ALL right! Great Job!";
            break;    
    }
    return msg;
}