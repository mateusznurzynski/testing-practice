const reverseString = (string) => {
  if (typeof string !== 'string') {
    return false;
  }
  const array = string.split('');
  array.reverse();

  const reversedString = array.join('');

  return reversedString;
};

export { reverseString };
