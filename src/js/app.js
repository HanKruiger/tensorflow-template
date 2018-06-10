import "scss/style.scss";
import "img/favicon.png";
import * as tf from '@tensorflow/tfjs';

const a = tf.tensor1d([1, 2, 3]);
const b = tf.scalar(2);

const result = a.add(b); // a is not modified, result is a new tensor
result.data().then(data => console.log(data)); // Float32Array([3, 4, 5]

// Alternatively you can use a blocking call to get the data.
// However this might slow your program down if called repeatedly.
console.log(result.dataSync()); // Float32Array([3, 4, 5]
