// HTML Elements
const formPage = document.getElementById('form-page');
const welcomePage = document.getElementById('welcome-page');
const meditationPage = document.getElementById('meditation-page');
const resultPage = document.getElementById('result-page');
const userForm = document.getElementById('user-form');
const welcomeMessage = document.getElementById('welcome-message');
const meditationAudio = document.getElementById('meditation-audio');
const timerDisplay = document.getElementById('timer');

// Variables to store user data
let userName = '';
let meditationDuration = 0;

// Handle form submission
userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;

  // Save user data
  userName = name;

  // Show welcome page
  formPage.classList.add('hidden');
  welcomePage.classList.remove('hidden');
  welcomeMessage.textContent = `Welcome, ${name}! Let's begin your meditation journey.`;
});

// Start meditation
function startMeditation(minutes) {
  meditationDuration = minutes;
  welcomePage.classList.add('hidden');
  meditationPage.classList.remove('hidden');
  meditationAudio.play();

  let timeRemaining = minutes * 60;

  // Countdown timer
  const timerInterval = setInterval(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeRemaining--;

    if (timeRemaining < 0) {
      clearInterval(timerInterval);
      endMeditation();
    }
  }, 1000);
}

// End meditation
function endMeditation() {
  meditationAudio.pause();
  meditationPage.classList.add('hidden');
  resultPage.classList.remove('hidden');
}