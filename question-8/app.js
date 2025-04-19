const fetchData = document.querySelector("#fetch-btn");
const displayOutput = document.querySelector("#output");

var url = "https://jsonplaceholder.typicode.com/dummyUsers";

fetchData.addEventListener("click", function showError() {
  console.log("clicked");
  fetch(url).then((error) => {
    if (error.status === 404)
      displayOutput.innerText = `${error.status} Page not Found`;
    else if (error === 401) {
      displayOutput.innerText = `${error.status} You are not Logged In`;
    }
  });
});
