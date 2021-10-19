function linearSearch(
  data,
  element,
  compareFn = () => false,
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

function binarySearch(sortedArray, element) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  let direction = "middle"; //"left/right/middle"
  let result = [];
  if (result.length === 0) {
    return result;
  }
  while (startIndex < endIndex) {
    let middleIndex = Math.floor(sortedArray.length / 2);
    let middleElement = sortedArray[middleIndex];
    if (middleIndex < endIndex) {
      for (let index = middleIndex + 1; index <= endIndex; index++) {
        const element = sortedArray[index];
        if (element !== middleElement) {
          middleIndex = index - 1;
          break;
        }
      }
    }
    middleElement = sortedArray[middleIndex];

    if (middleElement)

  }
}

module.exports = { linearSearch, binarySearch };
