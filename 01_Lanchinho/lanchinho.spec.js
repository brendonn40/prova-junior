const lanchinho = require('./lanchinho');

describe('Lanchinho', () => {
  test('teste 1', () => {
    expect(lanchinho(3, 2)).toEqual('Total: R$ 10.00');
  });

  test('teste 2', () => {
    expect(lanchinho(4, 3)).toEqual('Total: R$ 13.50');
  });

  test('teste 3', () => {
    expect(lanchinho(2, 3)).toEqual('Total: R$ 13.50');
  });
});
