
import { gql } from "apollo-server";



//this is schema
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

  type Mutation {
    signupUser( userNew:UserInput!  ): User
  }

  input UserInput{
    firstName:String!, lastName:String!, email:String!, password:String!
  }
`


export default typeDefs