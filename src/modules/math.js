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

module.exports = { fib, isPrime };