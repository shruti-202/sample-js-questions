const userFirstInput = document.querySelector('#first-input');
const userSecondInput = document.querySelector('#second-input');
const finalOutput = document.querySelector('#output');

const btnAddition = document.querySelector(".btn-add");
const btnSubtract = document.querySelector(".btn-subtract")
const btnMultiplication= document.querySelector(".btn-multiply")
const btnDivide = document.querySelector(".btn-divide")

btnAddition.addEventListener("click", function addHandler() {
    finalOutput.innerText = Number(userFirstInput.value) + Number(userSecondInput.value)

})

btnSubtract.addEventListener("click", function subHandler() {
    finalOutput.innerText = Number(userFirstInput.value) - Number(userSecondInput.value)
})

btnMultiplication.addEventListener('click', function multiplyHandler() {
    finalOutput.innerText = Number(userFirstInput.value) * Number(userSecondInput.value)
})

btnDivide.addEventListener("click", function divide(){
    finalOutput.innerText = Number(userFirstInput.value) / Number(userSecondInput.value)
})