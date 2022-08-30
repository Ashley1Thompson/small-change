const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    goodDeeds: [GoodDeed]!
  }

  type GoodDeed {
    _id: ID
    goodDeedText: String
    goodDeedAuthor: String
    createdAt: String
  }

  type Query {
    users: [User]
    goodDeeds(username: String): [GoodDeed]
    me: User
  }

  type Mutation {
    addUser (username: String!, email: String!, password: String!): Auth
    login (email: String!, password: String!): Auth
    addGoodDeed (goodDeedText: String!): GoodDeed
    removeGoodDeed (goodDeedId: ID!): GoodDeed
  }
`;

module.exports = typeDefs;