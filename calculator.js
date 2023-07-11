const calculator = {
  checkParams(...params) {
    let valid = true;
    params.forEach((param) => {
      if (typeof param !== 'number') {
        valid = false;
      }
    });

    return valid;
  },

  add(firstNum, secondNum) {
    if (!this.checkParams(firstNum, secondNum)) {
      return NaN;
    }
    return firstNum + secondNum;
  },

  subtract(firstNum, secondNum) {
    return firstNum - secondNum;
  },

  divide(firstNum, secondNum) {
    const result = parseFloat(firstNum / secondNum);
    if (Number.isNaN(result)) {
      return result;
    }
    if (Number.isInteger(result)) {
      return result;
    }

    return parseFloat(result.toFixed(2));
  },

  multiply(firstNum, secondNum) {
    return firstNum * secondNum;
  },
};

export { calculator };
