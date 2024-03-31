import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { connect } from "mongoose";
import { typeDefs } from "../model/typeDefs.js";
import { resolvers } from "../model/resolvers.js";
const MONGODB = "mongodb://localhost:27017/apolloContacts";
const PORT = process.env.PORT || 3000;
await connect(MONGODB);
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`Server is ready at ${url}`);
