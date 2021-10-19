function fibReqursion(n, options) {
  let result;
  options.count = options.count + 1;
  const memo = options?.memo ?? {};
  if (!options?.memo) {
    options.memo = memo;
  }
  if (memo[n]) {
    result = memo[n];
  } else {
    if (n === 0 || n === 1) {
      result = 1;
    } else {
      result = fibReqursion(n - 1, options) + fibReqursion(n - 2, options);
    }
    memo[n] = result;
  }
  options.result = result;
  return result;
}
module.exports = { fibReqursion };
