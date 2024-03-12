import { ApolloServer, gql } from "apollo-server";

import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

//this is schema
const typeDefs = gql`
  type Query {
    greet: String
  }
`;

//this is resolver for query
const resolvers = {
  Query: {
    greet: () => {
      "hello world graphql";
    },
  },
};

//apllo server
const server = new ApolloServer({
  typeDefs, //key and value same huda key matra rakhda hunxa
  resolvers, // key & value same
  plugins:[ApolloServerPluginLandingPageGraphQLPlayground()]
});

//port listning
server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
