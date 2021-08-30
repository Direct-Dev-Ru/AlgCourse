import "./styles.css";
import * as math from "./modules/math";
import * as reqursion from "./modules/reqursion";
import * as utils from "./modules/utils";
import * as search from "./modules/search";
console.clear();

// const fibParam = 45;
// const testFib = (options) => {
//   return math.fib(fibParam, options);
// };

// const testFibReqursion = (options) => {
//   return reqursion.fibReqursion(fibParam, options);
// };

// const testIsPrime = (options) => {
//   return  math.isPrime(22777, options);
// }

// const testIsPOf2 = (options) => {
//   return math.isPof2(2048, options);
// }

// const testFact = (options) => {
//   return math.factorial(160, options);
// }

const data = utils.getNumMockData(2000, 100);
console.log(data);
const el = data[1000];

const testNumberSearch = () => {
  return search.linearSearch(data, el);
};

// utils.measure(testFib);
// utils.measure(testFibReqursion);
// utils.measure(testIsPrime);
// utils.measure(testIsPOf2);
// utils.measure(testFact);

utils.measure(testNumberSearch);

document.getElementById("app").innerHTML = `
<h1>Hello People!</h1>
<div>
  Go to console - it is alg course training ... 
  <div>
  <a href="http://direct-dev.ru" target="_blank" rel="noopener noreferrer">my home page</a>
  </div>
</div>
`;
