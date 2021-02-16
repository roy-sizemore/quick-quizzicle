// quickQuest()
// endCondition()

// Questions and answers derived from: https://www.guru99.com/javascript-interview-questions-answers.html
let score = 0;
let highScore = [];
let initials = ''
const startBtn = document.querySelector("#btn");
const question0 = {
    ask = 'What are global variables?',
    answer0 = 'Variables that are available throughout the length of the code',
    answer1 = '',
    answer2 = '',
    answer3 = ''
};
const question1 = {
    ask = 'What is a prompt?',
    answer0 = 'A box that allows the user to enter input by providing a text area within the box',
    answer1 = '',
    answer2 = '',
    answer3 = ''
};
const question2 = {
    ask = "What is the keyword 'this'?",
    answer0 = 'Refers to the object from where it was called',
    answer1 = '',
    answer2 = '',
    answer3 = ''
};
const question3 = {
    ask = 'What is the === operator?',
    answer0 = 'Strict equality operator',
    answer1 = '',
    answer2 = '',
    answer3 = ''
};
const question4 = {
    ask = 'What is NULL?',
    answer0 = 'Value used to represent no value or no object',
    answer1 = '',
    answer2 = '',
    answer3 = ''
};
const question5 = {
    ask = 'What is typeOf?',
    answer0 = 'An operator that is used to return a string description of the type of a variable',
    answer1 = '',
    answer2 = '',
    answer3 = ''
};
const question6 = {
    ask = 'What is the unshift method?',
    answer0 = 'Adds an element at the beginning of an array',
    answer1 = '',
    answer2 = '',
    answer3 = ''
};
const question7 = {
    ask = 'What is event bubbling?',
    answer0 = 'When elements are nested, if the handler of the child is clicked, the handler of parent will also work as if it were clicked',
    answer1 = '',
    answer2 = '',
    answer3 = ''
};
const question8 = {
    ask = 'What is a looping structure in JavaScript?',
    answer0 = 'for',
    answer1 = '',
    answer2 = '',
    answer3 = ''
};
const question9 = {
    ask = 'Which is used for comments in Javascript?',
    answer0 = '//',
    answer1 = '',
    answer2 = '',
    answer3 = ''
};

/*
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
*/

function timerCountdown() {
    seconds = 3;
    hideStartButton();
    function stopTimer() {
        document.querySelector('#view-hs').textContent = 'View High Scores';
        // document.querySelector("#view-hs").onclick = showHS();
        document.querySelector('#timer').textContent = `Time remaining:  ${seconds}`;
        seconds--;
        if (seconds < 0) {
            clearInterval(intervalId);
            // endCondition();
            alert("Time, gentlemen");
        };
    };
    intervalId = setInterval(stopTimer, 1000);
};

function hideStartButton() {
    document.querySelector('#div-btn').classList.add('hideme');
};

startBtn.addEventListener("click", timerCountdown);

function quickQuest() {
    i = 0;

    document.querySelector('.qust').textContent = question0;
        
    
    // ansArr[i] w/wrong answers. Clickable buttons that reset the page and displays the next question

    // i++;
    
    // if (i > 10) {
    //     endCondition();
    // } else {
    //     quickQuest();
    // };
};

quickQuest();

// function endCondition() {
//     document.querySelector('#qust').style.display('none');
//     document.innerHTML(???);
//     document.querySelector(???);
//     initials = 
// Add form for initials to the left of highScore (add table)
// }