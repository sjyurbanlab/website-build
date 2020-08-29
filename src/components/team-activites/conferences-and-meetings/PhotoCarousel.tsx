import React, { FC } from 'react';
import { Carousel, Image } from '@src/components/generic';

interface PhotoCarouselProps {
  photos: string[];
  height: number;
}

export const PhotoCarousel: FC<PhotoCarouselProps> = ({ photos, height }) => {
  const carouselItems = photos.map((photo, index) => (
    <Image
      key={index}
      src={photo}
      alt={`${index}`}
      style={{ width: '100%', height }}
    />
  ));

  return (
    <Carousel
      naturalSlideHeight={100}
      naturalSlideWidth={100}
      totalSlides={carouselItems.length}
      isIntrinsicHeight
      isPlaying
      carouselItems={carouselItems}
    />
  );
};
