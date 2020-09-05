import React, { CSSProperties, FC } from 'react';
import { InnerImage } from './InnerImage';

interface ImageProps {
  src: string;
  alt: string;
  isIntrinsicDimensions?: boolean;
  size?: 'extra small' | 'small' | 'medium' | 'large';
  center?: boolean;
  rounded?: boolean;
  circular?: boolean;
  style?: CSSProperties;
  className?: string;
  innerImageStyle?: CSSProperties;
  fallbackSrc?: string;
}

export const Image: FC<ImageProps> = ({
  src,
  alt,
  isIntrinsicDimensions,
  size,
  center,
  rounded,
  circular,
  style,
  className,
  innerImageStyle,
  fallbackSrc,
}) => {
  return (
    <div className={center ? 'flex justify-center' : ''}>
      <div
        className={`${
          isIntrinsicDimensions || size ? '' : 'relative w-full h-full'
        } ${rounded ? 'rounded-lg' : ''} overflow-hidden ${className}`}
        style={{
          paddingTop: !isIntrinsicDimensions && !size && circular ? '100%' : '',
          borderRadius:
            !isIntrinsicDimensions && !size && circular ? '50%' : '',
          ...style,
        }}
      >
        <InnerImage
          src={src}
          alt={alt}
          isIntrinsicDimensions={isIntrinsicDimensions}
          size={size}
          style={innerImageStyle}
          fallbackSrc={fallbackSrc}
        />
      </div>
    </div>
  );
};
