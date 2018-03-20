import catalogue from '../mock';

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,

    product: (_, { id }) => catalogue.items.find(product => product.id === id),

    catalogue: () => catalogue,
  },
};

module.exports = { resolvers };
