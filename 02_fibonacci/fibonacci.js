const fibonacci = function (number) {
  if (number < 0 || number > 45) {
    throw new Error('Número deve ser entre 0 e 45');
  }
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
};

module.exports = fibonacci;
