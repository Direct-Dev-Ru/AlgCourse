function fibReqursion(n, options = {}) {
  if (n === 0 || n === 1) {
    return 1;
  }
  options.count = options.count + 1;
  return fibReqursion(n - 1, options) + fibReqursion(n - 2, options);
}

module.exports = { fibReqursion };
