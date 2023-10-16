const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const storageCheck = localStorage.getItem(USERNAME_KEY);

if(storageCheck === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",btnSubmit);
}else {
  greetingTxt(storageCheck);
}

function greetingTxt(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}!`
}

function btnSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  
  const username = loginInput.value;

  localStorage.setItem("username",username);
  greetingTxt(username);
}