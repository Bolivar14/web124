/*Andreina Bolivar-Campbell, 10/21/2025, Final Project*/
"use strict"; 
  console.log(document.body);
  console.dir(document.body);

// tells browser when html is loaded & parsed to run JS
document.addEventListener("DOMContentLoaded", () => {
//addition function with for loop
  function addNumbers() {
    const num = Number (document.getElementById("num").value);
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += `${num} + ${i} = ${num + i} <br>`;
    }
    document.getElementById("add").innerHTML = result;
  }
//subtraction function with while loop
  function subtractNumbers() {
    const num = Number (document.getElementById("num").value);
    let result = "";
    let i = 1;

    while (i <=10) {
        result += `${num} - ${i} = ${num - i} <br>`;
        i++;
    }
    document.getElementById("subtract").innerHTML = result;
  }
//multiplication function with do...while loop
  function multiplyNumbers() {

    const num = Number(document.getElementById("num").value);
    
    let result = "";
    let i = 1;

do {
    result += `${num} * ${i} = ${num * i}<br>`;
    i++;
}
    while (i <= 10); 
     
 document.getElementById("multiply").innerHTML = result;
}
//division function with for loop
function divideNumbers() {

    const num = Number(document.getElementById("num").value);
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += `${num} / ${i} = ${(num / i).toFixed(2)}<br>`;
    }

    document.getElementById("divide").innerHTML = result;
}
//required runAll function to call all 4 functions
function runAll() {
    addNumbers();
    subtractNumbers();
    multiplyNumbers();
    divideNumbers();
}
//event listener to run all functions when button is clicked
    document.getElementById('calcBtn').addEventListener('click', runAll); 
});