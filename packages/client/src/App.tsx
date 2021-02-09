/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS_QUERY } from "./apollo/queries";
import { css } from "@emotion/react";
import { debounce } from "ts-debounce";
import { useState } from "react";
import { GetAllPokemons, GetAllPokemonsVariables } from "./graphql-types";

export const App = () => {
  const [search, setSearch] = useState("");
  const { data, loading, error } = useQuery<
    GetAllPokemons,
    GetAllPokemonsVariables
  >(GET_ALL_POKEMONS_QUERY, {
    variables: {
      q: search,
      limit: 10,
    },
  });

  console.log({
    data,
    loading,
    error,
  });

  const handleOnChange = debounce((val: string) => setSearch(val), 300);

  return (
    <div>
      <header
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 320px;
          background-image: linear-gradient(to bottom right, #102a43, #243b53);
          border-bottom: 6px solid #627d98;
        `}
      >
        <div
          css={css`
            display: flex;
            width: 100%;
            max-width: 480px;
          `}
        >
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

              :focus {
                background-color: #486581;
              }

              ::placeholder {
                color: #bcccdc;
                opacity: 0.64;
              }
            `}
          />
        </div>
      </header>
    </div>
  );
};
