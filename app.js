//grab input elements for addition
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");

//input elements for subtraction
const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");

//get input elements for multiplication
const mult1 = document.getElementById("mult1");
const mult2 = document.getElementById("mult2");

//get input elements for division
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

//grab button elements
const addButton = document.getElementById("add-button");
const subButton = document.getElementById("sub-button");
const multButton = document.getElementById("mult-button");
const divButton = document.getElementById("div-button");

//grab results elements
const addResult = document.getElementById("add-result");
const subResult = document.getElementById("sub-result");
const multResult = document.getElementById("mult-result");
const divResult = document.getElementById("div-result");

//create event listeners for add button
addButton.addEventListener('click', () => {
    const num1 = Number(add1.value);
    const num2 = Number(add2.value);

    addResult.textContent = num1 + num2;
})

//create event listeners for sub button
subButton.addEventListener('click', () => {
    const num1 = Number(sub1.value);
    const num2 = Number(sub2.value);

    subResult.textContent = num1 - num2;
})

//create event listeners for mult button
multButton.addEventListener('click', () => {
    const num1 = Number(mult1.value);
    const num2 = Number(mult2.value);

    multResult.textContent = num1 * num2;
})

//create event listeners for div button
divButton.addEventListener('click', () => {
    const num1 = Number(div1.value);
    const num2 = Number(div2.value);

    divResult.textContent = num1 / num2;
})

