/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Dialog from "../Dialog";
import { FIRST_ELEMENT_FOCUSED_CLASSNAME } from "../Dialog/Dialog";

type Props = {
  isActive: boolean;
  pokemonId: string;
  onClose(): void;
};

export const PokemonDialog: React.FC<Props> = ({
  isActive,
  onClose,
  pokemonId,
}) => {
  return (
    <Dialog isActive={isActive} onClose={onClose}>
      <div
        css={css`
          display: grid;
          background-color: #fff;
          border-radius: 6px;
          overflow: hidden;
          padding: 2.4rem;
          z-index: 10;
          box-shadow: 0 2.8px 2.2px rgba(16, 42, 67, 0.024),
            0 6.7px 5.3px rgba(16, 42, 67, 0.032),
            0 12.5px 10px rgba(16, 42, 67, 0.04),
            0 22.3px 17.9px rgba(16, 42, 67, 0.08),
            0 41.8px 33.4px rgba(16, 42, 67, 0.1),
            0 100px 80px rgba(16, 42, 67, 0.16);
        `}
      >
        asdas
        <button className={FIRST_ELEMENT_FOCUSED_CLASSNAME}>asda</button>
      </div>
    </Dialog>
  );
};
