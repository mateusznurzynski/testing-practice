const capitalize = (string) => {
  if (typeof string !== 'string') {
    return false;
  }
  const firstLetter = string.charAt(0);
  const arrayString = string.split('');
  arrayString[0] = firstLetter.toUpperCase();
  return arrayString.join('');
};

export { capitalize };
