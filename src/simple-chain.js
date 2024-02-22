const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainItems: [],
  getLength() {
    return this.chainItems.length;
  },
  addLink(value) {
    if (typeof (value) === "undefined") {
      this.chain.push(`(  )`);
    } else {
      const item = `( ${value} )`;
      this.chainItems.push(item);
    }
    return this;
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      position < 1 ||
      position > this.chainItems.length

    ) {
      this.chainItems = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainItems.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainItems.reverse();
    return this;
  },
  finishChain() {
    const result = this.chainItems.join('~~');
    this.chainItems = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
