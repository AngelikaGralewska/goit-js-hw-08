import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

formDataSave();

form.addEventListener('submit', event => {
    event.preventDefault();
   
    const localStorageData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

    form.reset();

    console.log(localStorageData)
});

form.addEventListener('input', throttle(formTextInput, 500));


function formTextInput () {
  const formData = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
};


function formDataSave() {
  const saveText = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  if (saveText === null) {
    return;
  }

  Object( { email: textarea.value, message: input.value })
};

const storage = localStorage.getItem(FEEDBACK_KEY); 
const parsedStorageData = JSON.parse(storage); 



const afterRefresh = () => { 
    if (parsedStorageData !== null) { 
    textarea.value = parsedStorageData.message || '';
    input.value = parsedStorageData.email || '';
  };
}
afterRefresh();


