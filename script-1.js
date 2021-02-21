// Questions and answers derived from: https://www.guru99.com/javascript-interview-questions-answers.html
let score = 0;
let selection = '';
let questionIndex = 0;
const startBtn = document.querySelector('#btn');


const questionArr = [
    {
    ask: 'What are global variables?', 
    correct: 'They are available throughout the length of the code',
    choices: ['They are available throughout the length of the code', 
        'for, while and do-while',
        'A box that allows the user to enter input by providing a text area within the box',
        'Variables that are available throughout the length of the code']
    },
    {
    ask:'What is a prompt?',
    correct: 'A box that allows the user to enter input by providing a text area within the box',
    choices: ['Value used to represent no value or no object',
        'An operator that is used to return a string description of the type of a variable',
        'When elements are nested, if the handler of the child is clicked, the handler of parent will also work as if it were clicked',
        'A box that allows the user to enter input by providing a text area within the box']
    },
    {
    ask: "What is the keyword 'this'?", 
    correct: 'Refers to the object from where it was called',
    choices: ['When elements are nested, if the handler of the child is clicked, the handler of parent will also work as if it were clicked',
        'Refers to the object from where it was called',
        'Strict equality operator',
        'for, while and do-while']
    },
    {
    ask: 'What is the === operator?', 
    correct: 'Strict equality',
    choices: ['Variables that are available throughout the length of the code',
        'A box that allows the user to enter input by providing a text area within the box',
        'Value used to represent no value or no object',
        'Strict equality']
    },
    {
    ask: 'What is NULL?', 
    correct: 'Value used to represent no value or no object',
    choices: ['An operator that is used to return a string description of the type of a variable',
        'for, while and do-while',
        'Value used to represent no value or no object',
        'Adds an element at the beginning of an array']
    },
    {
    ask: 'What is typeOf?', 
    correct: 'An operator that is used to return a string description of the type of a variable',
    choices: ['An operator that is used to return a string description of the type of a variable', 
        'Strict equality operator',
        'A box that allows the user to enter input by providing a text area within the box',
        'for, while and do-while']
    },
    {
    ask: 'What does the unshift method do?', 
    correct: 'Adds an element at the beginning of an array',
    choices: ['When elements are nested, if the handler of the child is clicked, the handler of parent will also work as if it were clicked',
        'Adds an element at the beginning of an array',
        'for, while and do-while',
        'Variables that are available throughout the length of the code']
    },
    {
    ask: 'What is event bubbling?', 
    correct: 'When elements are nested, if the handler of the child is clicked, the handler of parent will also work as if it were clicked',
    choices: ['for, while and do-while',
        'When elements are nested, if the handler of the child is clicked, the handler of parent will also work as if it were clicked',
        'An operator that is used to return a string description of the type of a variable',
        'Refers to the object from where it was called']
    },
    {
    ask: 'What is a looping structure in JavaScript?', 
    correct: 'for',
    choices: ['Variables that are available throughout the length of the code',
        'Refers to the object from where it was called',
        'Strict equality operator',
        'for']
    },
    {
    ask: 'Which is used for comments in Javascript?',
    correct: '//',
    choices: ['for, while and do-while',
        '//', 
        'The strict equality operator',
        'Adds an element at the beginning of an array']
    }];

// Timer with view high scores button
function timerCountdown() {
    seconds = 120;
    hideStartButton();
    quickQuest();
    function stopTimer() {
        document.querySelector('#view-hs').textContent = 'View High Scores';
        // document.querySelector('#view-hs').onclick = showHS();
        document.querySelector('#timer').textContent = `Time remaining:  ${seconds}`;
        seconds--;
        if (seconds < 0) {
            clearInterval(intervalId);
            endGame();
        };
    };
    intervalId = setInterval(stopTimer, 1000);
};

// Hides title, rules and start button on click
function hideStartButton() {
    document.querySelector('#div-btn').classList.add('hideme');
};

startBtn.addEventListener('click', timerCountdown);

// Adds questions and answers as ordered list. Correct answers increase score, incorrect answers subtract 1s from timer
function quickQuest() {
    const divOL = document.querySelector('#qust');
    let options = document.querySelector('#options');
    let ol = document.createElement('ol');
    options.append(ol);
    let currentQuestion = questionArr[questionIndex];
    
    questionArr[questionIndex].choices.forEach((choice) => {
        let li = document.createElement('li');
        ol.append(li);
        li.append(choice);
        li.classList.add('answer-card');
    });

    divOL.prepend(currentQuestion.ask);

    document.querySelectorAll("li").forEach((item) => {
        item.onclick = function() {
            if (this.innerText === questionArr[questionIndex].correct) {
                score++;
            } else {
                selection.textContent = 'Incorrect';
                seconds -= 5;
            };
            questionIndex++;
            divOL.innerHTML = ""
            options.innerHTML = ""
            if (questionIndex > 9) {
                endGame();
            } else {
                quickQuest();
            }
        };
    });
};

function endGame() {
    let highScore = [];
    let initials = [];
    const subBtn = document.querySelector('#sub-btn'); 

    document.querySelector('#options').classList.add('hideme');
    const divSubmit = document.querySelector('#submit');
    const input = document.createElement('input');
    divSubmit.append(input);
    subBtn.addEventListener('click', saveInitialsHS);

    function saveInitialsHS() {
        localStorage.getItem('initials');
        localStorage.setItem('initials', initials);
        highScore = localStorage.getItem('highscore');
        
        localStorage.JSON.parse(initials);
        localStorage.JSON.stringify(initials);
        
        if (localStorage.getItem('initials') === null) {
            localStorage.setItem('initials', initials);
        } else {
            localStorage.setItem('initials', JSON.parse(initials));
            console.log(JSON.parse(initials))
            initials.push(initials);
            localStorage.setItem('initials', JSON.stringify(initials));
        };

        if (localStorage.getItem('highscore') === null || localStorage.getItem('highscores' === '')) {
            localStorage.setItem('highscore', score);
        } else {
            localStorage.setItem('highscore', JSON.parse(highScore));
            highScore.push(score);
            localStorage.setItem('highscore', JSON.stringify(highScore));
        };
    };
};

// Input initials and view highscores
// function endCondition() {
//     const divHS = document.createElement('div');
//     const tableHS = document.createElement('tb');
//     const tbHead1 = document.createElement('th');
//     const tbHead2 = document.createElement('th');
//     let td = document.createElement('td');

//     divHS.querySelector('#view-hs');
//     tableHS.querySelector('#hs-table');
//     tbHead1.querySelector('.table-head');
//     tbHead2.querySelector('.table-head');
//     td.querySelectorAll('table-data');
    
//     divHS.append(tableHS);
//     tableHS.append(tbHead1);
//     tableHS.append(tbHead2);

// // Add form for initials to the left of highScore (add table)
// };

// inputInitials(){
    // input initials
// }

// endCondition(){
    // runs the inputInitials and createHS functions
// }