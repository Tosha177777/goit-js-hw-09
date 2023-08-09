const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
disabledBtn(true, false);

startBtn.addEventListener('click', startSwitch);
stopBtn.addEventListener('click', stopSwitch);

function startSwitch() {
  disabledBtn(true, false);
  timerId = setInterval(getRandomHexColor, 1000);
}

function stopSwitch() {
  disabledBtn(true, false);
  clearInterval(timerId);
}

function getRandomHexColor() {
  return (document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  )
    .toString(16)
    .padStart(6, 0)}`);
}

function disabledBtn(a, b) {
  if (stopBtn.disabled) {
    stopBtn.disabled = b;
    startBtn.disabled = a;
  } else {
    stopBtn.disabled = a;
    startBtn.disabled = b;
  }
}
