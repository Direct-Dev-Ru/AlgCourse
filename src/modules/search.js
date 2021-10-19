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

function seekBound(arr, startIndex, direction = 1) {
  if ((arr?.length ?? 0) === 0) {
    return -1;
  }
  if (startIndex > arr.length - 1) {
    return -1;
  }

  if (startIndex === 0 && direction < 0) {
    return 0;
  }

  if (startIndex === arr.length - 1 && direction > 0) {
    return arr.length - 1;
  }

  let startElement = arr[startIndex];
  let resultIndex = -1;
  if (direction > 0) {
    // search up to end of array
    const endIndex = arr.length - 1;

    for (let index = startIndex + 1; index <= endIndex; index++) {
      const element = arr[index];
      if (element !== startElement) {
        resultIndex = index - 1;
        break;
      }
    }
  } else {
    // search down to beggining of array
    for (let index = startIndex - 1; index >= 0; index--) {
      const element = arr[index];
      if (element !== startElement) {
        resultIndex = index + 1;
        break;
      }
    }
  }
  return resultIndex;
}

function binarySearch(sortedArray, target) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  // let direction = "middle"; //"left/right/middle"
  let result = { targetIndexes: [], targetElements: [], target };
  let endTargetIndex = -1;
  let startTargetIndex = -1;

  console.log(target, startIndex, endIndex);

  let count = 0;
  while (
    (startIndex < endIndex &&
      startIndex >= 0 &&
      endIndex <= sortedArray.length - 1) ||
    count < 10
  ) {
    // let middleIndex = Math.floor(sortedArray.length / 2);
    let middleIndex = Math.floor((endIndex - startIndex) / 2);
    middleIndex = seekBound(sortedArray, middleIndex, 1);
    let middleElement = sortedArray[middleIndex];
    console.log(middleIndex, middleElement);
    count++;
    if (middleElement === target) {
      endTargetIndex = middleIndex;
      startTargetIndex = seekBound(sortedArray, endTargetIndex, -1);
      break;
    }

    if (middleElement > target) {
      // target somethere to left (to start)
      endIndex = middleIndex;
    } else {
      // target somethere to right (to end)
      startIndex = middleIndex;
    }
  }
  if (startTargetIndex !== -1 && endTargetIndex !== -1) {
    for (let index = startTargetIndex; index <= endTargetIndex; index++) {
      const element = sortedArray[index];
      result.targetIndexes.push(index);
      result.targetElements.push(element);
    }
  }
  return result;
}

module.exports = { linearSearch, binarySearch, seekBound };
