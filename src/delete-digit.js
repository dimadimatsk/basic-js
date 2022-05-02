const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let temp = [];
  let nTemp = n.toString();
  for (let i = 0; i < n.toString().length; i++) {
    temp.push(nTemp.replace(nTemp[i], ""));
  }
  return Math.max(...temp);
}

module.exports = {
  deleteDigit,
};
