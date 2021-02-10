/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import noDataPlaceholder from "../../../assets/images/sad-pikachu.png";

export const NoDataPlaceholder = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin: auto;
        max-width: 480px;
      `}
    >
      <img
        src={noDataPlaceholder}
        title="No data placeholder"
        alt="No data placeholder"
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        `}
      />
    </div>
  );
};
