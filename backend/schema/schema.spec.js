import { graphql } from 'graphql';
import chai from 'chai';
import { makeExecutableSchema } from 'graphql-tools';

import { typeDefs } from './index';
import { resolvers } from '../resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const expect = chai.expect;

describe('Schema', () => {
  // Tests Product
  it('Allows us to query Product', () => {
    const query = `
      query ProductQuery {
        product {
          id
          title
          quantity
          price {
            amount
            currency
          }
          category
          images {
            id
            url
          }
        }
      }
    `;

    return graphql(schema, query)
      .then(({ data }) => {
        expect(data.product).to.have.all.keys([
          'id', 'title', 'category', 'images', 'quantity', 'price'
        ]);
      });
  });

  // Tests Catalogue
  it('Allows us to query Catalogue', () => {
    const query = `
      query CatalogueQuery {
        catalogue {
          id
          title
          metaTitle
          items {
            id
            title
            quantity
            price {
              amount
              currency
            }
            category
            images {
              id
              url
            }
          }
        }
      }
    `;

    return graphql(schema, query)
      .then(({ data }) => {
        expect(data.catalogue).to.have.all.keys([
          'id', 'items', 'title', 'metaTitle'
        ]);
      });
  });
});
