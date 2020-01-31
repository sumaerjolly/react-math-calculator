import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const bigOne = Big(numberOne);
  const bigTwo = Big(numberTwo);
  if (operation === '+') {
    return bigOne.plus(bigTwo);
  }
  if (operation === '-') {
    return bigOne.minus(bigTwo);
  }
  if (operation === '÷') {
    return bigOne.div(bigTwo);
  }
  if (operation === '×') {
    return bigOne.times(bigTwo);
  }
  if (operation === '%') {
    return bigOne.div(100);
  }
  return false;
};

export default operate;
