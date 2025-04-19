const userPassword = document.querySelector("#user-input");
const displayOutput = document.querySelector("#output");

userPassword.addEventListener("input", function passwordChecker() {
  if (userPassword.value.length < 10) {
    displayOutput.innerText = "Error";
  } else {
    displayOutput.innerText = "Success";
  }
});
