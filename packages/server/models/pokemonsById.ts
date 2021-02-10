import { data } from "../data/pokemons";

interface Pokemon {
  id: string;
  name: string;
  types: string[];
  classification: string;
}

export function query({ id }: { id: string }): Pokemon | undefined {
  return data.find((pokemon) => pokemon.id === id);
}
