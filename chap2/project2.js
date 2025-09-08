/*project 2 javascript, Andreina Bolivar-Campbell, 9-6-25*/
document.getElementById("p1").style.color = "red";

const myName ='Andreina Bolivar-Campbell';
let para1 = document.getElementById("p1");
para1.textContent = myName;

let n1 = 5;
let n2 = 10;

let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;


let myNameAddnum = myName + n1;
document.getElementById("p4").textContent = myNameAddnum;;

let myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;//expect NaN

let yourAge = 33;
let ageCompare = yourAge < n1 * n2;
document.getElementById("p6").textContent = ageCompare;


