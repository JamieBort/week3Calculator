// ======================
// pseudo coding begining
// ======================
//
// 1. define variables, strings, and/or arrays
//
// 2. collect the numbers of the buttons that are selected
//
// 3. perform the math operation on them
//
// 4. display the result
//
// =================
// pseudo coding end
// =================


// 1. define variables, strings, and/or arrays

// This array is going to contain each number used in the mathmatical operation.
let array = [];
let string = "";

// 2. collect the numbers of the buttons that are selected

// number is an array.
let number = document.querySelectorAll('.number')

// function is annonymous because it is used only in this for loop. We do not need to call it outside of the loop.
// Also,
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function() {

    // the ith number is added to the string
    string += number[i].innerHTML;

    // let display = document.querySelector('#display');

    let result = document.querySelector("#result");
    // storing the number in the result window
    result.innerHTML += `${number[i].innerHTML}`;
  });
};

// When a number button is selected add it to the array.

// taking one of the four mathematical operations (addition, subtraction, multiplication, division) and storing in the variable 'operator'.
let operator = document.querySelectorAll('.operator');

// when button is selected with the mouse it is pushed (added) to the string
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function() {

    array.push(Number(string));

    string = ""; // move this?

    // the button is put in the HTML tag attribute
    array.push(operator[i].innerHTML);

    // result is the variable that display is assigned to
    let result = document.querySelector('#display');


    result.innerHTML += `${operator[i].innerHTML}`; // figure outwhat's going on here
  })
}

// ==========================================
// calculating the sum/total of the operation
// ==========================================

// querySelector returns the value for equal
let equal = document.querySelector('#equal');

// when button is selected with the mouse it is pushed (added) to the string
equal.addEventListener("click", function() {

  array.push(Number(string));

// declare variables
  let parameter1 = array[0];
  let operation = array[1];
  let parameter2 = array[2];
  let sum;

if ( operation === '/' && parameter2 === 0 ) {
  // "operation is undefined"
  console.log("The operation is undefined. You cannot divided by zero.");
} else {
  sum = parameter1 operation parameter2
}

// display the answer
let result = document.querySelector('result');
result.innerHTML = `${answer}`;

string = `${answer}`;




let clear = document.querySelector('#clear');
// querySelector returns just the single button 'C'

clear.addEventListener("click", function() {
  let result = document.querySelector('#result');
  result.innerHTML = '';
  currentNumber = '';
  array = [];
});
