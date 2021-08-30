function linearSearch(
  data,
  element,
  compareFn = () => 0 === 1,
  options = { caseSensivity: false }
) {
  let index;
  let __element = element;
  for (let item of data) {
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
    index++;
  }
}

module.exports = { linearSearch };
