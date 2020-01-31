import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === '+/-') {
    if (total) {
      total = -total;
    } else if (next) {
      next = -next;
    }
    buttonName = null;
  }

  if (
    buttonName === '+' ||
    buttonName === '-' ||
    buttonName === '÷' ||
    buttonName === 'x'
  ) {
    if (total && next) {
      total = operate(total, next, buttonName);
      next = null;
      buttonName = null;
    }
  }

  if (buttonName === '%') {
    if (total) {
      total = operate(total, null, buttonName);
      next = null;
      buttonName = null;
    } else if (next) {
      total = operate(next, null, buttonName);
      next = null;
      buttonName = null;
    }
  }

  if (buttonName === 'AC') {
    total = null;
    next = null;
    buttonName = null;
  }

  return { total, next, operation };
};

export default calculate;
