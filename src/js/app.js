import "scss/style.scss";
import "img/favicon.png";
import * as dl from "deeplearn"; // If not loading the script as a global

const a = dl.tensor1d([1, 2, 3]);
const b = dl.scalar(2);

const result = a.add(b); // a is not modified, result is a new tensor
result.data().then(data => console.log(data)); // Float32Array([3, 4, 5]

// Alternatively you can use a blocking call to get the data.
// However this might slow your program down if called repeatedly.
console.log(result.dataSync()); // Float32Array([3, 4, 5]
