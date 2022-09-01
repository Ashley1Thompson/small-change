import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_GOOD_DEED = gql`
  mutation addGoodDeed($goodDeedText: String!) {
    addGoodDeed(goodDeedText: $goodDeedText) {
      _id
      goodDeedText
      goodDeedAuthor
      createdAt
    }
  }
`;
