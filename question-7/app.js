const fetchData = document.querySelector("#btn-fetch");
const displayOutput = document.querySelector("#output");

let url = "https://api.spacexdata.com/v4/launches/invalid-endpoint"


fetchData.addEventListener("click", function showError() {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        displayOutput.innerText = JSON.stringify(data);
      })
      .catch(err => {
        console.log(err);
        displayOutput.innerText = err.message;
      });
  });