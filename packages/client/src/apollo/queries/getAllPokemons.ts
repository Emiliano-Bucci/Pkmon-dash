import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS_QUERY = gql`
  query GetAllPokemons {
    pokemons {
      edges {
        node {
          id
          name
          types
        }
      }
    }
  }
`;
