import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./SchemaGQl.js";
import mongoose from "mongoose";
import { JWT_SECRET, MONGO_URI } from "./config.js";
import jwt from "jsonwebtoken";

mongoose.connect(MONGO_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
  console.log("Connected to Mongodb")
})

mongoose.connection.on("error",()=>{
  console.log("error connecting", err)
})

//should import resolver after connection
import "./models/Quotes.js"
import "./models/User.js"
import resolvers from "./resolvers.js";


//seperation context
const context=({req})=>{
  //this function run always before req hit to resolver like middleware
  //here token is compaired and matched to verify authenticated user
  const {authorization} = req.headers
  if (authorization){
    const {userId} = jwt.verify(authorization,JWT_SECRET)
    return {userId}
  }
}


//apollo server
const server = new ApolloServer({
  typeDefs, //key and value same huda key matra rakhda hunxa
  resolvers, // key & value same
  context,
  plugins:[ApolloServerPluginLandingPageGraphQLPlayground()]
});

//port listning
server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
