const genio = function (list) {
  let ins = [];
  let outs = [];
  for (const coord of list) {
    if (coord[0] === 1) {
      ins.push(coord[1]);
    } else if (coord[0] === 2) {
      outs.push(coord[1]);
    } else {
      throw new Error('Invalid input');
    }
  }
  const isQueue = ins.join('') === outs.join('');
  const isStack = ins.join('') === outs.reverse().join('');
  const priorityQueue = ins
    .sort(function (a, b) {
      return b - a;
    })
    .join('')
    .includes(outs.reverse().join(''));

  if (isQueue) {
    return 'queue';
  }
  if (isStack && priorityQueue) {
    return 'not sure';
  }
  if (isStack) {
    return 'stack';
  }
  if (priorityQueue) {
    return 'priority queue';
  }
  return 'impossible';
};

module.exports = genio;
