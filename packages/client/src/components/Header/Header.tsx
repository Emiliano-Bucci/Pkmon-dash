/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Header = () => {
  return (
    <header
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 320px;
        background-image: linear-gradient(to bottom right, #102a43, #243b53);
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
          onChange={(event) => console.log(event.currentTarget.value)}
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
  );
};
