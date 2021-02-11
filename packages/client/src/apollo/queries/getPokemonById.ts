import { gql } from "@apollo/client";

export const GET_POKEMON_BY_ID_QUERY = gql`
  query GetPokemon($id: String!) {
    pokemonById(id: $id) {
      id
      name
      types
      classification
      resistant
      weaknesses
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      fleeRate
      evolutionRequirements {
        amount
        name
      }
      evolutions {
        id
        name
      }
      maxCP
      maxHP
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      placeholder
    }
  }
`;
