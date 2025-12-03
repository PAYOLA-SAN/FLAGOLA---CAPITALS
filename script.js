/*******************************************
 * COUNTRY + CAPITAL DATA
 *******************************************/
const DATA = [
  { country: "France", capital: "Paris", flag: "flags/france.png" },
  { country: "Germany", capital: "Berlin", flag: "flags/germany.png" },
  { country: "Italy", capital: "Rome", flag: "flags/italy.png" },
  { country: "Spain", capital: "Madrid", flag: "flags/spain.png" },
  { country: "Japan", capital: "Tokyo", flag: "flags/japan.png" },
  { country: "Brazil", capital: "Brasília", flag: "flags/brazil.png" },
  { country: "Canada", capital: "Ottawa", flag: "flags/canada.png" },
  { country: "Australia", capital: "Canberra", flag: "flags/australia.png" },
  { country: "Mexico", capital: "Mexico City", flag: "flags/mexico.png" },
  { country: "India", capital: "New Delhi", flag: "flags/india.png" }
];

/*******************************************
 * ELEMENTS
 *******************************************/
const titleScreen = document.getElementById("title-screen");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");

const roundButtons = document.querySelectorAll(".round-btn");
const startButton = document.getElementById("start-button");

const flagImg = document.getElementById("flag-img");
const capitalQuestion = document.getElementById("capital-question");
const questionCounter = document.getElementById("question-counter");
const answersContainer = document.getElementById("answers-container");
const nextBtn = document.getElementById("next-btn");

const finalScore = document.getElementById("final-score");
const scoreMessage = document.getElementById("score-message");
const reviewList = document.getElementById("review-list");

const quitBtn = document.getElementById("quit-btn");
const restartBtn = document.getElementById("restart-btn");

/*******************************************
 * STATE
 *******************************************/
let selectedRounds = "10";
let order = [];
let current = 0;
let correct = 0;
let wrong = [];

/*******************************************
 * TITLE → MAIN MENU
 *******************************************/
function showMainMenu() {
  titleScreen.style.display = "none";
  startScreen.classList.remove("hidden");
}

document.addEventListener("keydown", showMainMenu);
titleScreen.addEventListener("click", showMainMenu);

/*******************************************
 * ROUND SELECTION
 *******************************************/
roundButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    roundButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedRounds = btn.dataset.rounds;
  });
});

document.querySelector('.round-btn[data-rounds="10"]').classList.add("active");

/*******************************************
 * START QUIZ
 *******************************************/
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  const total = selectedRounds === "ALL"
    ? DATA.length
    : Math.min(DATA.length, parseInt(selectedRounds));

  order = shuffle([...DATA]).slice(0, total);
  current = 0;
  correct = 0;
  wrong = [];

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

/*******************************************
 * SHOW QUESTION
 *******************************************/
function showQuestion() {
  const q = order[current];

  flagImg.src = q.flag;
  capitalQuestion.textContent = `What is the capital of ${q.country}?`;
  questionCounter.textContent = `Question ${current + 1} / ${order.length}`;

  answersContainer.innerHTML = "";
  nextBtn.classList.add("hidden");

  const isLastQuestion = current === order.length - 1;
  nextBtn.textContent = isLastQuestion ? "FINISH" : "NEXT";

  const wrongOptions = shuffle(DATA.filter(x => x.capital !== q.capital))
    .slice(0, 3)
    .map(x => x.capital);

  const options = shuffle([q.capital, ...wrongOptions]);

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt;
    btn.onclick = () => handleAnswer(opt, q);
    answersContainer.appendChild(btn);
  });
}

/*******************************************
 * ANSWER HANDLER
 *******************************************/
function handleAnswer(choice, q) {
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach(b => {
    b.disabled = true;
    if (b.textContent === q.capital) b.style.background = "green";
    else if (b.textContent === choice) b.style.background = "red";
  });

  if (choice === q.capital) correct++;
  else wrong.push({ country: q.country, correct: q.capital, chosen: choice });

  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  current++;
  if (current >= order.length) endQuiz();
  else showQuestion();
};

/*******************************************
 * END QUIZ
 *******************************************/
function endQuiz() {
  quizScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");

  finalScore.textContent = `${correct} / ${order.length}`;

  if (correct === order.length) {
    scoreMessage.textContent = "Perfect!";
  } else if (correct / order.length >= 0.8) {
    scoreMessage.textContent = "Great work!";
  } else if (correct / order.length >= 0.4) {
    scoreMessage.textContent = "Not bad!";
  } else {
    scoreMessage.textContent = "Try harder!";
  }

  reviewList.innerHTML = "";
  wrong.forEach(item => {
    const p = document.createElement("p");
    p.textContent = `${item.country} → Correct: ${item.correct}, You chose: ${item.chosen}`;
    reviewList.appendChild(p);
  });
}

/*******************************************
 * RESTART
 *******************************************/
restartBtn.onclick = () => {
  endScreen.classList.add("hidden");
  resetToMenu();
};

quitBtn.onclick = () => {
  quizScreen.classList.add("hidden");
  resetToMenu();
};

function resetToMenu() {
  startScreen.classList.remove("hidden");
  order = [];
  current = 0;
  correct = 0;
  wrong = [];
  questionCounter.textContent = "";
  capitalQuestion.textContent = "";
  answersContainer.innerHTML = "";
  nextBtn.classList.add("hidden");
}

/*******************************************
 * UTIL
 *******************************************/
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
