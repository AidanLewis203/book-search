import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query getUser ($username: String!) {
    getUser (username: $username) {
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;