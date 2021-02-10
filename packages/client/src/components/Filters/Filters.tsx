/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PokemonTypes } from "../../graphql-types";
import { ReactComponent as ArrowSVG } from "../../assets/icons/arrow.svg";
import { PokemonTypeFilter } from "../../App";

type Props = {
  setPokemonActiveType(type: PokemonTypeFilter): void;
};

export const Filters: React.FC<Props> = ({ setPokemonActiveType }) => {
  return (
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
          onChange={(event) => {
            setPokemonActiveType(event.target.value as PokemonTypeFilter);
          }}
          css={css`
            background-color: #9fb3c8;
            padding: 0.8rem;
            padding-left: 1rem;
            color: #f0f4f8;
            border: none;
            cursor: pointer;
            outline: none;
            font-size: 1.8rem;
            appearance: none;
            width: 100%;
            transition: all 320ms;

            :hover {
              background-color: #829ab1;
            }
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
  );
};
