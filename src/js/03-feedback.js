import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');
const formData = {};

formDataSave();

form.addEventListener('submit', event => {
    event.preventDefault();
    event.currentTarget.reset();
    
    const localStorageData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    form.reset();

    localStorage.removeItem(FEEDBACK_KEY);
    console.log(localStorageData)
});

form.addEventListener('input', throttle(formTextInput, 500));


function formTextInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
};


function formDataSave() {
  const saveText = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  if (saveText === null) {
    return;
  }

  Object( { email: textarea.value, message: input.value })
};