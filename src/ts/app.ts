import * as tf from "@tensorflow/tfjs";
import {Promise} from "es6-promise";
import "img/favicon.png";
import "scss/style.scss";

document.body.innerHTML = "Computing...";

const a = tf.scalar(1);
const b = tf.scalar(1);
const result = a.add(b);

Promise.all([a.data(), b.data(), result.data()])
    .then((data) => {
        const rounded = data.map(((x) => Math.round(x[0])));
        document.body.innerHTML = `${rounded[0]} + ${rounded[1]} = ${rounded[2]}`;
    })
    .catch((error) => {
        document.body.innerHTML = `Something went wrong: ${error}`;
    });
