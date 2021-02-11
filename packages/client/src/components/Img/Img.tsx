import { ImgHTMLAttributes, useRef } from "react";
import { css } from "@emotion/react";

type Props = {
  /** Callback triggered when the image is loaded */
  onImageLoaded?(): void;
  /** Fallback url */
  fallbackUrl?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Img: React.FC<Props> = ({
  src = "",
  fallbackUrl,
  onImageLoaded = () => {},
  title,
  alt,
  ...rest
}) => {
  const imageLoaded = useRef(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  function handleOnLoad() {
    if (imageRef.current?.currentSrc && !imageLoaded.current) {
      imageLoaded.current = true;
      onImageLoaded();
    }
  }

  async function handleOnRef(ref: HTMLImageElement | null) {
    if (ref) {
      imageRef.current = ref;

      const img = new Image();
      img.src = src;

      await img.decode();
      imageRef.current.src = src;

      handleOnLoad();
    }
  }

  return (
    <img
      ref={handleOnRef}
      title={title}
      alt={alt}
      decoding="async"
      css={css`
        width: 100%;
        height: 100%;
        object-fit: cover;
      `}
      {...rest}
    />
  );
};
