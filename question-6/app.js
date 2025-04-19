const userInput = document.querySelector("#user-input");
const fetchData = document.querySelector("#fetch-btn");
const displayOutput = document.querySelector("#output");

let url = "https://api.funtranslations.com/translate/yoda.json?text=";

fetchData.addEventListener("click", function getData() {
fetch(url + userInput.value)
.then(response => response.json())
.then (data => {
    console.log(data)
    displayOutput.innerText = `${data.contents.text.toUpperCase()}`
})
});
