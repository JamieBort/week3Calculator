// I need to come back to this one. It is not functioning propertly. Specificially I need to remove the ',' between the digits and mathematical operators in the display field of the calculator.



// ================= pseudo coding begining =================
//
// 1. define variables, strings, and/or arrays
//
// 2. collect the numbers of the buttons that are selected
//
// 3. perform the math operation on them
//
// 4. display the result
//
// ================= pseudo coding end =================

// ===================================================
// 1. define variables, strings, and/or arrays
// ===================================================

// assigning the display div to the variable 'display'
let display = document.getElementById('display');
console.log(display);

// button is an array containing 1, 2, 3, 4, 5, 6, 7, 8 , 9 , 0, +, - , /, X ' ', and '.'. In other words, every button on the calculator except the '=' sign.
let button = document.querySelectorAll('.button');
console.log(button);

// assigning '=' to the variable 'equal'
let equal = document.getElementById('equal');
console.log(equal);

// assigning 'C' to the variable 'clear'
let clear = document.getElementById('clear');
console.log(clear);

// This array is going to contain each number used in the mathmatical operation.
let array = [];
console.log(array);

// This string is going to contain each number used in the mathmatical operation.
let string = "";
console.log(string);



// ===================================================
// 2. collect the numbers of the buttons that are selected
// ===================================================

// come back and add parathaties to give it an order of operations

// function is annonymous because it is used only in this for loop. We do not need to call it outside of the loop.

for (var i = 0; i < button.length; i++) {
  // we want a second array to populate when we click a button
  button[i].addEventListener('click', function(dummyvariable) {

    // populate string with numbers and mathematical operators
    console.log(dummyvariable.target.innerHTML);
    array.push(dummyvariable.target.innerHTML);


    // need to "push" it into the dom/display
    // document.display.push(array).innerHTML
    display.innerHTML = array;
    console.log(display.innerHTML);

    // then remove the comas and the quotes from the string
    mathstmt = array.join("");
    console.log(mathstmt);

    //  then use eval to evaluate the string
    let result = eval(mathstmt);
    console.log(result);
    // display.innerHTML = result;
  });
}
console.log(array);

// produce the result with the equals symbol
equal.addEventListener("click", function() {
  let dmmyvrble = eval(concat);
  display.innerHTML = dmmyvrble;
});


// clear the number with the 'C' button

// clear.addEventListener('click', function() {
//       display.innerHTML = " ";
//       display.innerHTML = " ";
//       return result = "";
//     });

clear.addEventListener("click", function() {
  array = [];
  display.innerHTML = array;
});
