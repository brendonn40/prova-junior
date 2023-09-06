const fibonacci = require('./fibonacci');

describe('Fibonacci', () => {
  test('teste 1', () => {
    expect(fibonacci(0)).toEqual(0);
  });
  test('teste 2', () => {
    expect(fibonacci(1)).toEqual(1);
  });

  test('teste 3', () => {
    expect(fibonacci(2)).toEqual(1);
  });
  test('teste 4', () => {
    expect(fibonacci(3)).toEqual(2);
  });
  test('teste 5', () => {
    expect(fibonacci(4)).toEqual(3);
  });
});
