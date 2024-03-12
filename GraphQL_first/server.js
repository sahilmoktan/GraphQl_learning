import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./SchemaGQl.js";
import resolvers from "./resolvers.js";





//apollo server
const server = new ApolloServer({
  typeDefs, //key and value same huda key matra rakhda hunxa
  resolvers, // key & value same
  plugins:[ApolloServerPluginLandingPageGraphQLPlayground()]
});

//port listning
server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
