const { catalogue } = require('../mock');

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,

    product: (_, { id }) => {
      const path = id && id.length > 0 && id[0] === '/';

      const result = catalogue.product.items.find(product =>
        path ?
          product.slug === id.substr(1) :
          product.id === id
      );

      return result ? result : { id, slug: '' };
    },

    catalogue: (_, { amount, offset }) => {
      const begin = amount * offset;
      const end = amount * (offset + 1);
      const items = catalogue.product.items.slice(begin, end);

      const product = {
        ...catalogue.product,
        items,
        amount,
        offset,
        remaining: (catalogue.product.total - ((offset + 1) * amount)),
      };

      return {
        ...catalogue,
        product,
      };
    },
  },
};

module.exports = { resolvers };
