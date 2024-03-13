import { gql } from "apollo-server";

//this is schema
const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [QuoteByname]
    iqoute(by: ID!): [Quote]
  }
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    quotes: [Quote]
  }
  type Quote {
    name: String
    by: ID
  }

  type QuoteByname {
    name: String
    by: IdName
  }

  type IdName {
    _id: String
    firstName: String
  }

  type Token {
    token: String
  }

  type Mutation {
    signupUser(userNew: UserInput!): User
    signinUser(userSignin: UserSigninInput!): Token
    createQuote(name: String!): String
    updateUser(_id: ID!, input: UpdateUserInput!): User
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input UserSigninInput {
    email: String!
    password: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    email: String
  }
`;

export default typeDefs;
