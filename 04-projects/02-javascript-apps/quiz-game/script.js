// SELECT DOM ELEMENTS
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');

const quizScreen = document.getElementById('quiz-screen');

const question = document.getElementById('question');
const currentQuestion = document.getElementById('current-question');
const totalQuestions = document.getElementById('total-questions');

const score = document.getElementById('score');

const answersContainer = document.getElementById('answers-container');
const progressBar = document.getElementById('progress');

const resultScreen = document.getElementById('result-screen');
const finalScore = document.getElementById('final-score');
const maxScore = document.getElementById('max-score');
const resultMsg = document.getElementById('result-msg');

const restartBtn = document.getElementById('restart-btn');

// Quiz questions
const quizQuestions = [
    {
        question: 'What does CSE stand for?',
        answers: [
            { text: 'Computer Science Engineering', correct: true },
            { text: 'Computer Software Environment', correct: false },
            { text: 'Computer System Education', correct: false },
            { text: 'Central Science Engineering', correct: false },
        ],
    },
    {
        question: 'Which language is known as the language of the web?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'HTML', correct: true },
            { text: 'Java', correct: false },
            { text: 'C++', correct: false },
        ],
    },
    {
        question: 'Which part of a computer is called the brain of the computer?',
        answers: [
            { text: 'Monitor', correct: false },
            { text: 'Keyboard', correct: false },
            { text: 'CPU', correct: true },
            { text: 'Mouse', correct: false },
        ],
    },
    {
        question: 'Which of the following is a programming language?',
        answers: [
            { text: 'Python', correct: true },
            { text: 'Windows', correct: false },
            { text: 'Chrome', correct: false },
            { text: 'Google', correct: false },
        ],
    },
    {
        question: 'What is the full form of HTML?',
        answers: [
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'High Text Machine Language', correct: false },
            { text: 'Hyper Transfer Machine Language', correct: false },
            { text: 'Home Tool Markup Language', correct: false },
        ],
    },
    {
        question: 'Which device is used to store data permanently?',
        answers: [
            { text: 'RAM', correct: false },
            { text: 'Hard Disk', correct: true },
            { text: 'CPU', correct: false },
            { text: 'Monitor', correct: false },
        ],
    },
    {
        question: 'Which company developed the Android operating system?',
        answers: [
            { text: 'Microsoft', correct: false },
            { text: 'Google', correct: true },
            { text: 'Apple', correct: false },
            { text: 'IBM', correct: false },
        ],
    },
    {
        question: 'Which symbol is commonly used for comments in JavaScript?',
        answers: [
            { text: '//', correct: true },
            { text: '<>', correct: false },
            { text: '##', correct: false },
            { text: '**', correct: false },
        ],
    },
    {
        question: 'What is the full form of AI?',
        answers: [
            { text: 'Artificial Intelligence', correct: true },
            { text: 'Automatic Internet', correct: false },
            { text: 'Advanced Information', correct: false },
            { text: 'Artificial Integration', correct: false },
        ],
    },
    {
        question: 'Which software is used to browse the internet?',
        answers: [
            { text: 'Browser', correct: true },
            { text: 'Compiler', correct: false },
            { text: 'Database', correct: false },
            { text: 'Operating System', correct: false },
        ],
    },
];

// QUIZ STATE VARIABLES
let currentQuestionIndex = 0;
let userScore = 0;

function startQuiz() {
    // RESET VARIABLES
    currentQuestionIndex = 0;
    userScore = 0;

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');

    score.textContent = userScore;

    totalQuestions.textContent = quizQuestions.length;
    showQuestion();
}

function showQuestion() {
    let currentQuiz = quizQuestions[currentQuestionIndex];
    question.textContent = currentQuiz.question;
    currentQuestion.textContent = currentQuestionIndex + 1;
    answersContainer.innerHTML = '';

    currentQuiz.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');

        button.addEventListener('click', () => {
            checkAnswer(answer);
        });

        answersContainer.appendChild(button);
    });
}

function checkAnswer(answer) {
    if (answer.correct) {
        userScore++;

        score.textContent = userScore;
    }

    nextQuestion();

    const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    progressBar.style.width = `${progressPercentage}%`;
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.remove('active');

    resultScreen.classList.add('active');

    finalScore.textContent = userScore;

    maxScore.textContent = quizQuestions.length;

    if (userScore >= 7) {
        resultMsg.textContent = 'Excellent!';
    } else if (userScore >= 4) {
        resultMsg.textContent = 'Good Job!';
    } else {
        resultMsg.textContent = 'Keep Practicing!';
    }
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}

restartBtn.addEventListener('click', () => {
    resultScreen.classList.remove('active');

    startScreen.classList.add('active');
});

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
