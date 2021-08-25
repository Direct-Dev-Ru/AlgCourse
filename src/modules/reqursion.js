function fibReqursion(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return fibReqursion(n - 1) + fibReqursion(n - 2);
}

module.exports = { fibReqursion };
