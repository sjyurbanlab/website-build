import React, { FC } from 'react';

import { carouselImages } from '@assets/data';
import { InnerImage } from '@components/generic';
import { Carousel } from '@components/generic';

export const ImageCarousel: FC = () => {
  const carouselItems = carouselImages.map(({ src, alt, title }, index) => (
    <div
      key={index}
      className={'relative'}
      style={{
        width: '100%',
        height: '60vh',
        minHeight: '275px',
        maxHeight: '600px',
      }}
    >
      <div
        className={
          'absolute right-0 z-10 p-3 rounded-l-lg bg-jet-black bg-opacity-75 text-white'
        }
        style={{ bottom: '2rem' }}
      >
        <p>{title}</p>
      </div>
      <InnerImage
        src={src}
        alt={alt}
        fallbackSrc={`https://via.placeholder.com/1000?text=Lab+Image+${
          index + 1
        }`}
      />
    </div>
  ));

  return carouselImages.length ? (
    <Carousel
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={carouselItems.length}
      isIntrinsicHeight
      isPlaying
      carouselItems={carouselItems}
    />
  ) : null;
};
