const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return [];
  let next = "--discard-next";
  let prev = "--discard-prev";
  let doubleNext = "--double-next";
  let doublePrev = "--double-prev";
  let tempArr = [...arr];
  if (
    !tempArr.includes(next) &&
    !tempArr.includes(prev) &&
    !tempArr.includes(doubleNext) &&
    !tempArr.includes(doublePrev)
  ) {
    return arr;
  }
  for (let i = 0; i < tempArr.length; i++) {
    if (
      tempArr[i] === next &&
      tempArr[i + 1] &&
      typeof +tempArr[i + 1] == "number"
    ) {
      tempArr.splice(i + 1, 1);
    } else if (
      tempArr[i] === prev &&
      tempArr[i - 1] &&
      typeof +tempArr[i - 1] == "number"
    ) {
      tempArr.splice(i - 1, 1);
      i -= 1;
    } else if (
      tempArr[i] === doublePrev &&
      tempArr[i - 1] &&
      typeof +tempArr[i - 1] == "number"
    ) {
      tempArr.splice(i - 1, 0, tempArr[i - 1]);
      i += 1;
    } else if (
      tempArr[i] === doubleNext &&
      tempArr[i + 1] &&
      typeof +tempArr[i + 1] == "number"
    ) {
      tempArr.splice(i + 1, 0, tempArr[i + 1]);
    }
  }
  return tempArr.filter((item) => {
    return (
      item !== next &&
      item !== prev &&
      item !== doubleNext &&
      item !== doublePrev
    );
  });
}

module.exports = {
  transform,
};
