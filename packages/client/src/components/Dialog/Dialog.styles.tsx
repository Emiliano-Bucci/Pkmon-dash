import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Keyframes } from "@emotion/serialize";
type WrapperProps = {
  inTheDom: boolean;
};

export const defaultAnimationFadeIn = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

export const defaultAnimationFadeOut = keyframes`
  from {
    opacity: 1
  }

  to {
    opacity: 0
  }
`;

export const Container = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  justify-content: center;
  align-items: center;
  display: ${({ inTheDom }) => (inTheDom ? "flex" : "none")};
`;

type DialogWrapperProps = {
  fadeInAnimation: Keyframes;
  fadeOutAnimation: Keyframes;
  isActive: boolean;
};

export const Wrapper = styled.div<DialogWrapperProps>`
  position: relative;
  opacity: 0;
  will-change: opacity;
  pointer-events: none;

  ${({ isActive, fadeInAnimation, fadeOutAnimation }) => {
    return isActive
      ? css`
          pointer-events: auto;
          animation: ${fadeInAnimation} 400ms forwards;
        `
      : css`
          pointer-events: none;
          animation: ${fadeOutAnimation} 400ms forwards;
        `;
  }}
`;

type BackdropWrapperProps = {
  isActive: boolean;
};

export const Backdrop = styled.div<BackdropWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  will-change: opacity;
  pointer-events: none;
  background-color: rgba(16, 42, 67, 0.8);

  ${({ isActive }) => {
    return isActive
      ? css`
          pointer-events: auto;
          animation: ${defaultAnimationFadeIn} 400ms forwards;
        `
      : css`
          pointer-events: none;
          animation: ${defaultAnimationFadeOut} 400ms forwards;
        `;
  }}
`;
