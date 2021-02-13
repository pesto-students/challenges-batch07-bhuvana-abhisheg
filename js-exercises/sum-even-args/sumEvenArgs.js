const sumEvenArgs = (...args) => {
  let sumOfEvenArgs = 0;
  if (args !== null) {
    args.forEach(val => {
      if (val % 2 === 0) {
        sumOfEvenArgs += val;
      }
    });
    return sumOfEvenArgs;
  }
  return sumOfEvenArgs;
};

export { sumEvenArgs };