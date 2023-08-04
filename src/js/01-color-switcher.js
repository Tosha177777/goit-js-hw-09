const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
stopBtn.disabled = true;
startBtn.disabled = false;

startBtn.addEventListener('click', startSwitch);
stopBtn.addEventListener('click', stopSwitch);

function startSwitch() {
  stopBtn.disabled = false;
  timerId = setInterval(function getRandomHexColor() {
    return (document.body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    )
      .toString(16)
      .padStart(6, 0)}`);
  }, 1000);
  startBtn.disabled = true;
}

function stopSwitch() {
  startBtn.disabled = false;
  clearInterval(timerId);
  stopBtn.disabled = true;
}
