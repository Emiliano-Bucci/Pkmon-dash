

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPokemons
// ====================================================

export interface GetAllPokemons_pokemons_edges_node {
  id: string;
  name: string | null;
  types: (PokemonTypes | null)[] | null;
}

export interface GetAllPokemons_pokemons_edges {
  node: GetAllPokemons_pokemons_edges_node | null;
}

export interface GetAllPokemons_pokemons {
  edges: (GetAllPokemons_pokemons_edges | null)[] | null;
}

export interface GetAllPokemons {
  pokemons: GetAllPokemons_pokemons | null;
}

export interface GetAllPokemonsVariables {
  q?: string | null;
  after?: string | null;
  limit?: number | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum PokemonTypes {
  Bug = "Bug",
  Dragon = "Dragon",
  Electric = "Electric",
  Fairy = "Fairy",
  Fighting = "Fighting",
  Fire = "Fire",
  Flying = "Flying",
  Ghost = "Ghost",
  Grass = "Grass",
  Ground = "Ground",
  Ice = "Ice",
  Normal = "Normal",
  Poison = "Poison",
  Psychic = "Psychic",
  Rock = "Rock",
  Steel = "Steel",
  Water = "Water",
}

//==============================================================
// END Enums and Input Objects
//==============================================================