const inputRed = document.getElementById("inputRed");
const inputGreen = document.getElementById("inputGreen");
const inputBlue = document.getElementById("inputBlue");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const resultBck = document.getElementById("resultBck");

window.addEventListener("load", () => {
  setColor();
  inputRed.value = red.value;
  inputBlue.value = blue.value;
  inputGreen.value = green.value;

  red.addEventListener("input", showValueRed);
  green.addEventListener("input", showValueGreen);
  blue.addEventListener("input", showValueBlue);

  function showValueRed(evt) {
    inputRed.value = evt.target.value;
    setColor();
  }
  function showValueGreen(evt) {
    inputGreen.value = evt.target.value;
    setColor();
  }
  function showValueBlue(evt) {
    inputBlue.value = evt.target.value;
    setColor();
  }
  
  function setColor() {
    resultBck.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  }
});






