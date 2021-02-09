import { pipe } from "fp-ts/lib/pipeable";
import * as O from "fp-ts/lib/Option";
import * as A from "fp-ts/lib/Array";
import { identity } from "fp-ts/lib/function";
import { data } from "../data/pokemons";
import { toConnection, slice } from "../functions";
import { Connection } from "../types";

interface Pokemon {
  id: string;
  name: string;
  types: string[];
}

const SIZE = 10;

export function query(args: { type: string }): Connection<Pokemon> {
  const { type } = args;

  const filterByType = (as: Pokemon[]): Pokemon[] => {
    return as.filter((pokemon) =>
      pokemon.types.some((_type) => _type.toLowerCase() === type.toLowerCase())
    );
  };

  // const sliceByAfter: (as: Pokemon[]) => Pokemon[] =
  //   // filter only if q is defined
  //   after === undefined
  //     ? identity
  //     : (as) =>
  //         pipe(
  //           as,
  //           A.findIndex((a) => a.id === after),
  //           O.map((a) => a + 1),
  //           O.fold(
  //             () => as,
  //             (idx) => as.slice(idx)
  //           )
  //         );

  const results: Pokemon[] = pipe(data, filterByType);
  return toConnection(results, SIZE);
}
