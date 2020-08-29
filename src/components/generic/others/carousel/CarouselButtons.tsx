import React, { FC, ReactNode } from 'react';
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
        <ButtonContainer
          icon={<ChevronLeft size={iconSize} />}
          iconSize={'40px'}
        />
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
        <ButtonContainer
          icon={<ChevronRight size={iconSize} />}
          iconSize={'40px'}
        />
      </ButtonNext>
    </div>
  );
};

const ButtonContainer: FC<{ icon: ReactNode; iconSize: string }> = ({
  icon,
  iconSize,
}) => (
  <div
    className={
      'flex items-center justify-center bg-white bg-opacity-75 rounded-full'
    }
    style={{ width: iconSize, height: iconSize }}
  >
    {icon}
  </div>
);
