import "./styles.css";
import * as math from "./modules/math";
import * as utils from "./modules/utils";
console.clear();

// const testFib = () => math.fib(100, true);
const testIsPrime = () => math.isPrime(22777);

// utils.measure(testFib);
utils.measure(testIsPrime);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
