const extração = require('./extração');

describe('Extração', () => {
  test('teste 1', () => {
    expect(extração('<..><.<..>>')).toEqual(3);
  });
  test('teste 2', () => {
    expect(extração('<<<..<......<<<<....>')).toEqual(1);
  });

  test('teste 3', () => {
    expect(extração('>>>...<<<')).toEqual(0);
  });
});
