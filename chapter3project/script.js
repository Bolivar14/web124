//Andreina Bolivar-Campbell Project 3 JavaScript file 9/21/2025
"use strict"
console.log('JavaScript is connected');

const userName = "Andreina Bolivar-Campbell";
console.log(`Hello, my name is ${userName}`);

let desiredSalary= '$100,000';
console.log(`I would like to earn ${desiredSalary} per year`);

const veteranStatus= false;
console.log(`Veteran status: ${veteranStatus}`);

let friends = ['Jamie', 'Jasmine', 'Aron'];
document.getElementById('friend1').textContent = 'Jamie';
document.getElementById('friend2').textContent = 'Jasmine';
document.getElementById('friend3').textContent = 'Aron';
console.log('My friends are:'), friends;

let desiredSalaryNumber = ['$80,000', '$100,000', '$500,000'];
document.getElementById('salary1').textContent = desiredSalaryNumber[0];
document.getElementById('salary2').textContent = desiredSalaryNumber[1];
document.getElementById('salary3').textContent = desiredSalaryNumber[2];
console.log('My friends desired salaries are:', desiredSalaryNumber);

let friend = {
    name: 'Rachel LeFlore',
    desiredSalary: '$120,000',
}
document.getElementById('object').textContent = 'My friend Rachel would like to earn $120,000 per year';
console.log('friend: $(friendName), desired salary: $(friendDesiredSalary)');