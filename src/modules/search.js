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

	let count = 0;
	while (startIndex < endIndex && count < 20000) {
		
		count++;

		console.log("=============================================");
		console.log(
			"startloop:startIndex",
			startIndex,
			"startloop:endIndex",
			endIndex
		);

		let middleIndex = Math.floor((endIndex - startIndex) / 2);
		// middleIndex = seekBound(sortedArray, middleIndex, 1);
		let middleElement = sortedArray[startIndex + middleIndex];

		console.log("middleIndex", middleIndex, "middleElement", middleElement);

		if (middleElement === target) {
			console.log("bingo!!!");
			endTargetIndex = startIndex + middleIndex;
			startTargetIndex = seekBound(sortedArray, endTargetIndex, -1);
			endTargetIndex = seekBound(sortedArray, startTargetIndex, 1);
			break;
		}

		if (middleElement > target) {
			// target somethere to left (to start)
			endIndex = startIndex + middleIndex;
			endIndex > sortedArray.length - 1 ? sortedArray.length - 1 : endIndex;
		} else {
			// target somethere to right (to end)
			startIndex = startIndex + middleIndex + 1;
			startIndex < 0 ? 0 : startIndex;
		}
		console.log("endloop:startIndex", startIndex, "endloop:endIndex", endIndex);
	}

	if (startTargetIndex !== -1 && endTargetIndex !== -1) {
		for (let index = startTargetIndex; index <= endTargetIndex; index++) {
			const element = sortedArray[index];
			result.targetIndexes.push(index);
			result.targetElements.push(element);
		}
	}

	return {
		...result,
		toString: function () {
			return `Индексы: ${this.targetIndexes?.join(
				", "
			)}. Элементы: ${this.targetElements?.join(", ")}`;
		},
	};
}

module.exports = { linearSearch, binarySearch, seekBound };
