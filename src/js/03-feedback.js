import throttle from 'lodash.throttle';
const refs = {
  inputNameEl: document.querySelector('.feedback-form [name="name"]'),
  inputMessageEl: document.querySelector('.feedback-form [name="message"]'),
  formEl: document.querySelector('.feedback-form'),
};
refs.formEl.addEventListener('input', throttle(onDataInput, 500));
refs.formEl.addEventListener('submit',  e => {
  e.preventDefault(); 
  const { email, message } = e.currentTarget.elements;
  if (!email.value || !message.value) {
    return alert ( "fill all field")
  }
  console.log(data);
  e.target.reset();
  localStorage.removeItem('formData');
  data = {};
}
);

let data = {};
function onDataInput(e) {
  const key = e.target.name; // 'message'
  const value = e.target.value;
  data[key] = value;
  saveToLS('formData', data);
}

function onLoadPage() {
  const { email, message } = refs.formEl.elements;
  data = loadFromLS('formData') || {};
  email.value = data.email || '';
  message.value = data.message || '';
}
onLoadPage();

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}