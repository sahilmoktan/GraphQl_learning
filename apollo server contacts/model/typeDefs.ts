export const typeDefs = `#graphql
    type Contact{
        _id: String
        person: String
        contactNumber: Int
    }

    input ContactInput{
        person: String
        contactNumber: Int
    }

    type Query{
        getContact(ID:ID!):Contact!
        getContacts(limit: Int): [Contact]
    }

    type Mutation{
        createContact(contactInput: ContactInput):String!
        updateContact(ID:ID!, contactInput: ContactInput): String!
        deleteContact(ID:ID!): String!
    }
        
`