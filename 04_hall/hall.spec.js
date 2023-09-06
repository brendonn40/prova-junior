const hall = require('./hall');

describe('Hall dos assassinos', () => {
  test('teste 1', () => {
    expect(
      hall([
        'Arya Meryn',
        'Meryn Syrio',
        'Brienne Stannis',
        'Ellaria Myrcella',
        'Jaime Aerys',
        'Brienne Jaime',
      ])
    ).toEqual('HALL DOS ASSASSINOS Arya 1 Brienne 2 Ellaria 1');
  });
  test('teste 2', () => {
    expect(
      hall([
        'Jon Tyrion',
        'Arya Meryn',
        'Meryn Syrio',
        'Arya Cersei',
        'Jon Daenarys',
        'Brienne Stannis',
        'Ellaria Myrcella',
        'Jaime Aerys',
        'Brienne Jaime',
      ])
    ).toEqual('HALL DOS ASSASSINOS Arya 2 Brienne 2 Ellaria 1 Jon 2');
  });
});
