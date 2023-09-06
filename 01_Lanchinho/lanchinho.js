const lanchinho = function (code, quantity) {
  const lanches = [
    {
      code: 1,
      name: 'Cachorro quente',
      price: 3,
    },
    {
      code: 2,
      name: 'X-Salada',
      price: 2.5,
    },
    {
      code: 3,
      name: 'X-Bacon ',
      price: 5,
    },
    {
      code: 4,
      name: 'Torrada simples',
      price: 4.5,
    },
    {
      code: 5,
      name: 'Refrigerante',
      price: 1.5,
    },
  ];
  const total = lanches.reduce(
    (acc, item) =>
      item.code === code ? (acc += item.price * quantity) : (acc += 0),
    0
  );
  return `Total: R$ ${total.toFixed(2)}`;
};

module.exports = lanchinho;
