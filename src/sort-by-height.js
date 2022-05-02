const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] === -1) continue;
      if (arr[j + 1] === -1) {
        if (
          arr[
            arr.slice(j).findIndex((item) => item !== -1 && item !== arr[j]) + j
          ] < arr[j]
        ) {
          let temp =
            arr[
              arr.slice(j).findIndex((item) => item !== -1 && item !== arr[j]) +
                j
            ];
          arr[
            arr.slice(j).findIndex((item) => item !== -1 && item !== arr[j]) + j
          ] = arr[j];
          arr[j] = temp;
        }
      } else if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight,
};
