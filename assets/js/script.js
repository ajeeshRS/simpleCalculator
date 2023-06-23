// DOM

const inputEl = document.getElementById("input-el");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const addBtn = document.getElementById("add");
const minus = document.getElementById("sub");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const clrBtn = document.getElementById("clear");

// adding event listeners
one.addEventListener("click", function () {
  inputEl.value += "1";
});

two.addEventListener("click", function () {
  inputEl.value += "2";
});

three.addEventListener("click", function () {
  inputEl.value += "3";
});
four.addEventListener("click", function () {
  inputEl.value += "4";
});
five.addEventListener("click", function () {
  inputEl.value += "5";
});
six.addEventListener("click", function () {
  inputEl.value += "6";
});
seven.addEventListener("click", function () {
  inputEl.value += "7";
});
eight.addEventListener("click", function () {
  inputEl.value += "8";
});
nine.addEventListener("click", function () {
  inputEl.value += "9";
});
zero.addEventListener("click", function () {
  inputEl.value += "0";
});
dot.addEventListener("click", function () {
  inputEl.value += ".";
});

addBtn.addEventListener("click", function () {
  inputEl.value += "+";
});
minus.addEventListener("click", function () {
  inputEl.value += "-";
});
multiply.addEventListener("click", function () {
  inputEl.value += "*";
});
divide.addEventListener("click", function () {
  inputEl.value += "/";
});
equal.addEventListener("click", function () {
  inputEl.value = eval(inputEl.value);
});
clrBtn.addEventListener("dblclick", function () {
  inputEl.value = " ";
});
