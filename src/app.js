import "./styles.css";
// import * as math from "./modules/math";
// import * as reqursion from "./modules/reqursion";
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

const data = utils.getNumMockData(21, 99);
const sortedData = utils.getNumMockData(200, 99).sort(utils.sortIntegersFn);

console.log(data);
const el = data[Math.floor(data.length / 2)];
console.log(el);
console.log(sortedData);
// const el2 = data[Math.floor(data.length / 3)];

// const testNumberSearch = () => {
//   return search.linearSearch(data, el);
// };

// const testSeekBound = () => {
//   return search.seekBound(
//     [11, 11, 23, 23, 23, 45, 45, 66, 77, 78, 78, 78, 99, 99, 99],
//     //0  1    2  3   4    5  6   7   8   9   10  11  12  13  14
//     14,
//     -11
//   );
// };

// const testBinarySearch = () => {
//   return search.binarySearch(sortedData, el2);
// };

// utils.measure(testFib);
// utils.measure(testFibReqursion);
// utils.measure(testIsPrime);
// utils.measure(testIsPOf2);
// utils.measure(testFact);

// utils.measure(testNumberSearch);
// utils.measure(testBinarySearch);
// utils.measure(testSeekBound);

document.getElementById("app").innerHTML = `
<h1>Hello People!</h1>
<div>
  Go to console - it is alg course training ... 
  <div>
  <a href="http://direct-dev.ru" target="_blank" rel="noopener noreferrer">my home page</a>
  </div>
</div>
`;
