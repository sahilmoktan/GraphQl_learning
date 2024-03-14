import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./SchemaGQl.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

if(process.env.NODE_ENV !=="production"){
  dotenv.config()
}

mongoose.connect(process.env.MONGO_URI,{
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
    const {userId} = jwt.verify(authorization,process.env.JWT_SECRET)
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
