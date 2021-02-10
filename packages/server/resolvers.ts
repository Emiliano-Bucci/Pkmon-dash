import { IResolvers } from "graphql-tools";
import * as pokemons from "./models/pokemons";
import * as pokemonById from "./models/pokemonsById";

export const resolvers: IResolvers = {
  Query: {
    pokemons: (_source, args) => pokemons.query(args),
    pokemonById: (_source, args) => pokemonById.query(args),
  },
};
