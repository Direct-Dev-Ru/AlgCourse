import "./styles.css";
import * as math from "./modules/math";
import * as reqursion from "./modules/reqursion";
import * as utils from "./modules/utils";
console.clear();

const testFib = (options) => {
  return math.fib(50, options);
};

const testFibReqursion = (options) => {
  return reqursion.fibReqursion(25, options);
};

// const testIsPrime = (options) => {
//   return  math.isPrime(22777, options);
// }

// const testIsPOf2 = (options) => {
//   return math.isPof2(2048, options);
// }

// const testFact = (options) => {
//   return math.factorial(160, options);
// }

utils.measure(testFib);
utils.measure(testFibReqursion);
//utils.measure(testIsPrime);
// utils.measure(testIsPOf2);
// utils.measure(testFact);

document.getElementById("app").innerHTML = `
<h1>Hello People!</h1>
<div>
  Go to console - it is alg course training ... 
  <div>
  <a href="http://direct-dev.ru" target="_blank" rel="noopener noreferrer">my home page</a>
  </div>
</div>
`;
