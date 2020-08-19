import React, { FC } from 'react';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { CarouselButtons } from './CarouselButtons';
import { DotGroup } from './DotGroup';

import { carouselImages } from '@assets/data';
import { Image } from '@components/generic';

export const Carousel: FC = () => {
  const totalSlides = carouselImages.length;

  return carouselImages.length ? (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={totalSlides}
      isIntrinsicHeight
      isPlaying
    >
      <div className={'relative'}>
        <Slider>
          {carouselImages.map(({ src, alt, title }, index) => (
            <Slide key={index} index={index}>
              <div
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
                <Image
                  src={src}
                  alt={alt}
                  fallbackSrc={`https://via.placeholder.com/1000?text=Lab+Image+${
                    index + 1
                  }`}
                />
              </div>
            </Slide>
          ))}
        </Slider>

        <div
          className={'w-full absolute'}
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <CarouselButtons />
        </div>

        <div
          className={'w-full absolute flex justify-center my-2'}
          style={{ bottom: '0.5rem' }}
        >
          <DotGroup slides={carouselImages} />
        </div>
      </div>
    </CarouselProvider>
  ) : null;
};
