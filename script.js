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
    choices: ['Variables that are available throughout the length of the code',
        'A box that allows the user to enter input by providing a text area within the box',
        'Value used to represent no value or no object',
        'Strict equality operator']
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
        document.querySelector('#timer').textContent = `Time remaining:  ${seconds}`;
        seconds--;
        if (seconds < 0 || questionIndex > 9) {
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

// Adds questions and answers as ordered list. Correct answers increase score, incorrect answers subtract 5s from timer
function quickQuest() {
    const divOL = document.querySelector('#qust');
    let options = document.querySelector('#options');
    let ol = document.createElement('ol');
    options.append(ol);
    let currentQuestion = questionArr[questionIndex];
    
    currentQuestion.choices.forEach((choice) => {
        let li = document.createElement('li');
        ol.append(li);
        li.append(choice);
        li.classList.add('answer-card');
    });

    divOL.prepend(currentQuestion.ask);

    document.querySelectorAll('li').forEach((item) => {
        item.onclick = function() {
            if (this.innerText === questionArr[questionIndex].correct) {
                score++;
            } else {
                selection.textContent = 'Incorrect';
                seconds -= 5;
            };

            questionIndex++;
            divOL.innerHTML = '';
            options.innerHTML = '';

            if (questionIndex < 10) {
                quickQuest();
            };
        };
    });
};

/* End condition - when the time is up or the questions are exhausted, the score is posted on the screen, 
   the user is prompted to enter their initials and the user's initials and score are stored in localStorage. */
function endGame() {
    document.querySelector('#timer').textContent = `Time's up!`;
    document.querySelector('#qust').textContent = 'Game Over! You scored ' + score + ' out of 10.';
    options.innerHTML = "<form><input type='text' id='inits'><button type='submit'>Enter your initials</button></form>";
    options.addEventListener('submit', addNewScore);
    document.querySelector('#qust').append(initDiv);
};

let viewHS = document.querySelector('#view-hs');
viewHS.addEventListener('click', showScores);

function addNewScore(event){
    event.preventDefault();

    let champInits = document.querySelector('#inits').value;
    let finalScore = {};
    finalScore[champInits] = score;
    let stringScore = JSON.stringify(finalScore);

    if (!localStorage.getItem('highscores')){
        localStorage.setItem('highscores', stringScore);
        let scoreArr = [];
        scoreArr.push(finalScore);
    } else {
        let highScores = (localStorage.getItem('highscores'));
        let stringAdd = highScores + ', ' + stringScore;
        localStorage.setItem('highscores', stringAdd);
    };

    options.innerHTML = '';
};

// To view high scores, click "View High Scores"
function showScores(){
    let highScores = (localStorage.getItem('highscores'));
    let ul = document.createElement('ul');
    highScores = highScores.split(',');

    for (i = 0; i < highScores.length; i++) {
        let stat = JSON.parse(highScores[i]);
        let li = document.createElement('li');
        li.textContent = Object.keys(stat) + ': ' + Object.values(stat);
        ul.append(li);
    };

    viewHS.append(ul);
    viewHS.removeEventListener('click', showScores);
};

