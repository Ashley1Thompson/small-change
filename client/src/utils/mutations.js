import { gql } from '@apollo/client';

export const ADD_GOODDEED = gql`
    mutation addGoodDeed($goodDeedText: String!) {
        addGoodDeed(goodDeedText: $goodDeedText) {
            _id
            goodDeedText
            goodDeedAuthor
            createdAt
        }
    }
`;
