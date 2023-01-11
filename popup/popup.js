//const pomo_history = document.getElementById("pomo_history");

//const pomo_template = document.getElementById("pomodoro_template");
//const short_template = document.getElementById("short_break_template");
//const long_template = document.getElementById("long_break_template");

//const pomo_element = pomo_template.content.firstElementChild.cloneNode(true);
//const pomo_element1 = pomo_template.content.firstElementChild.cloneNode(true);
//const short_element = short_template.content.firstElementChild.cloneNode(true);
//const long_element = long_template.content.firstElementChild.cloneNode(true);

//  element.querySelector(".title").textContent = title;
//element.querySelector(".pathname").textContent = pathname;
//  element.querySelector("a").addEventListener("click", async () => {
// need to focus window as well as the active tab
//  await chrome.tabs.update(tab.id, { active: true });
// await chrome.windows.update(tab.windowId, { focused: true });
// });

const remainingTime = {
  total: 0,
  minutes: 0,
  seconds: 0,
};

let interval;

function initTimer(len) {
  remainingTime.total = Number.parseInt(len / 1000, 10);
  remainingTime.minutes = Number.parseInt((remainingTime.total / 60) % 60, 10);
  remainingTime.seconds = Number.parseInt(remainingTime.total % 60, 10);
}

function startTimer() {
  const pomo_time = 25 * 60 * 1000;
  const endTime = Date.parse(new Date()) + pomo_time;

  initTimer(pomo_time);

  interval = setInterval(function () {}, 1000);
}

function updateTimer() {
  const { remainingTime } = timer;
  const minutes = `${remainingTime.minutes}`.padStart(2, "0");
  const seconds = `${remainingTime.seconds}`.padStart(2, "0");

  const min = document.getElementById("pomo_minutes");
  const sec = document.getElementById("pomo_seconds");

  min.textContent = minutes;
  sec.textContent = seconds;
}

//const state = {
//pomodoros = [
// { description: 'Task', timeRemaining: ptime }
// ]
//}

//pomo_history.appendChild(pomo_element);
//pomo_history.appendChild(short_element);
//pomo_history.appendChild(pomo_element1);

//function createElement(description) {
// const element = document.getElementById("pomodoro_template");
// const pomodoro = element.content.firstElementChild.cloneNode(true);
//  pomodoro.textContent = description;
//  return pomodoro;
//}

//pomo_history.appendChild(createElement("Eat boogers"));
//pomo_history.appendChild(createElement("Eat boogers"));
//pomo_history.appendChild(createElement("Eat boogers"));

//setInterval(function () {
// Clear the list of pomodoros.

//const $pomodoro = state.pomodoros.map(createElement);
// $pomodoro.map(function ($pomodoro) {
//   pomo_history.appendChild($pomodoro)
// }
//}, 1000)
