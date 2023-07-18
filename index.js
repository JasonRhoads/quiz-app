const questionTotal = 3;
let correctAnswers = 0;

let currentQuestionIndex = 0;

const userAnswerList = [
    {
        question : "eCommercePlatform",
        answer : "",
    },
    {
        question : "shopifyDevNecessary",
        answer : "",
    },
    {
        question: "shopifyDevs",
        answer : "",
    }
];

let correctAnswerArray = ['shopCommerce','devNecAll','shopifyDevsAll'];


function setQuestionNumbers() {
    document.getElementById("question-number").innerText = currentQuestionIndex + 1;
}

function setQuestionTotal() {
    document.getElementById("question-total").innerText = questionTotal;
}

setQuestionNumbers();
setQuestionTotal();

function hasAnswer(currentAnswer) {
    return (document.querySelector(`input[type='radio'][name='${userAnswerList[currentAnswer].question}']:checked`)) ? true : false;
}

function next() {
    //get the previous question
    let prevQuestion = document.getElementById(`question${currentQuestionIndex + 1}`);
    if(hasAnswer(currentQuestionIndex)){
        saveAnswer(currentQuestionIndex);
        currentQuestionIndex++;
        setQuestionNumbers();
        //hide the previous qusestion
        prevQuestion.classList.remove('active-question');
        //show the next question
        document.getElementById(`question${currentQuestionIndex + 1}`).classList.add('active-question');
    } else {
        window.alert('please select an answer');
    }
};


function prev() {
    let prevQuestion = document.getElementById(`question${currentQuestionIndex + 1}`);
        currentQuestionIndex--;
        setQuestionNumbers();
        //hide the previous qusestion
        prevQuestion.classList.remove('active-question');
        //show the next question
        document.getElementById(`question${currentQuestionIndex + 1}`).classList.add('active-question');
}


function saveAnswer(currentAnswer) {
    userAnswerList[currentQuestionIndex].answer = document
        .querySelector(`input[type='radio'][name='${userAnswerList[currentAnswer].question}']:checked`).value;
}


function submit() {
    if(hasAnswer(currentQuestionIndex)){
        saveAnswer(currentQuestionIndex);
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
    document.getElementById('scorePercent').innerText = (correctAnswers / questionTotal * 100).toFixed(0);
    document.getElementById('answerMessage').innerText = (getScoreMessage());
}

function checkScore() {
    for (let i = 0; i < questionTotal; i++) {
        if(userAnswerList[i].answer === correctAnswerArray[i]) {
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
            msg = `2 out of ${questionTotal} aint bad!`;
            break;
        case 3:
            msg = "You got them ALL right! Great Job!";
            break;    
    }
    return msg;
}

function retake() {
    correctAnswers = 0;
    currentQuestionIndex = 0;
    document.getElementById('result').style.display = "none";
    setQuestionNumbers();
    document.getElementsByTagName('h2')[0].style.display = "block";
    document.getElementById(`question${currentQuestionIndex + 1}`).classList.add('active-question');
    for (let i = 0; i < questionTotal; i++) {
        let questions = document.querySelectorAll(`input[type='radio'][name='${userAnswerList[i].question}']`)
        for (let i = 0; i < questions.length; i++) {
            questions[i].checked = false;
        }
    }    
}