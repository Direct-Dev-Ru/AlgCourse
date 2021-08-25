function fibReqursion(n, options = {}) {
  if (n === 0 || n === 1) {
    return 1;
  }
  options.count = options.count + 1;
  const result = fibReqursion(n - 1, options) + fibReqursion(n - 2, options);
  options.result = result;
  return result;
}

module.exports = { fibReqursion };
