const quizData = [
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Berlin', correct: false },
      { text: 'Madrid', correct: false },
      { text: 'Paris', correct: true },
      { text: 'Rome', correct: false },
    ],
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: [
      { text: 'Venus', correct: false },
      { text: 'Mars', correct: true },
      { text: 'Jupiter', correct: false },
      { text: 'Saturn', correct: false },
    ],
  },
  {
    question: 'What is the largest mammal in the world?',
    answers: [
      { text: 'African Elephant', correct: false },
      { text: 'Blue Whale', correct: true },
      { text: 'Giraffe', correct: false },
      { text: 'Hippopotamus', correct: false },
    ],
  },

  {
    question: 'Which planet in our solar system is known as the "Red Planet"?',
    answers: [
      { text: 'Venus', correct: false },
      { text: 'Jupiter', correct: false },
      { text: 'Mars', correct: true },
      { text: 'Saturn', correct: false },
    ],
  },
  {
    question: 'What is the name of the galaxy that contains our solar system?',
    answers: [
      { text: 'Andromeda', correct: false },
      { text: 'Milky Way', correct: true },
      { text: 'Triangulum', correct: false },
      { text: 'Sombrero', correct: false },
    ],
  },
  {
    question: 'Who was the first human to walk on the moon?',
    answers: [
      { text: 'Buzz Aldrin', correct: false },
      { text: 'Yuri Gagarin', correct: false },
      { text: 'Neil Armstrong', correct: true },
      { text: 'John Glenn', correct: false },
    ],
  },
  {
    question: 'What is the largest planet in our solar system?',
    answers: [
      { text: 'Earth', correct: false },
      { text: 'Saturn', correct: false },
      { text: 'Neptune', correct: false },
      { text: 'Jupiter', correct: true },
    ],
  },
  {
    question:
      'What is the name of the force that keeps planets in orbit around the sun?',
    answers: [
      { text: 'Centrifugal force', correct: false },
      { text: 'Gravity', correct: true },
      { text: 'Magnetic force', correct: false },
      { text: 'Nuclear force', correct: false },
    ],
  },
  {
    question: 'Which space agency launched the Hubble Space Telescope?',
    answers: [
      { text: 'NASA', correct: true },
      { text: 'ESA', correct: false },
      { text: 'Roscosmos', correct: false },
      { text: 'ISRO', correct: false },
    ],
  },
  {
    question:
      'What is the name of the nearest star to Earth, excluding the Sun?',
    answers: [
      { text: 'Betelgeuse', correct: false },
      { text: 'Sirius', correct: false },
      { text: 'Proxima Centauri', correct: true },
      { text: 'Alpha Centauri A', correct: false },
    ],
  },
  {
    question:
      'What is the term for a group of stars that forms a recognizable pattern?',
    answers: [
      { text: 'Galaxy', correct: false },
      { text: 'Nebula', correct: false },
      { text: 'Solar System', correct: false },
      { text: 'Constellation', correct: true },
    ],
  },
  {
    question: 'Which planet is known for its beautiful ring system?',
    answers: [
      { text: 'Jupiter', correct: false },
      { text: 'Saturn', correct: true },
      { text: 'Uranus', correct: false },
      { text: 'Neptune', correct: false },
    ],
  },
  {
    question:
      "What is the name of the boundary where the Sun's solar wind meets interstellar space?",
    answers: [
      { text: 'Oort Cloud', correct: false },
      { text: 'Kuiper Belt', correct: false },
      { text: 'Heliopause', correct: true },
      { text: 'Asteroid Belt', correct: false },
    ],
  },
  {
    question: "What percentage of the Earth's surface is covered by water?",
    answers: [
      { text: '50%', correct: false },
      { text: '61%', correct: false },
      { text: '71%', correct: true },
      { text: '81%', correct: false },
    ],
  },
  {
    question: 'At what temperature does water boil at sea level?',
    answers: [
      { text: '90°C (194°F)', correct: false },
      { text: '100°C (212°F)', correct: true },
      { text: '110°C (230°F)', correct: false },
      { text: '120°C (248°F)', correct: false },
    ],
  },
];

const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = quizData[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButton.style.display = 'block';
}

function showScore() {
  resetState();
  quizContainer.classList.add('hide');
  resultContainer.classList.remove('hide');
  scoreElement.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < quizData.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

restartButton.addEventListener('click', () => {
  quizContainer.classList.remove('hide');
  resultContainer.classList.add('hide');
  startQuiz();
});

startQuiz();
