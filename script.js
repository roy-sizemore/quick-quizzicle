// quickQuest()
// timerCountdown()
// endCondition()
// score variable
// highScore array
// initials variable (four character limit?)

// Questions and answers derived from: https://www.guru99.com/javascript-interview-questions-answers.html
let score = 0;
let highScore = [];
let initials = ''
const startBtn = document.querySelector("#btn");
const questArr = ['What are global variables?',
    'What is a prompt?',
    "What is the keyword 'this'?",
    'What is the === operator?',
    'What is NULL?',
    'What is typeOf?',
    'What is the unshift method?',
    'What is event bubbling?',
    'What are all the looping structures in JavaScript?',
    'Which symbol is used for comments in Javascript?'];
const AnsArr = ['Variables that are available throughout the length of the code',
    'A box that allows the user to enter input by providing a text area within the box.',
    "Refers to the object from where it was called.",
    'Strict equality operator',
    'Value used to represent no value or no object.',
    'An operator that is used to return a string description of the type of a variable.',
    'Adds an element at the beginning of an array',
    'When elements are nested, if the handler of the child is clicked, the handler of parent will also work as if it were clicked.',
    'for, while and do-while',
    '//'];

function timerCountdown() {
    seconds = 3;
    hideStartButton();
    function stopTimer() {
        document.querySelector('#timer').textContent = `Time remaining:  ${seconds}`;
        seconds--;
        if (seconds < 0) {
            clearInterval(intervalId);
            // endCondition();
            alert("Time");
        };
    };
    intervalId = setInterval(stopTimer, 1000);
};

function hideStartButton() {
    document.querySelector('#btn').classList.add('hideme');
};

startBtn.addEventListener("click", timerCountdown);

function quickQuest() {
    i = 0;

    document.querySelector('.question').textContent(questArr[i]);
    
    // ansArr[i] w/wrong answers. Clickable buttons that reset the page and displays the next question

    i++;
    
    if (i > 10) {
        endCondition();
    } else {
        quickQuest();
    };
};

// function endCondition() {
//     document.querySelector('#qust').style.display('none');
//     document.innerHTML(???);
//     document.querySelector(???);
//     initials = 

// }