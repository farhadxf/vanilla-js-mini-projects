const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const endgameElement = document.getElementById('end-game-container');
const settingsButton = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [
  'apple',
  'banana',
  'orange',
  'grape',
  'strawberry',
  'melon',
  'pineapple',
  'peach',
  'pear',
  'plum',
  'kiwi',
  'lemon',
  'lime',
  'blueberry',
  'raspberry',
  'blackberry',
  'cherry',
  'apricot',
  'pomegranate',
  'coconut',
  'avocado',
  'mango',
  'watermelon',
  'cantaloupe',
  'nectarine',
  'tangerine',
  'grapefruit',
  'passionfruit',
  'dragonfruit',
  'lychee',
  'papaya',
  'persimmon',
  'cucumber',
  'tomato',
  'potato',
  'carrot',
  'broccoli',
  'cauliflower',
  'spinach',
  'lettuce',
  'kale',
  'cabbage',
  'peas',
  'beans',
  'zucchini',
  'courgette',
  'aubergine',
  'eggplant',
  'bell pepper',
  'chilli pepper',
  'sweet potato',
  'pumpkin',
  'butternut squash',
  'radish',
  'beetroot',
  'turnip',
  'parsnip',
  'brussels sprouts',
  'leek',
  'celery',
  'asparagus',
  'artichoke',
  'rhubarb',
  'swede',
  'shallot',
  'garlic',
  'onion',
  'spring onion',
  'chives',
  'bok choy',
  'watercress',
  'endive',
  'fennel',
  'rocket',
  'arugula',
  'collard greens',
  'mustard greens',
  'dandelion greens',
  'microgreens',
  'sprouts',
  'cilantro',
  'coriander',
  'parsley',
  'basil',
  'mint',
  'dill',
  'oregano',
  'rosemary',
  'sage',
  'thyme',
  'marjoram',
  'bay leaf',
  'lavender',
  'tarragon',
  'sorrel',
  'lovage',
  'fenugreek',
];

let randomWord;
let score = 0;
let time = 10;

let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDom() {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}

function updateScore() {
  score++;
  scoreElement.innerText = score;
}

function updateTime() {
  time--;
  timeElement.innerText = time + 's';
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameElement.innerHTML = `
    <h1>Times up</h1>
    <p>Your final score is ${score}</p>
    <button onclick="history.go(0)">Play Again</button>
    `;
  endgameElement.style.display = 'flex';
}

text.addEventListener('input', (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    e.target.value = '';
    addWordToDom();
    updateScore();
    if (difficulty === 'hard') time += 2;
    else if (difficulty === 'medium') time += 3;
    else time += 5;
    updateTime();
  }
});

settingsButton.addEventListener('click', () =>
  settings.classList.toggle('hide')
);
settingsForm.addEventListener('change', (e) => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});

difficultySelect.value = difficulty;
addWordToDom();
text.focus();
