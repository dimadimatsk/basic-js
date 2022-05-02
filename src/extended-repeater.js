const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  const defParams = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 0,
    additionSeparator: "|",
  };

  const finalParams = { ...defParams, ...options };
  let res = "";
  let additionStr = "";
  for (let i = 0; i < finalParams["additionRepeatTimes"] - 1; i++) {
    additionStr += finalParams["addition"] + finalParams["additionSeparator"];
  }
  additionStr += finalParams["addition"];
  console.log(additionStr);
  for (let j = 0; j < finalParams["repeatTimes"] - 1; j++) {
    res += str + additionStr + finalParams["separator"];
  }
  res += str + additionStr;
  console.log(res);
  return res;
}
module.exports = {
  repeater,
};
