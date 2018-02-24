// We need to first start out with an empty array and string.
let myArray = [];
let myString = "";

// Declare and assign varables.
let display = document.querySelector("#display");
let digits = document.querySelectorAll(".math");
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");

console.log(myArray);
console.log(myString);
console.log(myArray, myString, digits);

for (var i = 0; i < digits.length; i++) {
  digits[i].addEventListener('click', function (){
  display.innerHTML += event.target.value; // this code inserts the value of the buttons selected into the html.
  myArray.push(event.target.value); // this code inserts the value of the buttons selected into the 'myArray' array.
// console.log(myArray);
})}; // code for recording the digits that are selected.

// console.log(myArray);
// console.log(myString);
// console.log(myArray, myString, digits);

// Performaing the operations
equals.addEventListener('click', function (){
  display.innerHTML = eval(myArray.join(""));
});

// Code for clearing the screen and the 'myArray' array.
clear.addEventListener('click', function (){
myArray = [];
  display.innerHTML = myArray;
})
