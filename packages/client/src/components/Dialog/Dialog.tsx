/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState, HTMLAttributes } from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import { css } from "@emotion/react";
import { SerializedStyles } from "@emotion/serialize";
import {
  Container,
  Wrapper,
  Backdrop,
  defaultAnimationFadeIn,
  defaultAnimationFadeOut,
} from "./Dialog.styles";

export const FIRST_ELEMENT_FOCUSED_CLASSNAME = "first-focused-element";

type DialogCustomStyles = {
  modal?: SerializedStyles;
};

type Props = {
  isActive: boolean;
  children: React.ReactNode;
  renderBackdrop?: boolean;
  customStyles?: DialogCustomStyles;
  disableFocusTrap?: boolean;
  onClose(): void;
  onDialogOpened?(): void;
  onDialogClosed?(): void;
} & HTMLAttributes<HTMLDivElement>;

export const Dialog: React.FC<Props> = ({
  children,
  isActive,
  onClose,
  renderBackdrop = true,
  className,
  onDialogOpened,
  onDialogClosed,
  customStyles,
  disableFocusTrap = false,
  ...rest
}) => {
  const [inTheDom, setInTheDom] = useState(false);
  const isDialogShown = isActive && inTheDom;
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const portal = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!portal.current) {
      portal.current = document.getElementById("dialog-portal")!;
    }
  }, []);

  useEffect(() => {
    if (isActive && !inTheDom) {
      setInTheDom(true);
    }
  }, [inTheDom, isActive]);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isActive]);

  useEffect(() => {
    function handleCloseDialogOnEscKeyPress(event: KeyboardEvent) {
      if (event.key === "Escape" && isDialogShown) {
        onClose();
      }
    }

    if (inTheDom) {
      window.addEventListener("keydown", handleCloseDialogOnEscKeyPress);
    }

    return () =>
      window.removeEventListener("keydown", handleCloseDialogOnEscKeyPress);
  }, [isDialogShown, inTheDom, onClose]);

  const modal = (
    <FocusTrap
      active={!disableFocusTrap}
      focusTrapOptions={{
        initialFocus: `.${FIRST_ELEMENT_FOCUSED_CLASSNAME}`,
        fallbackFocus: ".fallback-focus",
      }}
    >
      <Container inTheDom={inTheDom} className={className}>
        {renderBackdrop && (
          <Backdrop isActive={isDialogShown} onClick={onClose} />
        )}

        <Wrapper
          ref={dialogRef}
          fadeInAnimation={defaultAnimationFadeIn}
          fadeOutAnimation={defaultAnimationFadeOut}
          isActive={isDialogShown}
          className="modal"
          data-testid="modal-tracking-element"
          onAnimationEnd={() => {
            if (isActive && inTheDom && onDialogOpened) {
              onDialogOpened();
            }

            if (!isActive && inTheDom) {
              setInTheDom(false);

              if (onDialogClosed) {
                onDialogClosed();
              }
            }
          }}
          css={customStyles?.modal}
          {...rest}
        >
          {children}
        </Wrapper>

        <span
          className="fallback-focus"
          tabIndex={-1}
          css={css`
            display: none;
          `}
        />
      </Container>
    </FocusTrap>
  );

  return inTheDom ? ReactDOM.createPortal(modal, portal.current!) : null;
};
