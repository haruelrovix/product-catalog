const { graphql } = require('graphql');
const chai = require('chai');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs } = require('./index');
const { resolvers } = require('../resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const { expect } = chai;

describe('Schema', () => {
  // Tests Product
  it('Allows us to query Product', () => {
    const query = `
      query ProductQuery($id: ID) {
        product(id: $id) {
          id
          title
          slug
          descriptionMarkdown
          quantity
          price {
            amount
            currency
          }
          category
          images {
            fullUrl
          }
        }
      }
    `;

    const params = { id: 'd9d2ba40-a1a9-4377-b3a0-cae50216e8f1' };
    return graphql(schema, query, null, null, params)
      .then(({ data }) => {
        expect(data.product).to.have.all.keys([
          'id', 'title', 'slug', 'descriptionMarkdown',
          'category', 'images', 'quantity', 'price',
        ]);
      });
  });

  // Tests Catalogue
  it('Allows us to query Catalogue', () => {
    const query = `
      query GetCatalogue($amount: Int, $offset: Int) {
        catalogue(amount: $amount, offset: $offset) {
          id
          title
          metaTitle
          product {
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
                fullUrl
              }
            }
          }
        }
      }
    `;

    const params = { amount: 0, offset: 1 };
    return graphql(schema, query, null, null, params)
      .then(({ data }) => {
        expect(data.catalogue).to.have.all.keys([
          'id', 'title', 'metaTitle', 'product',
        ]);
      });
  });
});
