import React, { FC, ReactNode } from 'react';
import {
  CarouselProvider,
  CarouselProviderProps,
  Slide,
  Slider,
} from 'pure-react-carousel';
import { CarouselButtons } from '@components/generic/others/carousel/CarouselButtons';
import { DotGroup } from '@components/generic/others/carousel/DotGroup';

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

type CarouselProps = Overwrite<
  CarouselProviderProps,
  {
    children?: ReactNode;
    carouselItems: ReactNode[];
  }
>;

export const Carousel: FC<CarouselProps> = ({ carouselItems, ...props }) => {
  const shouldRenderNavigators =
    carouselItems.length > (props.visibleSlides || 1);

  return (
    <CarouselProvider {...props}>
      <div className={'relative'}>
        <Slider>
          {carouselItems.map((carouselItem, index) => (
            <Slide key={index} index={index}>
              {carouselItem}
            </Slide>
          ))}
        </Slider>

        {shouldRenderNavigators ? (
          <>
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
              <DotGroup slides={carouselItems} />
            </div>
          </>
        ) : null}
      </div>
    </CarouselProvider>
  );
};
