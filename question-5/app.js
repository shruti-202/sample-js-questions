const btnLoad = document.querySelector("#btn-load");
const txtLoad = document.querySelector("#txt-load");

btnLoad.addEventListener("click", function hideText() {
  if (txtLoad.style.display === "none") {
    txtLoad.style.display = "block";
  } else {
    txtLoad.style.display = "none";
  }
});
