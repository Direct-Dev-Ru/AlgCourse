function fib(n, options = {}) {
  const fibSequence = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    fibSequence.push(fibSequence[i - 2] + fibSequence[i - 1]);
  }
  options?.logging && console.log(fibSequence);
  options.count = options.count + 1;
  const result = fibSequence[n];
  options.result = result;
  return result;
}

function isPrime(number, options = {}) {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      options.count = options.count + 1;
      const result = false;
      options.result = result;

      return result;
    }
  }

  options.count = options.count + 1;
  const result = true;
  options.result = result;

  return result;
}

// function isPowerOfTwo(number) {
//   if (typeof number !== "number") {
//     return false;
//   }
//   if (number < 1) {
//     return false;
//   }

//   let restNumber = number;
//   while (restNumber !== 1) {
//     if (restNumber % 2 !== 0) {
//       return false;
//     }
//     restNumber = restNumber / 2;
//   }
//   return true;
// }
function isPowerOfTwo(number) {
  if (typeof number !== "number") {
    return false;
  }
  if (number < 1) {
    return false;
  }

  return (number & (number - 1)) === 0;
}

function factorial(number) {
  if (typeof number !== "number") {
    return NaN;
  }
  if (number < 1) {
    return NaN;
  }
  let result = 1;

  for (let i = 2; i < number; i++) {
    result = result * i;
  }

  return result;
}

module.exports = { fib, isPrime, isPof2: isPowerOfTwo, factorial };
