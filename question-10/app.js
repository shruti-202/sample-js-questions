const getPassword = document.querySelector("#user-password");
const submitBtn = document.querySelector("#btn-submit");
const displayOutput = document.querySelector("#output");

submitBtn.disabled = true;
getPassword.style.border = "2px solid red";
displayOutput.innerText = " ";

getPassword.addEventListener("input", function hideButton() {
  if (getPassword.value.length < 10) {
    submitBtn.disabled = true;
    displayOutput.innerText = "";
    getPassword.style.border = "2px solid red";
  } else {
    submitBtn.disabled = false;
    getPassword.style.border = "2px solid green";
  }
});

submitBtn.addEventListener("click", function () {
  if (getPassword.value.length < 10) {
    getPassword.style.border = "2px solid red";
    displayOutput.innerText = "";
  } else {
    getPassword.style.border = "2px solid green";
    displayOutput.innerText = "successful";
  }
});
