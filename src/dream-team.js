const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {
  if (!Array.isArray(names)) return false;
  let result = "";
  for (let item of names) {
    if (typeof item === "string") {
      let letter;
      letter = item.trim().charAt(0).toUpperCase();
      result += letter;
    }
  }
  return result.split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
