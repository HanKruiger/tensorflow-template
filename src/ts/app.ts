import * as tf from "@tensorflow/tfjs";
import "img/favicon.png";
import "scss/style.scss";

// Create some elements that will display the result.
const operand1Element = document.createElement("span");
const operatorElement = document.createElement("span");
const operand2Element = document.createElement("span");
const equalsElement = document.createElement("span");
const resultElement = document.createElement("span");

document.body.appendChild(operand1Element);
document.body.appendChild(operatorElement);
document.body.appendChild(operand2Element);
document.body.appendChild(equalsElement);
document.body.appendChild(resultElement);

operatorElement.innerHTML = "+";
equalsElement.innerHTML = "=";

const a = tf.scalar(1);
a.data().then((data) => {
    operand1Element.innerHTML = String(data[0]);
});
const b = tf.scalar(1);
b.data().then((data) => {
    operand2Element.innerHTML = String(data[0]);
});

const result = a.add(b);
result.data().then((data) => {
    resultElement.innerHTML = String(Math.round(data[0]));
});
