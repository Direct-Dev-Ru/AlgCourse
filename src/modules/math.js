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
module.exports = { fib, isPrime, isPof2: isPowerOfTwo };
