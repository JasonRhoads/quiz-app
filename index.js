let correctAnswers = 0;

let currentQuestion = 1;
const answers = ["","",""];

function next() {
    //get the previous question
    let prevQuestion = document.getElementById(`question${currentQuestion}`);
    answers[currentQuestion]= 'test';
    currentQuestion++;
    //hide the previous qusestion
    prevQuestion.classList.remove('active-question');
    //show the next question
    document.getElementById(`question${currentQuestion}`).classList.add('active-question');
};


function prev() {
    let prevQuestion = document.getElementById(`question${currentQuestion}`);
    answers[currentQuestion]= 'test';
    currentQuestion--;
    //hide the previous qusestion
    prevQuestion.classList.remove('active-question');
    //show the next question
    document.getElementById(`question${currentQuestion}`).classList.add('active-question');
}

function submit() {
    document.getElementById('question3').classList.remove('active-question');
    console.log('submit');
    document.appendChild("yay");
}

 //function to remove show-active class & add to clicked 
 function setNewActive(el) {
    //select all .question-containers
    let questionBodies = document.getElementsByClassName('question-container');
    //remove. show-active
    for (let questionBody of questionBodies) {
        questionBodies.classList.remove('active-question');
    }
    //add .show-active back to clicked
    document.getElementById(el.textContent.trim()).classList.add('active-question');

    let tabs = document.getElementsByClassName('tab');

    for (let tab of tabs) {
        tab.classList.remove('tab-active');
    }
    el.classList.add('tab-active');
}


//   //select tab class, and loop through
//   let questions = document.getElementsByClassName('question-container');
//   for (var question of questions) {
//       //add click listener to each tab
//       question.addEventListener('click', e => {
//           setNewActive(e.currentTarget);
//       })
//   }