const genio = require('./genio');

describe('genio', () => {
  test('queue', () => {
    expect(
      genio([
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 1],
        [2, 2],
        [2, 3],
      ])
    ).toEqual('queue');
  });
  test('not sure', () => {
    expect(
      genio([
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 3],
        [2, 2],
        [2, 1],
      ])
    ).toEqual('not sure');
  });

  test('impossible', () => {
    expect(
      genio([
        [1, 1],
        [2, 2],
      ])
    ).toEqual('impossible');
  });
  test('stack', () => {
    expect(
      genio([
        [1, 2],
        [1, 1],
        [2, 1],
        [2, 2],
      ])
    ).toEqual('stack');
  });
  test('priority queue', () => {
    expect(
      genio([
        [1, 2],
        [1, 5],
        [1, 3],
        [2, 5],
        [1, 4],
        [2, 4],
      ])
    ).toEqual('priority queue');
  });
});
