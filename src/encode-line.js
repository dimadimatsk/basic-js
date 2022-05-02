const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let temp = str.split("");
  let result = "";
  let counter = 1;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === temp[i + 1]) {
      counter += 1;
    } else {
      if (counter === 1) {
        result += temp[i];
        counter = 1;
      } else {
        result += counter + temp[i];
        counter = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
