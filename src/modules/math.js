function fib(n, logging = false) {
  const fibSequence = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    fibSequence.push(fibSequence[i - 2] + fibSequence[i - 1]);
  }
  logging && console.log(fibSequence);
  return fibSequence[n];
}

function isPrime(number) {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      console.log(i);

      return false;
    }
  }
  return true;
}

function isPowerOfTwo(number) {
  if (typeof number !== "number") {
    return false;
  }
  if (number === 0) {
    return 0;
  }
  let bExit = false;
  let restNumber = number;
  while (bExit) {
    if (restNumber === 1 || restNumber === 0) {
      bExit = true;
      break;
    }
    restNumber = number - Math.floor(number / 2);
  }
  return restNumber === 0;
}

module.exports = { fib, isPrime, isPof2: isPowerOfTwo };
