import { GraphQLServer } from 'graphql-yoga';
import { Engine } from 'apollo-engine';
import compression from 'compression';

import { typeDefs } from '../schema';
import { resolvers } from '../resolvers';

const server = new GraphQLServer({ typeDefs, resolvers });

const engine = new Engine({
  engineConfig: { apiKey: process.env.APOLLO_ENGINE_KEY },
  endpoint: '/',
  graphqlPort: parseInt(process.env.PORT, 10) || 4000,
});
engine.start();

// Enable gzip compression
// ref: https://www.apollographql.com/docs/engine/setup-node.html#enabling-compression
server.express.use(compression());
server.express.use(engine.expressMiddleware());

server.start({
  tracing: true,
  cacheControl: true,
}, () => console.log(`Server is running on localhost:${process.env.PORT}`));
