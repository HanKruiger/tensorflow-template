import * as tf from "@tensorflow/tfjs";
import "img/favicon.png";
import "scss/style.scss";

const a = tf.tensor1d([1, 2, 3]);
const b = tf.scalar(2);

const result = a.add(b);
result.data().then((data) => console.log(data));
