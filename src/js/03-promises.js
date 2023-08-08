import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let position = 0;
  let delay = Number(form.elements.delay.value);
  let step = Number(form.elements.step.value);
  let amount = Number(form.elements.amount.value);
  for (let i = 0; i < amount; i++) {
    position = i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
  form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
