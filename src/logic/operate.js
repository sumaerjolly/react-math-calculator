import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  try {
    const bigOne = Big(numberOne);
    const bigTwo = Big(numberTwo);
    if (operation === '+') {
      return bigOne.plus(bigTwo).toString();
    }
    if (operation === '-') {
      return bigOne.minus(bigTwo).toString();
    }
    if (operation === 'x') {
      return bigOne.times(bigTwo).toString();
    }
    if (operation === '%') {
      return bigOne.div(100).toString();
    }
    if (operation === '÷' && bigTwo !== 0) {
      return bigOne.div(bigTwo).toString();
    }
  } catch (e) {
    return 'Infinity';
  }
  return null;
};

export default operate;
