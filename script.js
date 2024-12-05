// HTML Elements
const formPage = document.getElementById("form-page");
const welcomePage = document.getElementById("welcome-page");
const meditationPage = document.getElementById("meditation-page");
const resultPage = document.getElementById("result-page");
const userForm = document.getElementById("user-form");
const welcomeMessage = document.getElementById("welcome-message");
const meditationAudio = document.getElementById("meditation-audio");
const timerDisplay = document.getElementById("timer");

const buttonStart = document.querySelector('.start')
const homePage = document.querySelector('.home')
const timeSelection = document.getElementById("time-selection");
const body = document.querySelector('body')


// Variables to store user data
let userName = "";
let meditationDuration = 0;

const meditationMusic = {
  1: "music-1-minutes.mp3",
  2: "music-2-minutes.mp3",
  5: "music-5-minutes.mp3",
};

// Handle form submission
buttonStart.addEventListener("click", (e) => {
  e.preventDefault();
  userName = document.getElementById("name").value;

  if (!userName){
    alert("Please enter your name.")
    return;
  }
  // Show welcome page
  // formPage.classList.add("hidden");
  homePage.style.display = 'none' 
  body.className = 'bg-ijo' 
  welcomePage.classList.remove("hidden");
  welcomeMessage.textContent = `Welcome, ${userName}! Let's begin your meditation journey.`;
  timeSelection.style.display = "block";
});

document.querySelectorAll(".time-option").forEach(button => {
  button.addEventListener("click", (e) => {
    meditationDuration = parseInt(e.target.getAttribute("data-time"));
    startMeditation(meditationDuration);
  });
});

// Start meditation
function startMeditation(minutes) {
  meditationDuration = minutes;

  // Load appropriate audio file
  const audioSource = meditationMusic[minutes];
  if (audioSource) {
    meditationAudio.src = audioSource;
  } else {
    meditationAudio.src = "music-1-minutes.mp3"; // Fallback music
  }

  welcomePage.classList.add("hidden");
  meditationPage.classList.remove("hidden");
  meditationAudio.play();

  let timeRemaining = minutes * 60;

  // Countdown timer
  const timerInterval = setInterval(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
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
  meditationPage.classList.add("hidden");
  resultPage.classList.remove("hidden");
}


// Daily Goals
const buttonGoals = document.querySelectorAll('.goal')
buttonGoals.forEach((goalTime) => {
  let value = goalTime.value;
  goalTime.addEventListener('click', function() { compareTimeGoal(value); })
}) 

let goalTime = 0;

function compareTimeGoal(time) {
  let totalTime = goalTime + Number(time)
  console.log(totalTime);
  
  return totalTime
}

