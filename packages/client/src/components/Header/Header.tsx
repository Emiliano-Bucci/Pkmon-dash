/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as LogoSVG } from "../../assets/icons/logo.svg";

type Props = {
  onChange(value: string): void;
};

export const Header: React.FC<Props> = ({ onChange }) => {
  return (
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
        onChange={(event) => onChange(event.currentTarget.value)}
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
  );
};
