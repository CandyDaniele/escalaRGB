window.addEventListener("load", start);

function start(){
  var inputRed = document.getElementById("inputRed");
  var inputGreen = document.getElementById("inputGreen");
  var inputBlue = document.getElementById("inputBlue");
  var red = document.getElementById("red");
  var green = document.getElementById("green");
  var blue = document.getElementById("blue");
  var resultBck = document.getElementById("resultBck");

  setColor();
  inputRed.value = red.value;
  inputBlue.value = blue.value;
  inputGreen.value = green.value;

  red.addEventListener("input", showValueRed);
  green.addEventListener("input", showValueGreen);
  blue.addEventListener("input", showValueBlue);
}

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