const DATE = document.querySelector(".headerDate");
const CLOCK = document.querySelector(".headerClock");
const STOPWATCH = document.querySelector(".stopwatchStart");
const HOURS = document.querySelector("#hours");
const MINUTES = document.querySelector("#minutes");
const SECONDS = document.querySelector("#seconds");
const START_1 = document.querySelector(".start1");
const STOP_1 = document.querySelector(".stop1");
const REST_1 = document.querySelector(".rest1");
const LOOP_1 = document.querySelector(".loop1");
const LOOP_FIELD = document.querySelector(".stopwatch_check");
const ADD = document.querySelector(".add");
const MINUS = document.querySelector(".minus");
const START_2 = document.querySelector(".start2");
const STOP_2 = document.querySelector(".stop2");
const REST_2 = document.querySelector(".rest2");
const MINUTES_TIMER = document.querySelector("#minutes_timer");
const SECONDS_TIMER = document.querySelector("#seconds_temer");

setInterval(() => {
  let dd = new Date();
  let day = dd.getDate() <= 9 ? "0" + dd.getDate() : dd.getDate();
  let months =
    dd.getMonth() <= 8 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  let year = dd.getFullYear();
  DATE.textContent = `${day}.${months}.${year}`;
  let hors = dd.getHours() <= 9 ? "0" + dd.getHours() : dd.getHours();
  let minutes = dd.getMinutes() <= 9 ? "0" + dd.getMinutes() : dd.getMinutes();
  let seconds = dd.getSeconds() <= 9 ? "0" + dd.getSeconds() : dd.getSeconds();
  CLOCK.textContent = `${hors}:${minutes}:${seconds}`;
}, 1000);

let starStopWacth;
let starTimer;
let isDisabeld = true;

START_1.addEventListener("click", (event) => {
  START_1.disabled = true;
  STOP_1.disabled = false;
  starStopWacth = setInterval(() => {
    if (SECONDS.textContent < 59) {
      if (SECONDS.textContent < 9)
        SECONDS.textContent = "0" + (Number(SECONDS.textContent) + 1);
      else SECONDS.textContent = Number(SECONDS.textContent) + 1;
    } else {
      SECONDS.textContent = "00";
      if (MINUTES.textContent < 59) {
        if (MINUTES.textContent < 9)
          MINUTES.textContent = "0" + (Number(MINUTES.textContent) + 1);
        else MINUTES.textContent = Number(MINUTES.textContent) + 1;
      } else {
        MINUTES.textContent = "00";
        if (MINUTES.textContent < 9)
          HOURS.textContent = "0" + (Number(HOURS.textContent) + 1);
        else HOURS.textContent = Number(HOURS.textContent) + 1;
      }
    }
    START_1.style.border = " 2px solid white";
    START_1.style.color = "white";
    STOP_1.style.border = "";
    STOP_1.style.color = "";
  }, 1000);
});

STOP_1.addEventListener("click", (event) => {
  clearInterval(starStopWacth);
  START_1.disabled = false;
  STOP_1.disabled = true;
  STOP_1.style.border = " 2px solid white";
  STOP_1.style.color = "white";
  START_1.style.border = "";
  START_1.style.color = "";
});

REST_1.addEventListener("click", (event) => {
  clearInterval(starStopWacth);
  START_1.disabled = false;
  HOURS.textContent = "00";
  MINUTES.textContent = "00";
  SECONDS.textContent = "00";
  START_1.style.border = "";
  START_1.style.color = "";
  STOP_1.style.border = "";
  STOP_1.style.color = "";
  LOOP_FIELD.innerHTML = "";
});

LOOP_1.addEventListener("click", (event) => {
  let newP = document.createElement("p");
  newP.textContent = STOPWATCH.innerText;
  LOOP_FIELD.append(newP);
});

ADD.addEventListener("click", (event) => {
  let timerMinutes = document.querySelector(".timer_namber");
  if (timerMinutes.textContent < 25)
    timerMinutes.textContent =
      timerMinutes.textContent < 9
        ? "0" + (Number(timerMinutes.textContent) + 1)
        : Number(timerMinutes.textContent) + 1;
});

MINUS.addEventListener("click", (event) => {
  let timerMinutes = document.querySelector(".timer_namber");
  if (timerMinutes.textContent > 0)
    timerMinutes.textContent =
      timerMinutes.textContent < 9
        ? "0" + (Number(timerMinutes.textContent) - 1)
        : Number(timerMinutes.textContent) - 1;
});

START_2.addEventListener("click", (event) => {
  let timerMinutes = document.querySelector(".timer_namber");
  if (isDisabeld) MINUTES_TIMER.textContent = timerMinutes.textContent;
  isDisabeld = false;
  START_2.disabled = true;
  STOP_2.disabled = false;
  starTimer = setInterval(() => {
    if (MINUTES_TIMER.textContent >= 0) {
      if (SECONDS_TIMER.textContent > 0) {
        SECONDS_TIMER.textContent =
          SECONDS_TIMER.textContent > 9
            ? Number(SECONDS_TIMER.textContent) - 1
            : "0" + (Number(SECONDS_TIMER.textContent) - 1);
      } else if (MINUTES_TIMER.textContent != 0) {
        MINUTES_TIMER.textContent =
          MINUTES_TIMER.textContent > 9
            ? Number(MINUTES_TIMER.textContent) - 1
            : "0" + (Number(MINUTES_TIMER.textContent) - 1);
        SECONDS_TIMER.textContent = "59";
      }
    }
    START_2.style.border = " 2px solid white";
    START_2.style.color = "white";
    STOP_2.style.border = "";
    STOP_2.style.color = "";
  }, 1000);
});

STOP_2.addEventListener("click", (event) => {
  clearInterval(starTimer);
  START_2.disabled = false;
  STOP_2.disabled = true;
  STOP_2.style.border = " 2px solid white";
  STOP_2.style.color = "white";
  START_2.style.border = "";
  START_2.style.color = "";
});

REST_2.addEventListener("click", (event) => {
  clearInterval(starTimer);
  isDisabeld = true;
  START_2.disabled = false;
  MINUTES_TIMER.textContent = "00";
  SECONDS_TIMER.textContent = "00";
  START_2.style.border = "";
  START_2.style.color = "";
  STOP_2.style.border = "";
  STOP_2.style.color = "";
});
