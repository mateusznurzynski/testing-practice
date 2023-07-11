const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'r',
  's',
  't',
  'u',
  'w',
  'x',
  'y',
  'z',
];

const caesarCipher = (string, shift) => {
  const array = string.split('');
  const shiftedArray = [];

  array.forEach((character) => {
    if (!alphabet.includes(character.toLowerCase())) {
      shiftedArray.push(character);
      return false;
    }
    const isUpperCase = character === character.toUpperCase();
    const currentIndex = alphabet.indexOf(character.toLowerCase());
    let shiftedIndex = currentIndex + shift;
    if (shiftedIndex > alphabet.length - 1) {
      shiftedIndex -= alphabet.length;
    }
    const newCharacter = alphabet[shiftedIndex];
    if (isUpperCase) {
      shiftedArray.push(newCharacter.toUpperCase());
    } else {
      shiftedArray.push(newCharacter);
    }
  });

  return shiftedArray.join('');
};

export { caesarCipher };
