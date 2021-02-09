import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS_QUERY = gql`
  query GetAllPokemons($q: String, $after: ID, $limit: Int) {
    pokemons(q: $q, after: $after, limit: $limit) {
      edges {
        node {
          id
          name
          types
          classification
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
