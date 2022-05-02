const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = "( )") {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    let index = position - 1;
    if (index < 0 || index >= this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(index, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = [];
    for (let item of this.chain) {
      result.push(`( ${item} )`);
    }
    this.chain = [];
    return result.join("~~");
  },
};

module.exports = {
  chainMaker,
};
