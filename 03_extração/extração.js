const extração = function (string) {
  string = string.replaceAll('.', '');
  let count = 0;
  while (string.search('<>') !== -1) {
    string = string.replace('<>', '');
    count += 1;
  }
  return count;
};

module.exports = extração;
