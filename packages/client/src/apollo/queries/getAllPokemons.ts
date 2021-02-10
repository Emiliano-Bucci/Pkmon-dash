import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS_QUERY = gql`
  query GetAllPokemons($q: String, $after: ID, $limit: Int, $type: String) {
    pokemons(q: $q, after: $after, limit: $limit, type: $type) {
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
