/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GetAllPokemons } from "../../graphql-types";
import { NoDataPlaceholder } from "./NoDataPlaceholder";

type Props = {
  isLoading: boolean;
  data: GetAllPokemons | undefined;
  onFetchMore(): void;
  onPokemonClick(id: string): void;
};

export const Table: React.FC<Props> = ({
  isLoading,
  data,
  onFetchMore,
  onPokemonClick,
}) => {
  const showData = data?.pokemons?.edges && data.pokemons.edges.length > 0;
  const noData =
    !isLoading && data?.pokemons?.edges && data.pokemons.edges.length === 0;

  return (
    <div
      css={css`
        display: grid;
        grid-gap: 4rem;
        width: 100%;
      `}
    >
      {isLoading && <p>Loading...</p>}
      {showData && (
        <div
          css={css`
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
            color: #334e68;
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
                key={pokemon!.node!.id}
                onClick={() => onPokemonClick(pokemon!.node!.id)}
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
                    display: grid;
                    grid-auto-flow: column;
                    grid-gap: 0.8rem;
                    justify-content: start;
                    flex: 0.5;
                  `}
                >
                  {pokemon?.node?.types?.map((type) => (
                    <span
                      key={type}
                      css={css`
                        font-size: 1.4rem;
                        background-color: #f0f4f8;
                        border-radius: 4px;
                        padding: 0.4rem 0.64rem;
                        padding-bottom: 0;
                      `}
                    >
                      {type}
                    </span>
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
      {noData && <NoDataPlaceholder />}
      {data?.pokemons?.pageInfo?.hasNextPage && (
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <button
            onClick={onFetchMore}
            css={css`
              background-color: #bcccdc;
              border: none;
              font-size: 1.8rem;
              cursor: pointer;
              transition: all 320ms;
              width: auto;
              padding: 1.2rem;
              border-radius: 6px;
              color: #334e68;

              :hover,
              :focus {
                background-color: #9fb3c8;
              }
            `}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};
