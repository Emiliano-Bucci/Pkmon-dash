/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import Dialog from "../Dialog";
import { FIRST_ELEMENT_FOCUSED_CLASSNAME } from "../Dialog/Dialog";
import { GET_POKEMON_BY_ID_QUERY } from "../../apollo/queries/getPokemonById";
import { GetPokemon, GetPokemonVariables } from "../../graphql-types";
import { Img } from "../Img/Img";
import { useState } from "react";

type Props = {
  isActive: boolean;
  pokemonId: string;
  onClose(): void;
  onDialogClosed(): void;
};

export const PokemonDialog: React.FC<Props> = ({
  isActive,
  onClose,
  pokemonId,
  onDialogClosed,
}) => {
  const [showImage, setShowImage] = useState(false);
  const { data, loading } = useQuery<GetPokemon, GetPokemonVariables>(
    GET_POKEMON_BY_ID_QUERY,
    {
      variables: {
        id: pokemonId,
      },
    }
  );

  return (
    <Dialog
      isActive={isActive}
      onClose={onClose}
      onDialogClosed={() => {
        onDialogClosed();
        setShowImage(false);
      }}
      customStyles={{
        modal: css`
          display: flex;
          width: 90%;
          height: 90%;
        `,
      }}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          background-color: #fff;
          flex: 1;
          border-radius: 6px;
          overflow: hidden;
          z-index: 10;
          box-shadow: 0 2.8px 2.2px rgba(16, 42, 67, 0.024),
            0 6.7px 5.3px rgba(16, 42, 67, 0.032),
            0 12.5px 10px rgba(16, 42, 67, 0.04),
            0 22.3px 17.9px rgba(16, 42, 67, 0.08),
            0 41.8px 33.4px rgba(16, 42, 67, 0.1),
            0 100px 80px rgba(16, 42, 67, 0.16);
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          {data?.pokemonById && (
            <div
              css={css`
                display: flex;
                justify-content: center;
                width: 100%;
                max-width: 560px;
              `}
            >
              <Img
                src={data?.pokemonById?.placeholder ?? ""}
                title="Pokemon placeholder"
                alt="Pokemon placeholder"
                onImageLoaded={() => {
                  setShowImage(true);
                }}
                css={css`
                  width: 100%;
                  object-fit: contain;
                  height: 100%;
                  opacity: 0;
                  transition: all 320ms;

                  ${showImage &&
                  css`
                    opacity: 1;
                  `}
                `}
              />
            </div>
          )}
        </div>
        <div
          css={css`
            background-color: #f0f4f8;
            padding: 2.4rem;
          `}
        >
          <button className={FIRST_ELEMENT_FOCUSED_CLASSNAME}>asda</button>
        </div>
      </div>
    </Dialog>
  );
};
