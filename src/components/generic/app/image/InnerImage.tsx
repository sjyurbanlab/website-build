import React, { CSSProperties, FC, useState } from 'react';

interface InnerImageProps {
  src: string;
  alt: string;
  isIntrinsicDimensions?: boolean;
  isSensibleDimensions?: boolean;
  style?: CSSProperties;
  fallbackSrc?: string;
}

export const InnerImage: FC<InnerImageProps> = ({
  src,
  alt,
  isIntrinsicDimensions,
  isSensibleDimensions,
  style,
  fallbackSrc,
}) => {
  let className: string = 'absolute inset-0 h-full w-full object-cover';
  if (isIntrinsicDimensions) className = 'w-auto h-auto';
  else if (isSensibleDimensions)
    className = 'w-auto max-w-full h-auto max-h-sm object-cover';

  const [imageSrc, setImageSrc] = useState<string>(src);

  const onError = () => {
    if (fallbackSrc && fallbackSrc !== imageSrc) setImageSrc(fallbackSrc);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      style={{
        ...style,
      }}
      onError={() => onError()}
    />
  );
};
