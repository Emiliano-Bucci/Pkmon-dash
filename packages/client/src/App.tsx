/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS_QUERY } from "./apollo/queries";
import { css } from "@emotion/react";
import { debounce } from "ts-debounce";
import { useState } from "react";
import {
  GetAllPokemons,
  GetAllPokemonsVariables,
  PokemonTypes,
} from "./graphql-types";
import { Header } from "./components/Header/Header";
import { Filters } from "./components/Filters";
import { Table } from "./components/Table/Table";
import { PokemonDialog } from "./components/PokemonDialog/PokemonDialog";

export type PokemonTypeFilter = PokemonTypes | "all";

export const App = () => {
  const [showPokemonDialog, setShowPokemonDialog] = useState({
    isActive: false,
    pokemonId: "",
  });
  const [search, setSearch] = useState("");
  const [pokemonActiveType, setPokemonActiveType] = useState<PokemonTypeFilter>(
    "all"
  );

  function getPokemonActiveTypeQueryVariable() {
    if (pokemonActiveType === "all") {
      return undefined;
    }

    return pokemonActiveType;
  }

  const { data, loading, fetchMore } = useQuery<
    GetAllPokemons,
    GetAllPokemonsVariables
  >(GET_ALL_POKEMONS_QUERY, {
    variables: {
      q: search,
      limit: 10,
      type: getPokemonActiveTypeQueryVariable(),
    },
  });

  const handleOnChange = debounce((val: string) => setSearch(val), 300);

  function handleOnFetchMore() {
    fetchMore({
      query: GET_ALL_POKEMONS_QUERY,
      variables: {
        q: search,
        limit: 10,
        after: data?.pokemons?.pageInfo?.endCursor,
      },
    });
  }

  return (
    <>
      <div>
        <Header onChange={handleOnChange} />
        <main
          css={css`
            display: grid;
            align-items: start;
            grid-template-columns: 1fr 240px;
            grid-gap: 3.2rem;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            justify-content: center;
            padding: 8rem;
            padding-top: 4.8rem;
          `}
        >
          <Table
            isLoading={loading}
            data={data}
            onFetchMore={handleOnFetchMore}
            onPokemonClick={(id) => {
              setShowPokemonDialog({
                isActive: true,
                pokemonId: id,
              });
            }}
          />
          <Filters setPokemonActiveType={setPokemonActiveType} />
        </main>
      </div>
      <PokemonDialog
        isActive={showPokemonDialog.isActive}
        pokemonId={showPokemonDialog.pokemonId}
        onClose={() => {
          setShowPokemonDialog({
            isActive: false,
            pokemonId: "",
          });
        }}
      />
    </>
  );
};
