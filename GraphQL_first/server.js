import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { quotes, users } from "./fakedb.js";


//this is schema
    //q
const typeDefs = gql`
 type Query {  
    users: [User]
    user(id:ID!):User
    quotes: [Quote]
    iqoute (by:ID!) : [Quote]
  }
  type User{
    id:ID!
    firstName:String
    lastName:String
    email:String
    password:String
    quotes:[Quote]  
  }
  type Quote{
    name:String
    by:ID
  }
`



//this is resolver for query
const resolvers = {
  Query: {
    users:()=> users,
    user:(_,{id})=>users.find(user=>user.id ==id),
    quotes:()=> quotes,
    iqoute: (_,{by})=>quotes.filter(quotes=>quotes.by ==by),
  },
  User:{
    quotes:(person)=>quotes.filter(quote=>quote.by == person.id)   // type User vitra ko quotes:[Quote] lai mongoo ma populate gareko jastai gari resolve gardai xa
  }
};


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
