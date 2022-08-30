const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    goodDeed: []
  }

  type GoodDeed {
    _id: ID!
    goodDeedText: String!
    goodDeedAuthor: String!
    createdAt: String
  }

  type Query {
    me: User
    deed: GoodDeed
  }

  type Mutation {
    login (email: String!, password: String!): Auth
    addUser ()username: String!, email: String!, password: String!): Auth 
    addGoodDeed (goodDeedText: {}): User
    deleteGoodDeed (goodDeedText: {}): User
  }
`;

module.exports = typeDefs;