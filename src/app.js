import "./styles.css";
import * as math from "./modules/math";
import * as reqursion from "./modules/reqursion";
import * as utils from "./modules/utils";
console.clear();

const testFib = () => math.fib(50, false);
const testFibReqursion = () => reqursion.fibReqursion(25);
//const testIsPrime = () => math.isPrime(22777);
// const testIsPOf2 = () => math.isPof2(2048);
//const testFact = () => math.factorial(160);

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
