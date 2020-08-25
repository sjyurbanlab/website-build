import React, { CSSProperties, FC } from 'react';
import { InnerImage } from './InnerImage';

interface ImageProps {
  src: string;
  alt: string;
  isIntrinsicDimensions?: boolean;
  isSensibleDimensions?: boolean;
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
  isSensibleDimensions,
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
          isIntrinsicDimensions || isSensibleDimensions
            ? ''
            : 'relative w-full h-full'
        } ${rounded ? 'rounded-lg' : ''} overflow-hidden ${className}`}
        style={{
          paddingTop:
            !isIntrinsicDimensions && !isSensibleDimensions && circular
              ? '100%'
              : '',
          borderRadius:
            !isIntrinsicDimensions && !isSensibleDimensions && circular
              ? '50%'
              : '',
          ...style,
        }}
      >
        <InnerImage
          src={src}
          alt={alt}
          isIntrinsicDimensions={isIntrinsicDimensions}
          isSensibleDimensions={isSensibleDimensions}
          style={innerImageStyle}
          fallbackSrc={fallbackSrc}
        />
      </div>
    </div>
  );
};
