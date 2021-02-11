

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPokemons
// ====================================================

export interface GetAllPokemons_pokemons_edges_node {
  id: string;
  name: string | null;
  types: (PokemonTypes | null)[] | null;
  classification: string | null;
}

export interface GetAllPokemons_pokemons_edges {
  node: GetAllPokemons_pokemons_edges_node | null;
}

export interface GetAllPokemons_pokemons_pageInfo {
  endCursor: string | null;
  hasNextPage: boolean | null;
}

export interface GetAllPokemons_pokemons {
  edges: (GetAllPokemons_pokemons_edges | null)[] | null;
  pageInfo: GetAllPokemons_pokemons_pageInfo | null;
}

export interface GetAllPokemons {
  pokemons: GetAllPokemons_pokemons | null;
}

export interface GetAllPokemonsVariables {
  q?: string | null;
  after?: string | null;
  limit?: number | null;
  type?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPokemon
// ====================================================

export interface GetPokemon_pokemonById_weight {
  minimum: string | null;
  maximum: string | null;
}

export interface GetPokemon_pokemonById_height {
  minimum: string | null;
  maximum: string | null;
}

export interface GetPokemon_pokemonById_evolutionRequirements {
  amount: number | null;
  name: string | null;
}

export interface GetPokemon_pokemonById_evolutions {
  id: number | null;
  name: string | null;
}

export interface GetPokemon_pokemonById_attacks_fast {
  name: string | null;
  type: string | null;
  damage: number | null;
}

export interface GetPokemon_pokemonById_attacks_special {
  name: string | null;
  type: string | null;
  damage: number | null;
}

export interface GetPokemon_pokemonById_attacks {
  fast: (GetPokemon_pokemonById_attacks_fast | null)[] | null;
  special: (GetPokemon_pokemonById_attacks_special | null)[] | null;
}

export interface GetPokemon_pokemonById {
  id: string;
  name: string | null;
  types: (PokemonTypes | null)[] | null;
  classification: string | null;
  resistant: (string | null)[] | null;
  weaknesses: (string | null)[] | null;
  weight: GetPokemon_pokemonById_weight | null;
  height: GetPokemon_pokemonById_height | null;
  fleeRate: string | null;
  evolutionRequirements: GetPokemon_pokemonById_evolutionRequirements | null;
  evolutions: (GetPokemon_pokemonById_evolutions | null)[] | null;
  maxCP: number | null;
  maxHP: number | null;
  attacks: GetPokemon_pokemonById_attacks | null;
  placeholder: string | null;
}

export interface GetPokemon {
  pokemonById: GetPokemon_pokemonById | null;
}

export interface GetPokemonVariables {
  id: string;
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