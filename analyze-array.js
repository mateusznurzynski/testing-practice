const analyzeArray = (array) => {
  const numbers = array.filter((element) => {
    if (typeof element === 'number' && !Number.isNaN(element)) {
      return true;
    }
    return false;
  });

  let sum = 0;
  const returnObject = {
    length: numbers.length,
    average: numbers.length > 0 ? 0 : null,
    min: numbers.length > 0 ? numbers[0] : null,
    max: numbers.length > 0 ? numbers[0] : null,
  };
  if (returnObject.length <= 0) {
    return returnObject;
  }

  numbers.forEach((number) => {
    sum += number;
    if (number < returnObject.min) {
      returnObject.min = number;
    }
    if (number > returnObject.max) {
      returnObject.max = number;
    }
  });
  returnObject.average = parseFloat(sum / returnObject.length);

  return returnObject;
};

export { analyzeArray };
