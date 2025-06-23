var myUsers = [];

// log in
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

// sign up
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");

var signupBtn = document.querySelector(".signupBtn");

var success = document.querySelector(".success");
var goToSignin = document.querySelector(".go-to-signin");

// my forms
var signinForm = document.querySelector(".signin-form");
var signupForm = document.querySelector(".signup-form");

if (localStorage.getItem("myUsers") != null) {
  myUsers = JSON.parse(localStorage.getItem("myUsers"));
}

function signUp() {
  var signUpUsers = {
    signupNameInput: signupName.value,
    signupEmailInput: signupEmail.value,
    signupPasswordInput: signupPassword.value,
  };
  myUsers.push(signUpUsers);
  localStorage.setItem("myUsers", JSON.stringify(myUsers));
  reset();
  success.classList.replace("d-none", "d-block");
}

function reset() {
  signupName.value = null;
  signupEmail.value = null;
  signupPassword.value = null;
}

function signin() {
  for (var i = 0; i < myUsers.length; i++) {
    if (
      myUsers[i].signupEmailInput == loginEmail.value &&
      myUsers[i].signupPasswordInput == loginPassword.value
    ) {
      document
        .querySelector(".signin-form")
        .classList.replace("d-flex", "d-none");
      document.querySelector(".my-home").classList.replace("d-none", "d-flex");
      document.querySelector(
        ".welcome-message p"
      ).innerHTML = `welome ${myUsers[i].signupNameInput}`;
    } else {
      document
        .querySelector(".incorrect")
        .classList.replace("d-none", "d-block");
    }
  }
}

//event listener
signupBtn.addEventListener("click", signUp);

goToSignin.addEventListener("click", function () {
  signupForm.classList.replace("d-flex", "d-none");
  signinForm.classList.replace("d-none", "d-flex");
});

document.querySelector(".loginBtn").addEventListener("click", signin);

document.querySelector(".logout").addEventListener("click", function () {
  signupForm.classList.replace("d-none", "d-flex");
  document.querySelector(".my-home").classList.replace("d-flex", "d-none");
  success.classList.replace("d-block", "d-none");
});

console.log(myUsers);
