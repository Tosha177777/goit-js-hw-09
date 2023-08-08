// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const date = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timers = document.querySelector('.timer');
let timeId;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    console.log(selectedDates[0]);
    if (selectedDate <= new Date()) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

const datePicker = flatpickr(date, options);

startBtn.addEventListener('click', timeUpdate);

function timeUpdate() {
  startBtn.disabled = true;
  const selectedDate = datePicker.selectedDates[0];
  const targetTime = selectedDate.getTime();

  timeId = setInterval(() => {
    const currentTime = new Date().getTime();
    const remainingTime = targetTime - currentTime;
    const timeLeft = convertMs(remainingTime);

    if (remainingTime < 0) {
      clearInterval(timeId);

      return;
    }

    document.querySelector('[data-days]').textContent = timeLeft.days;
    document.querySelector('[data-hours]').textContent = timeLeft.hours;
    document.querySelector('[data-minutes]').textContent = timeLeft.minutes;
    document.querySelector('[data-seconds]').textContent = timeLeft.seconds;
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
