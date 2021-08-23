import "./styles.css";
import * as math from "./modules/math";
import * as utils from "./modules/utils";
console.clear();

// const testFib = () => math.fib(100, true);
//const testIsPrime = () => math.isPrime(22777);
const testIsPOf2 = () => math.isPof2(2048);

// utils.measure(testFib);
//utils.measure(testIsPrime);
utils.measure(testIsPOf2);

document.getElementById("app").innerHTML = `
<h1>Hello People!</h1>
<div>
  Go to console - it is alg course training ... 
  <div>
  <a href="http://direct-dev.ru" target="_blank" rel="noopener noreferrer">my home page</a>
  </div>
</div>
`;
