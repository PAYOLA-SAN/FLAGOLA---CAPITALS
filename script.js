/*******************************************
 * COUNTRY + CAPITAL DATA
 *******************************************/
function flagUrl(code) {
  return `https://flagcdn.com/w320/${code}.png`;
}

const DATA = [
  { country: "Afghanistan", capital: "Kabul", flag: flagUrl("af") },
  { country: "Albania", capital: "Tirana", flag: flagUrl("al") },
  { country: "Algeria", capital: "Algiers", flag: flagUrl("dz") },
  { country: "Andorra", capital: "Andorra la Vella", flag: flagUrl("ad") },
  { country: "Angola", capital: "Luanda", flag: flagUrl("ao") },
  { country: "Antigua and Barbuda", capital: "St. John's", flag: flagUrl("ag") },
  { country: "Argentina", capital: "Buenos Aires", flag: flagUrl("ar") },
  { country: "Armenia", capital: "Yerevan", flag: flagUrl("am") },
  { country: "Australia", capital: "Canberra", flag: flagUrl("au") },
  { country: "Austria", capital: "Vienna", flag: flagUrl("at") },
  { country: "Azerbaijan", capital: "Baku", flag: flagUrl("az") },
  { country: "Bahamas", capital: "Nassau", flag: flagUrl("bs") },
  { country: "Bahrain", capital: "Manama", flag: flagUrl("bh") },
  { country: "Bangladesh", capital: "Dhaka", flag: flagUrl("bd") },
  { country: "Barbados", capital: "Bridgetown", flag: flagUrl("bb") },
  { country: "Belarus", capital: "Minsk", flag: flagUrl("by") },
  { country: "Belgium", capital: "Brussels", flag: flagUrl("be") },
  { country: "Belize", capital: "Belmopan", flag: flagUrl("bz") },
  { country: "Benin", capital: "Porto-Novo", flag: flagUrl("bj") },
  { country: "Bhutan", capital: "Thimphu", flag: flagUrl("bt") },
  { country: "Bolivia", capital: "Sucre", flag: flagUrl("bo") },
  { country: "Bosnia and Herzegovina", capital: "Sarajevo", flag: flagUrl("ba") },
  { country: "Botswana", capital: "Gaborone", flag: flagUrl("bw") },
  { country: "Brazil", capital: "Brasília", flag: flagUrl("br") },
  { country: "Brunei", capital: "Bandar Seri Begawan", flag: flagUrl("bn") },
  { country: "Bulgaria", capital: "Sofia", flag: flagUrl("bg") },
  { country: "Burkina Faso", capital: "Ouagadougou", flag: flagUrl("bf") },
  { country: "Burundi", capital: "Gitega", flag: flagUrl("bi") },
  { country: "Cabo Verde", capital: "Praia", flag: flagUrl("cv") },
  { country: "Cambodia", capital: "Phnom Penh", flag: flagUrl("kh") },
  { country: "Cameroon", capital: "Yaoundé", flag: flagUrl("cm") },
  { country: "Canada", capital: "Ottawa", flag: flagUrl("ca") },
  { country: "Central African Republic", capital: "Bangui", flag: flagUrl("cf") },
  { country: "Chad", capital: "N'Djamena", flag: flagUrl("td") },
  { country: "Chile", capital: "Santiago", flag: flagUrl("cl") },
  { country: "China", capital: "Beijing", flag: flagUrl("cn") },
  { country: "Colombia", capital: "Bogotá", flag: flagUrl("co") },
  { country: "Comoros", capital: "Moroni", flag: flagUrl("km") },
  { country: "Congo (Democratic Republic of the)", capital: "Kinshasa", flag: flagUrl("cd") },
  { country: "Congo (Republic of the)", capital: "Brazzaville", flag: flagUrl("cg") },
  { country: "Costa Rica", capital: "San José", flag: flagUrl("cr") },
  { country: "Côte d'Ivoire", capital: "Yamoussoukro", flag: flagUrl("ci") },
  { country: "Croatia", capital: "Zagreb", flag: flagUrl("hr") },
  { country: "Cuba", capital: "Havana", flag: flagUrl("cu") },
  { country: "Cyprus", capital: "Nicosia", flag: flagUrl("cy") },
  { country: "Czechia", capital: "Prague", flag: flagUrl("cz") },
  { country: "Denmark", capital: "Copenhagen", flag: flagUrl("dk") },
  { country: "Djibouti", capital: "Djibouti", flag: flagUrl("dj") },
  { country: "Dominica", capital: "Roseau", flag: flagUrl("dm") },
  { country: "Dominican Republic", capital: "Santo Domingo", flag: flagUrl("do") },
  { country: "Ecuador", capital: "Quito", flag: flagUrl("ec") },
  { country: "Egypt", capital: "Cairo", flag: flagUrl("eg") },
  { country: "El Salvador", capital: "San Salvador", flag: flagUrl("sv") },
  { country: "Equatorial Guinea", capital: "Malabo", flag: flagUrl("gq") },
  { country: "Eritrea", capital: "Asmara", flag: flagUrl("er") },
  { country: "Estonia", capital: "Tallinn", flag: flagUrl("ee") },
  { country: "Eswatini", capital: "Mbabane", flag: flagUrl("sz") },
  { country: "Ethiopia", capital: "Addis Ababa", flag: flagUrl("et") },
  { country: "Fiji", capital: "Suva", flag: flagUrl("fj") },
  { country: "Finland", capital: "Helsinki", flag: flagUrl("fi") },
  { country: "France", capital: "Paris", flag: flagUrl("fr") },
  { country: "Gabon", capital: "Libreville", flag: flagUrl("ga") },
  { country: "Gambia", capital: "Banjul", flag: flagUrl("gm") },
  { country: "Georgia", capital: "Tbilisi", flag: flagUrl("ge") },
  { country: "Germany", capital: "Berlin", flag: flagUrl("de") },
  { country: "Ghana", capital: "Accra", flag: flagUrl("gh") },
  { country: "Greece", capital: "Athens", flag: flagUrl("gr") },
  { country: "Grenada", capital: "St. George's", flag: flagUrl("gd") },
  { country: "Guatemala", capital: "Guatemala City", flag: flagUrl("gt") },
  { country: "Guinea", capital: "Conakry", flag: flagUrl("gn") },
  { country: "Guinea-Bissau", capital: "Bissau", flag: flagUrl("gw") },
  { country: "Guyana", capital: "Georgetown", flag: flagUrl("gy") },
  { country: "Haiti", capital: "Port-au-Prince", flag: flagUrl("ht") },
  { country: "Honduras", capital: "Tegucigalpa", flag: flagUrl("hn") },
  { country: "Hungary", capital: "Budapest", flag: flagUrl("hu") },
  { country: "Iceland", capital: "Reykjavík", flag: flagUrl("is") },
  { country: "India", capital: "New Delhi", flag: flagUrl("in") },
  { country: "Indonesia", capital: "Jakarta", flag: flagUrl("id") },
  { country: "Iran", capital: "Tehran", flag: flagUrl("ir") },
  { country: "Iraq", capital: "Baghdad", flag: flagUrl("iq") },
  { country: "Ireland", capital: "Dublin", flag: flagUrl("ie") },
  { country: "Israel", capital: "Jerusalem", flag: flagUrl("il") },
  { country: "Italy", capital: "Rome", flag: flagUrl("it") },
  { country: "Jamaica", capital: "Kingston", flag: flagUrl("jm") },
  { country: "Japan", capital: "Tokyo", flag: flagUrl("jp") },
  { country: "Jordan", capital: "Amman", flag: flagUrl("jo") },
  { country: "Kazakhstan", capital: "Astana", flag: flagUrl("kz") },
  { country: "Kenya", capital: "Nairobi", flag: flagUrl("ke") },
  { country: "Kiribati", capital: "Tarawa", flag: flagUrl("ki") },
  { country: "Kosovo", capital: "Pristina", flag: flagUrl("xk") },
  { country: "Kuwait", capital: "Kuwait City", flag: flagUrl("kw") },
  { country: "Kyrgyzstan", capital: "Bishkek", flag: flagUrl("kg") },
  { country: "Laos", capital: "Vientiane", flag: flagUrl("la") },
  { country: "Latvia", capital: "Riga", flag: flagUrl("lv") },
  { country: "Lebanon", capital: "Beirut", flag: flagUrl("lb") },
  { country: "Lesotho", capital: "Maseru", flag: flagUrl("ls") },
  { country: "Liberia", capital: "Monrovia", flag: flagUrl("lr") },
  { country: "Libya", capital: "Tripoli", flag: flagUrl("ly") },
  { country: "Liechtenstein", capital: "Vaduz", flag: flagUrl("li") },
  { country: "Lithuania", capital: "Vilnius", flag: flagUrl("lt") },
  { country: "Luxembourg", capital: "Luxembourg City", flag: flagUrl("lu") },
  { country: "Madagascar", capital: "Antananarivo", flag: flagUrl("mg") },
  { country: "Malawi", capital: "Lilongwe", flag: flagUrl("mw") },
  { country: "Malaysia", capital: "Kuala Lumpur", flag: flagUrl("my") },
  { country: "Maldives", capital: "Malé", flag: flagUrl("mv") },
  { country: "Mali", capital: "Bamako", flag: flagUrl("ml") },
  { country: "Malta", capital: "Valletta", flag: flagUrl("mt") },
  { country: "Marshall Islands", capital: "Majuro", flag: flagUrl("mh") },
  { country: "Mauritania", capital: "Nouakchott", flag: flagUrl("mr") },
  { country: "Mauritius", capital: "Port Louis", flag: flagUrl("mu") },
  { country: "Mexico", capital: "Mexico City", flag: flagUrl("mx") },
  { country: "Micronesia", capital: "Palikir", flag: flagUrl("fm") },
  { country: "Moldova", capital: "Chishinau", flag: flagUrl("md") },
  { country: "Monaco", capital: "Monaco", flag: flagUrl("mc") },
  { country: "Mongolia", capital: "Ulaanbaatar", flag: flagUrl("mn") },
  { country: "Montenegro", capital: "Podgorica", flag: flagUrl("me") },
  { country: "Morocco", capital: "Rabat", flag: flagUrl("ma") },
  { country: "Mozambique", capital: "Maputo", flag: flagUrl("mz") },
  { country: "Myanmar", capital: "Naypyidaw", flag: flagUrl("mm") },
  { country: "Namibia", capital: "Windhoek", flag: flagUrl("na") },
  { country: "Nauru", capital: "Yaren District", flag: flagUrl("nr") },
  { country: "Nepal", capital: "Kathmandu", flag: flagUrl("np") },
  { country: "Netherlands", capital: "Amsterdam", flag: flagUrl("nl") },
  { country: "New Zealand", capital: "Wellington", flag: flagUrl("nz") },
  { country: "Nicaragua", capital: "Managua", flag: flagUrl("ni") },
  { country: "Niger", capital: "Niamey", flag: flagUrl("ne") },
  { country: "Nigeria", capital: "Abuja", flag: flagUrl("ng") },
  { country: "North Korea", capital: "Pyongyang", flag: flagUrl("kp") },
  { country: "North Macedonia", capital: "Skopje", flag: flagUrl("mk") },
  { country: "Norway", capital: "Oslo", flag: flagUrl("no") },
  { country: "Oman", capital: "Muscat", flag: flagUrl("om") },
  { country: "Pakistan", capital: "Islamabad", flag: flagUrl("pk") },
  { country: "Palau", capital: "Ngerulmud", flag: flagUrl("pw") },
  { country: "Palestine", capital: "Ramallah", flag: flagUrl("ps") },
  { country: "Panama", capital: "Panama City", flag: flagUrl("pa") },
  { country: "Papua New Guinea", capital: "Port Moresby", flag: flagUrl("pg") },
  { country: "Paraguay", capital: "Asunción", flag: flagUrl("py") },
  { country: "Peru", capital: "Lima", flag: flagUrl("pe") },
  { country: "Philippines", capital: "Manila", flag: flagUrl("ph") },
  { country: "Poland", capital: "Warsaw", flag: flagUrl("pl") },
  { country: "Portugal", capital: "Lisbon", flag: flagUrl("pt") },
  { country: "Qatar", capital: "Doha", flag: flagUrl("qa") },
  { country: "Romania", capital: "Bucharest", flag: flagUrl("ro") },
  { country: "Russia", capital: "Moscow", flag: flagUrl("ru") },
  { country: "Rwanda", capital: "Kigali", flag: flagUrl("rw") },
  { country: "Saint Kitts and Nevis", capital: "Basseterre", flag: flagUrl("kn") },
  { country: "Saint Lucia", capital: "Castries", flag: flagUrl("lc") },
  { country: "Saint Vincent and the Grenadines", capital: "Kingstown", flag: flagUrl("vc") },
  { country: "Samoa", capital: "Apia", flag: flagUrl("ws") },
  { country: "San Marino", capital: "San Marino", flag: flagUrl("sm") },
  { country: "São Tomé and Príncipe", capital: "São Tomé", flag: flagUrl("st") },
  { country: "Saudi Arabia", capital: "Riyadh", flag: flagUrl("sa") },
  { country: "Senegal", capital: "Dakar", flag: flagUrl("sn") },
  { country: "Serbia", capital: "Belgrade", flag: flagUrl("rs") },
  { country: "Seychelles", capital: "Victoria", flag: flagUrl("sc") },
  { country: "Sierra Leone", capital: "Freetown", flag: flagUrl("sl") },
  { country: "Singapore", capital: "Singapore", flag: flagUrl("sg") },
  { country: "Slovakia", capital: "Bratislava", flag: flagUrl("sk") },
  { country: "Slovenia", capital: "Ljubljana", flag: flagUrl("si") },
  { country: "Solomon Islands", capital: "Honiara", flag: flagUrl("sb") },
  { country: "Somalia", capital: "Mogadishu", flag: flagUrl("so") },
  { country: "South Africa", capital: "Pretoria", flag: flagUrl("za") },
  { country: "South Korea", capital: "Seoul", flag: flagUrl("kr") },
  { country: "South Sudan", capital: "Juba", flag: flagUrl("ss") },
  { country: "Spain", capital: "Madrid", flag: flagUrl("es") },
  { country: "Sri Lanka", capital: "Sri Jayawardenepura Kotte", flag: flagUrl("lk") },
  { country: "Sudan", capital: "Khartoum", flag: flagUrl("sd") },
  { country: "Suriname", capital: "Paramaribo", flag: flagUrl("sr") },
  { country: "Sweden", capital: "Stockholm", flag: flagUrl("se") },
  { country: "Switzerland", capital: "Bern", flag: flagUrl("ch") },
  { country: "Syria", capital: "Damascus", flag: flagUrl("sy") },
  { country: "Taiwan", capital: "Taipei", flag: flagUrl("tw") },
  { country: "Tajikistan", capital: "Dushanbe", flag: flagUrl("tj") },
  { country: "Tanzania", capital: "Dodoma", flag: flagUrl("tz") },
  { country: "Thailand", capital: "Bangkok", flag: flagUrl("th") },
  { country: "Timor-Leste", capital: "Dili", flag: flagUrl("tl") },
  { country: "Togo", capital: "Lomé", flag: flagUrl("tg") },
  { country: "Tonga", capital: "Nuku'alofa", flag: flagUrl("to") },
  { country: "Trinidad and Tobago", capital: "Port of Spain", flag: flagUrl("tt") },
  { country: "Tunisia", capital: "Tunis", flag: flagUrl("tn") },
  { country: "Turkey", capital: "Ankara", flag: flagUrl("tr") },
  { country: "Turkmenistan", capital: "Ashgabat", flag: flagUrl("tm") },
  { country: "Tuvalu", capital: "Funafuti", flag: flagUrl("tv") },
  { country: "Uganda", capital: "Kampala", flag: flagUrl("ug") },
  { country: "Ukraine", capital: "Kyiv", flag: flagUrl("ua") },
  { country: "United Arab Emirates", capital: "Abu Dhabi", flag: flagUrl("ae") },
  { country: "United Kingdom", capital: "London", flag: flagUrl("gb") },
  { country: "United States", capital: "Washington, D.C.", flag: flagUrl("us") },
  { country: "Uruguay", capital: "Montevideo", flag: flagUrl("uy") },
  { country: "Uzbekistan", capital: "Tashkent", flag: flagUrl("uz") },
  { country: "Vanuatu", capital: "Port Vila", flag: flagUrl("vu") },
  { country: "Vatican City", capital: "Vatican City", flag: flagUrl("va") },
  { country: "Venezuela", capital: "Caracas", flag: flagUrl("ve") },
  { country: "Vietnam", capital: "Hanoi", flag: flagUrl("vn") },
  { country: "Yemen", capital: "Sana'a", flag: flagUrl("ye") },
  { country: "Zambia", capital: "Lusaka", flag: flagUrl("zm") },
  { country: "Zimbabwe", capital: "Harare", flag: flagUrl("zw") },
];

const REGIONS = [
  "Europe",
  "South America",
  "North America",
  "Asia",
  "Africa",
  "Australasia",
];

const REGION_SETS = {
  Europe: new Set([
    "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus",
    "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus",
    "Czechia", "Denmark", "Estonia", "Finland", "France", "Georgia",
    "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy",
    "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg",
    "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands",
    "North Macedonia", "Norway", "Poland", "Portugal", "Romania",
    "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain",
    "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom",
    "Vatican City",
  ]),
  "South America": new Set([
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador",
    "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela",
  ]),
  "North America": new Set([
    "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada",
    "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador",
    "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico",
    "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States",
  ]),
  Asia: new Set([
    "Afghanistan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia",
    "China", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan",
    "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon",
    "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea",
    "Oman", "Pakistan", "Palestine", "Philippines", "Qatar",
    "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria",
    "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan",
    "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen",
  ]),
  Africa: new Set([
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cameroon", "Central African Republic", "Chad",
    "Comoros", "Congo (Democratic Republic of the)", "Congo (Republic of the)",
    "Côte d'Ivoire", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea",
    "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea",
    "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar",
    "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique",
    "Namibia", "Niger", "Nigeria", "Rwanda", "São Tomé and Príncipe",
    "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa",
    "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda",
    "Zambia", "Zimbabwe",
  ]),
  Australasia: new Set([
    "Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia",
    "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa",
    "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu",
  ]),
};

function getRegion(country) {
  for (const [region, countries] of Object.entries(REGION_SETS)) {
    if (countries.has(country)) return region;
  }
  console.warn(`Missing region for ${country}`);
  return "Unknown";
}

const COUNTRIES = DATA.map(item => ({ ...item, region: getRegion(item.country) }));

/*******************************************
 * ELEMENTS
 *******************************************/
const titleScreen = document.getElementById("title-screen");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");

const roundButtons = document.querySelectorAll(".round-btn");
const startButton = document.getElementById("start-button");
const regionToggles = document.querySelectorAll(".region-toggle");
const countriesLoaded = document.getElementById("countries-loaded");

const flagImg = document.getElementById("flag-img");
const capitalQuestion = document.getElementById("capital-question");
const questionCounter = document.getElementById("question-counter");
const answersContainer = document.getElementById("answers-container");
const nextBtn = document.getElementById("next-btn");

const startSound = new Audio("start.wav");
const clickSound = new Audio("click.mp3");

const finalScore = document.getElementById("final-score");
const scoreMessage = document.getElementById("score-message");
const reviewSection = document.querySelector(".review-section");
const reviewList = document.getElementById("review-list");
const scoreDisplay = document.getElementById("score-display");

const quitBtn = document.getElementById("quit-btn");
const restartBtn = document.getElementById("restart-btn");
const mainMenuBtn = document.getElementById("main-menu-btn");
const quitModal = document.getElementById("quit-modal");
const confirmQuitBtn = document.getElementById("confirm-quit");
const cancelQuitBtn = document.getElementById("cancel-quit");

/*******************************************
 * STATE
 *******************************************/
let selectedRounds = "10";
let order = [];
let current = 0;
let correct = 0;
let wrong = [];
let selectedRegions = new Set(REGIONS);
let currentPool = COUNTRIES;

/*******************************************
 * TITLE → MAIN MENU
 *******************************************/
function showMainMenu() {
  // Only transition from the title screen once. Prevents in-game key presses
  // from re-opening the menu over the quiz content.
  if (titleScreen.style.display === "none") return;

  titleScreen.style.display = "none";
  startScreen.classList.remove("hidden");
  updateAvailableInfo();
}

document.addEventListener("keydown", showMainMenu, { once: true });
titleScreen.addEventListener("click", showMainMenu, { once: true });

/*******************************************
 * ROUND SELECTION
 *******************************************/
roundButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.disabled) return;
    setActiveRound(btn.dataset.rounds);
  });
});

setActiveRound("10");

function setActiveRound(value) {
  selectedRounds = value;
  roundButtons.forEach(b => b.classList.toggle("active", b.dataset.rounds === value));
}

/*******************************************
 * REGION FILTERS
 *******************************************/
regionToggles.forEach(toggle => {
  toggle.addEventListener("change", () => {
    const region = toggle.dataset.region;
    if (toggle.checked) selectedRegions.add(region);
    else selectedRegions.delete(region);

    updateAvailableInfo();
  });
});

function getAvailableCountries() {
  return COUNTRIES.filter(c => selectedRegions.has(c.region));
}

function updateStartButtonState(total) {
  const noCountries = total === 0;
  startButton.disabled = noCountries;
  startButton.classList.toggle("disabled", noCountries);
}

function updateRoundButtons(total) {
  roundButtons.forEach(btn => {
    const rounds = btn.dataset.rounds;

    if (rounds === "ALL") {
      btn.disabled = false;
      btn.classList.remove("disabled");
      return;
    }

    const value = parseInt(rounds, 10);
    const tooSmall = total < value;
    btn.disabled = tooSmall;
    btn.classList.toggle("disabled", tooSmall);
  });

  const selectedValue = selectedRounds === "ALL" ? Infinity : parseInt(selectedRounds, 10);
  const needsFallback = selectedRounds !== "ALL" && selectedValue > total;

  if (needsFallback) {
    const validNumbers = [...roundButtons]
      .map(btn => btn.dataset.rounds)
      .filter(v => v === "ALL" || parseInt(v, 10) <= total);

    const numericOnly = validNumbers
      .filter(v => v !== "ALL")
      .map(v => parseInt(v, 10))
      .sort((a, b) => b - a);

    const fallback = numericOnly.length ? String(numericOnly[0]) : "ALL";
    setActiveRound(fallback);
  }
}

function updateAvailableInfo() {
  const available = getAvailableCountries();
  currentPool = available;
  countriesLoaded.textContent = `${available.length} countries loaded.`;
  updateRoundButtons(available.length);
  updateStartButtonState(available.length);
}

/*******************************************
 * START QUIZ
 *******************************************/
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startSound.currentTime = 0;
  startSound.play();

  const availableCountries = getAvailableCountries();
  currentPool = availableCountries;

  const total = selectedRounds === "ALL"
    ? availableCountries.length
    : Math.min(availableCountries.length, parseInt(selectedRounds));

  if (total === 0) return;

  order = shuffle([...availableCountries]).slice(0, total);
  current = 0;
  correct = 0;
  wrong = [];

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  updateScoreDisplay();
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
  updateScoreDisplay();

  answersContainer.innerHTML = "";
  setNextButtonReady(false);

  const isLastQuestion = current === order.length - 1;
  nextBtn.textContent = isLastQuestion ? "FINISH" : "NEXT";

  const wrongOptions = shuffle(currentPool.filter(x => x.capital !== q.capital))
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
  clickSound.currentTime = 0;
  clickSound.play();

  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach(b => {
    b.disabled = true;
    if (b.textContent === q.capital) {
      b.style.background = "#47b36b";
      b.style.color = "white";
    } else if (b.textContent === choice) {
      b.style.background = "#d2515d";
      b.style.color = "white";
    }
  });

  if (choice === q.capital) correct++;
  else wrong.push({ country: q.country, correct: q.capital, chosen: choice });

  updateScoreDisplay();
  setNextButtonReady(true);
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
    reviewSection.classList.add("hidden");
  } else if (correct / order.length >= 0.8) {
    scoreMessage.textContent = "Great work!";
    reviewSection.classList.remove("hidden");
  } else if (correct / order.length >= 0.4) {
    scoreMessage.textContent = "Not bad!";
    reviewSection.classList.remove("hidden");
  } else {
    scoreMessage.textContent = "Try harder!";
    reviewSection.classList.remove("hidden");
  }

  reviewList.innerHTML = "";
  if (correct !== order.length) {
    wrong.forEach(item => {
      const p = document.createElement("p");
      p.textContent = `${item.country} → Correct: ${item.correct}, You chose: ${item.chosen}`;
      reviewList.appendChild(p);
    });
  }
}

/*******************************************
 * RESTART
 *******************************************/
restartBtn.onclick = () => {
  endScreen.classList.add("hidden");
  startQuiz();
};

mainMenuBtn.onclick = () => {
  endScreen.classList.add("hidden");
  resetToMenu();
};

quitBtn.onclick = () => {
  quitModal.classList.remove("hidden");
};

confirmQuitBtn.onclick = () => {
  quitModal.classList.add("hidden");
  quizScreen.classList.add("hidden");
  resetToMenu();
};

cancelQuitBtn.onclick = () => {
  quitModal.classList.add("hidden");
};

function resetToMenu() {
  quitModal.classList.add("hidden");
  startScreen.classList.remove("hidden");
  order = [];
  current = 0;
  correct = 0;
  wrong = [];
  questionCounter.textContent = "";
  capitalQuestion.textContent = "";
  answersContainer.innerHTML = "";
  setNextButtonReady(false);
  scoreDisplay.textContent = "";
  updateAvailableInfo();
}

function updateScoreDisplay() {
  if (!order.length) {
    scoreDisplay.textContent = "";
    return;
  }

  scoreDisplay.textContent = `Score: ${correct}`;
}

function setNextButtonReady(isReady) {
  nextBtn.disabled = !isReady;
  nextBtn.classList.toggle("ready", isReady);
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

updateAvailableInfo();
