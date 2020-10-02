const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const ENCODE = 'encode';

const cryptoAction = (text, shift, mode = ENCODE) => {
  if(mode !== ENCODE) {
    shift *= -1;
  }

  return text.split('').map(symbol => {
    const lowerCaseSymbol = symbol.toLowerCase();
    const index = alphabet.indexOf(lowerCaseSymbol);

    if(index !== -1) {
      const isLowerCase = symbol === lowerCaseSymbol;
      console.log(isLowerCase);
      let shiftIndex = (index + shift) % alphabet.length;
      if(shiftIndex < 0) {
        shiftIndex += alphabet.length;
      }
      let resultSymbol = alphabet[shiftIndex];
      if(!isLowerCase) {
        resultSymbol = resultSymbol.toUpperCase();
      }
      return resultSymbol;
    }else {
      return symbol;
    }
  }).join('');
}
