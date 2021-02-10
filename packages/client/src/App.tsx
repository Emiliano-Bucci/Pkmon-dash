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
import { ReactComponent as LogoSVG } from "./assets/icons/logo.svg";
import { ReactComponent as ArrowSVG } from "./assets/icons/arrow.svg";

export const App = () => {
  const [search, setSearch] = useState("");
  const [
    pokemonActiveType,
    setPokemonActiveType,
  ] = useState<PokemonTypes | null>(null);
  const { data, loading, fetchMore } = useQuery<
    GetAllPokemons,
    GetAllPokemonsVariables
  >(GET_ALL_POKEMONS_QUERY, {
    variables: {
      q: search,
      limit: 10,
    },
  });

  const handleOnChange = debounce((val: string) => setSearch(val), 300);
  const showData = data?.pokemons?.edges && data.pokemons.edges.length > 0;
  const noData =
    !loading && data?.pokemons?.edges && data.pokemons.edges.length === 0;

  return (
    <div>
      <header
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 1.6rem 2.4rem;
          background-image: linear-gradient(to bottom right, #102a43, #243b53);
          border-bottom: 6px solid #627d98;
          position: sticky;
          top: 0;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <h1
            css={css`
              color: #f0f4f8;
              font-size: 2rem;
            `}
          >
            Pkmon Dashboard
          </h1>
        </div>
        <input
          type="text"
          onChange={(event) => handleOnChange(event.currentTarget.value)}
          placeholder="Search pokemon"
          css={css`
            background-color: #334e68;
            border: none;
            border-radius: 6px;
            padding: 1.6rem;
            color: #fff;
            font-size: 1.8rem;
            outline: none;
            text-align: center;
            flex: 1;
            transition: all 320ms;
            margin-right: 3.2rem;
            max-width: 400px;
            margin-left: -20rem;

            :focus {
              background-color: #486581;
            }

            ::placeholder {
              color: #bcccdc;
              opacity: 0.64;
            }
          `}
        />
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 56px;
            border-radius: 6px;
            border: none;
            background-color: #334e68;
          `}
        >
          <LogoSVG
            css={css`
              fill: #f0f4f8;
              width: 28px;
              height: 28px;
            `}
          />
        </div>
      </header>

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
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
          `}
        >
          {loading && <p>Loading...</p>}
          {showData && (
            <div
              css={css`
                background-color: #fff;
                border-radius: 8px;
                overflow: hidden;
                color: #102a43;
              `}
            >
              <div
                css={css`
                  display: flex;
                  padding: 1.6rem 2.4rem;
                  font-size: 2rem;
                  font-weight: bold;
                  background-color: #bcccdc;
                `}
              >
                <span
                  css={css`
                    flex: 1;
                  `}
                >
                  Name:
                </span>
                <span
                  css={css`
                    flex: 0.5;
                  `}
                >
                  Type:
                </span>
                <span
                  css={css`
                    flex: 0.5;
                  `}
                >
                  Classification:
                </span>
              </div>

              <ul>
                {data?.pokemons?.edges?.map((pokemon) => (
                  <li
                    key={pokemon?.node?.id}
                    css={css`
                      display: flex;
                      padding: 2.4rem;
                      cursor: pointer;
                      transition: all 240ms;

                      :hover {
                        background-color: #d9e2ec;
                      }

                      :not(:last-of-type) {
                        border-bottom: 1px solid #d9e2ec;
                      }
                    `}
                  >
                    <div
                      css={css`
                        flex: 1;
                      `}
                    >
                      {pokemon?.node?.name}
                    </div>
                    <div
                      css={css`
                        flex: 0.5;
                      `}
                    >
                      {pokemon?.node?.types?.map((type) => (
                        <span key={type}>{type}</span>
                      ))}
                    </div>
                    <div
                      css={css`
                        flex: 0.5;
                      `}
                    >
                      {pokemon?.node?.classification}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {noData && <div>NO DATA</div>}
          {data?.pokemons?.pageInfo?.hasNextPage && (
            <button
              onClick={() => {
                fetchMore({
                  query: GET_ALL_POKEMONS_QUERY,
                  variables: {
                    q: search,
                    limit: 10,
                    after: data?.pokemons?.pageInfo?.endCursor,
                  },
                });
              }}
            >
              Load more
            </button>
          )}
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            max-width: 480px;
            padding: 2.4rem;
            background-color: #d9e2ec;
            border-radius: 6px;
            margin-bottom: 4.8rem;
            position: sticky;
            top: 138px;
          `}
        >
          <span>Pokemon active type:</span>{" "}
          <div
            css={css`
              display: flex;
              align-items: center;
              position: relative;
              border-radius: 6px;
              overflow: hidden;
            `}
          >
            <select
              css={css`
                background-color: #829ab1;
                padding: 0.8rem;
                padding-left: 1rem;
                color: #f0f4f8;
                border: none;
                cursor: pointer;
                outline: none;
                font-size: 1.8rem;
                appearance: none;
                width: 100%;
              `}
            >
              <option id="all" value="all">
                All
              </option>
              {Object.keys(PokemonTypes).map((pokemonType) => (
                <option key={pokemonType} id={pokemonType} value={pokemonType}>
                  {pokemonType}
                </option>
              ))}
            </select>
            <div
              css={css`
                display: flex;
                align-items: center;
                position: absolute;
                right: 0;
                z-index: 1;
                width: 24px;
                height: 100%;
                pointer-events: none;
              `}
            >
              <ArrowSVG
                css={css`
                  width: 14px;
                  height: 14px;
                  fill: #243b53;
                `}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
