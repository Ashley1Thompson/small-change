import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      goodDeeds {
        _id
        goodDeedText
        createdAt
      }
    }
  }
`;

export const QUERY_GOOD_DEEDS = gql`
  query getGoodDeeds {
    goodDeeds {
      _id
      goodDeedText
      goodDeedAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_DEED = gql`
  query getSingleGoodDeed($goodDeedId: ID!) {
    goodDeed(goodDeedId: $goodDeedId) {
      _id
      goodDeedText
      goodDeedAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      goodDeeds {
        _id
        goodDeedText
        goodDeedAuthor
        createdAt
      }
    }
  }
`;