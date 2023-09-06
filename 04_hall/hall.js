const hall = function (list) {
  let killers = [];
  let killed = [];
  for (const kill of list) {
    const names = kill.split(' ');
    const killer = names[0];
    const vitim = names[1];
    const current = killers.findIndex((item) => item.name === killer);
    if (current !== -1) {
      killers[current].count += 1;
    } else {
      killers.push({
        name: killer,
        count: 1,
      });
    }
    killed.push(vitim);
  }
  const alive = killers.filter((item) => {
    if (!killed.includes(item.name)) {
      return item;
    }
  });
  sorted = alive.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });

  const string = sorted.reduce(
    (acc, item) => (acc += ` ${item.name} ${item.count}`),
    ''
  );
  return 'HALL DOS ASSASSINOS' + string;
};

module.exports = hall;
