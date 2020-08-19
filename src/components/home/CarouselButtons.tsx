import React, { FC } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ChevronLeft, ChevronRight } from 'react-feather';

export const CarouselButtons: FC = () => {
  const iconSize = '32px';

  return (
    <div
      className={
        'text-cobalt-blue flex items-center justify-between px-1 md:px-2'
      }
    >
      <ButtonBack
        // @ts-ignore
        style={{
          border: 'none',
          background: 'none',
          outline: 'none',
          boxShadow: 'none',
        }}
      >
        <ChevronLeft size={iconSize} />
      </ButtonBack>
      <ButtonNext
        // @ts-ignore
        style={{
          border: 'none',
          background: 'none',
          outline: 'none',
          boxShadow: 'none',
        }}
      >
        <ChevronRight size={iconSize} />
      </ButtonNext>
    </div>
  );
};
