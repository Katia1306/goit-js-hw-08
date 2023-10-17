import throttle from 'lodash.throttle';

const selectors = {
    form: document.querySelector("form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea")
}
const LS_KEY = "feedback-form-state";
const info = [];

selectors.form.addEventListener('input', handlerClick);

function handlerClick(evt) {
    { }
    
    localStorage.setItem(LS_KEY, JSON.stringify(info));
}
