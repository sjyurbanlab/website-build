import React, { CSSProperties, FC, useState } from 'react';

interface InnerImageProps {
  src: string;
  alt: string;
  isIntrinsicDimensions?: boolean;
  size?: 'extra small' | 'small' | 'medium' | 'large' | 'extra large';
  style?: CSSProperties;
  fallbackSrc?: string;
}

export const InnerImage: FC<InnerImageProps> = ({
  src,
  alt,
  isIntrinsicDimensions,
  size,
  style,
  fallbackSrc,
}) => {
  let className: string = 'absolute inset-0 h-full w-full object-cover';
  if (isIntrinsicDimensions) className = 'w-auto h-auto';
  else if (size)
    switch (size) {
      case 'extra small':
        className = 'w-auto max-w-full h-auto max-h-xxxs object-cover';
        break;
      case 'small':
        className = 'w-auto max-w-full h-auto max-h-xs object-cover';
        break;
      case 'medium':
        className = 'w-auto max-w-full h-auto max-h-sm object-cover';
        break;
      case 'large':
        className = 'w-auto max-w-full h-auto max-h-lg object-cover';
        break;
      case 'extra large':
        className = 'w-auto max-w-full h-auto max-h-2xl object-cover';
        break;
      default:
        break;
    }

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
