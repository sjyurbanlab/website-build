import React, { CSSProperties, FC } from 'react';
import { InnerImage } from './InnerImage';

interface ImageProps {
  src: string;
  alt: string;
  circular?: boolean;
  style?: CSSProperties;
  className?: string;
  innerImageStyle?: CSSProperties;
  fallbackSrc?: string;
}

export const Image: FC<ImageProps> = ({
  src,
  alt,
  circular,
  style,
  className,
  innerImageStyle,
  fallbackSrc,
}) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        paddingTop: circular ? '100%' : 0,
        borderRadius: circular ? '50%' : 0,
        ...style,
      }}
    >
      <InnerImage
        src={src}
        alt={alt}
        style={innerImageStyle}
        fallbackSrc={fallbackSrc}
      />
    </div>
  );
};
