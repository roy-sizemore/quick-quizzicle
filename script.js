// Questions and answers derived from: https://www.guru99.com/javascript-interview-questions-answers.html
let score = 0;
let highScore = [];
let initials = ''
let corrAns = '';
const startBtn = document.querySelector('#btn');


const questionArr = [
    {
    ask: 'What are global variables?',
    correct: 'They are available throughout the length of the code',
    wrong: ['They are available throughout the length of the code', 'for, while and do-while',
        'A box that allows the user to enter input by providing a text area within the box',
        'Variables that are available throughout the length of the code']
    },
    {
    ask: 'What is a prompt?',
    correct: 'A box that allows the user to enter input by providing a text area within the box',
    wrong: ['A box that allows the user to enter input by providing a text area within the box', 'Value used to represent no value or no object',
        'When elements are nested, if the handler of the child is clicked, the handler of parent will also work as if it were clicked',
        'A box that allows the user to enter input by providing a text area within the box']
    },
    {
    ask: "What is the keyword 'this'?",
    correct: 'Refers to the object from where it was called',
    wrong: ['Refers to the object from where it was called', 'When elements are nested, if the handler of the child is clicked, the handler of parent will also work as if it were clicked',
        'Strict equality operator',
        'for, while and do-while']
    },
    {
    ask: 'What is the === operator?',
    correct: 'Strict equality',
    wrong: ['Strict equality', 'Variables that are available throughout the length of the code',
        'A box that allows the user to enter input by providing a text area within the box',
        'Value used to represent no value or no object']
    },
    {
    ask: 'What is NULL?',
    correct: 'Value used to represent no value or no object',
    wrong: ['Value used to represent no value or no object', 'Variables that are available throughout the length of the code',
        'A box that allows the user to enter input by providing a text area within the box',
        'Strict equality operator']
    },
    {
    ask: 'What is typeOf?',
    correct: 'An operator that is used to return a string description of the type of a variable',
    wrong: ['An operator that is used to return a string description of the type of a variable', 'Strict equality operator',
        'A box that allows the user to enter input by providing a text area within the box',
        'for, while and do-while']
    },
    {
    ask: 'What is the unshift method?',
    correct: 'Adds an element at the beginning of an array',
    wrong: ['Adds an element at the beginning of an array', 'When elements are nested, if the handler of the child is clicked, the handler of parent will also work as if it were clicked',
        'for, while and do-while',
        'Variables that are available throughout the length of the code']
    },
    {
    ask: 'What is event bubbling?',
    correct: 'When elements are nested, if the handler of the child is clicked, the handler of parent will also work as if it were clicked',
    wrong: ['When elements are nested, if the handler of the child is clicked, the handler of parent will also work as if it were clicked', 'for, while and do-while',
        'An operator that is used to return a string description of the type of a variable',
        'Refers to the object from where it was called']
    },
    {
    ask: 'What is a looping structure in JavaScript?',
    correct: 'for',
    wrong: ['for', 'Variables that are available throughout the length of the code',
        'Refers to the object from where it was called',
        'Strict equality operator']
    },
    {
    ask: 'Which is used for comments in Javascript?',
    correct: '//',
    wrong: ['//', 'for, while and do-while',
        'Strict equality operator',
        'Adds an element at the beginning of an array']
    }];

// Timer with view high scores button
function timerCountdown() {
    seconds = 3;
    hideStartButton();
    function stopTimer() {
        document.querySelector('#view-hs').textContent = 'View High Scores';
        // document.querySelector('#view-hs').onclick = showHS();
        document.querySelector('#timer').textContent = `Time remaining:  ${seconds}`;
        seconds--;
        if (seconds < 0) {
            clearInterval(intervalId);
            // endCondition();
        };
    };
    intervalId = setInterval(stopTimer, 1000);
    // quickQuest(questIndex);
};

// Hides title, rules and start button on click
function hideStartButton() {
    document.querySelector('#div-btn').classList.add('hideme');
};

startBtn.addEventListener('click', timerCountdown);

// Adds questions and answers as ordered list. Correct answers increase score, incorrect answers subtract 1s from timer
function quickQuest() {
    let li = document.querySelectorAll('li');

    li.forEach((item) => {
        item.onclick = function() {
            if (this.innerText === questionArr[i]['correct']) {
                corrAns.textContent = 'Correct!';
                // li.forEach(item => item.onclick = '');
                i++;
                score++;
                quickQuest();
            } else {
                corrAns.textContent = 'Incorrect';
                i++;
                seconds -= 5;
                quickQuest();
            };
        };
    });
};

quickQuest();

function questCheck() {};

// Input initials and view highscores
// function endCondition() {
//     document.querySelector('#qust').style.display('none');
//     document.innerHTML(???);
//     document.querySelector(???);
//     initials = 
// Add form for initials to the left of highScore (add table)
// }