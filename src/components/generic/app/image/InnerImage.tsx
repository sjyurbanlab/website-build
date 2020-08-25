import React, { CSSProperties, FC, useState } from 'react';

interface InnerImageProps {
  src: string;
  alt: string;
  style?: CSSProperties;
  fallbackSrc?: string;
}

export const InnerImage: FC<InnerImageProps> = ({
  src,
  alt,
  style,
  fallbackSrc,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);

  const onError = () => {
    if (fallbackSrc && fallbackSrc !== imageSrc) setImageSrc(fallbackSrc);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={'absolute inset-0 h-full w-full object-cover'}
      style={{
        ...style,
      }}
      onError={() => onError()}
    />
  );
};
