import { ApolloServer } from 'apollo-server-express';
import app from './app';
import { typeDefs, resolvers } from './graphql/schema';

const port = 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () => {
  console.log(`League Stats server started at localhost:${port}${server.graphqlPath}...`);
});
