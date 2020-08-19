import React, { FC, useContext, useEffect, useState } from 'react';
import { CarouselContext, Dot } from 'pure-react-carousel';

interface DotGroupProps {
  slides: any[];
}

export const DotGroup: FC<DotGroupProps> = ({ slides }) => {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide
  );

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  const getBackgroundColor = (index: number) =>
    index === currentSlide ? `bg-cobalt-blue` : `bg-gray-100`;

  return (
    <>
      {slides?.map((groupedSet, index) => (
        <Dot key={index} slide={index}>
          <div
            className={`w-2 h-2 mx-1 rounded-full ${getBackgroundColor(index)}`}
          />
        </Dot>
      ))}
    </>
  );
};
