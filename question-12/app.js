//Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.
// Write a function which takes two objects and return the person with more power based on their name and power both

const btnClick = document.querySelector("#btn-click");
btnClick.addEventListener("click", getName);
const obj1 = {
  name: "ram ",
  power: "2500",
  yuga: "Treta",
};

const obj2 = {
  name: "krishna ",
  power: "2325",
  yuga: "Dwapar"}
  

const getName = (personDetail, person2Detail) =>
    
  personDetail.power > person2Detail.power
    ? personDetail.name
    : person2Detail.name;

getName(obj1, obj2);
