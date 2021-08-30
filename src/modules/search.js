function linearSearch(
  data,
  element,
  compareFn = () => 0 === 1,
  options = { caseSensivity: false }
) {
  let index = -1;
  let __element = element;
  for (let item of data) {
    index++;
    if (typeof item === "object") {
      if (compareFn(item, __element)) {
        return index;
      }
    } else if (typeof item === "string") {
      if (options?.caseSensivity ?? false) {
        item = item.toLocaleLowerCase();
        __element = __element.toLocaleLowerCase();
      }
      if (item === __element) {
        return index;
      }
    } else {
      if (item === element) {
        return index;
      }
    }
  }
  return -1;
}

module.exports = { linearSearch };
