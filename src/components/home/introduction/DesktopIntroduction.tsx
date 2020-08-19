import React, { FC } from 'react';
import { IntroductionProps } from './IntroductionProps';

export const DesktopIntroduction: FC<IntroductionProps> = ({
  textBodies,
  images,
}) => {
  const { textBody1, textBody2, textBody3 } = textBodies;

  const { image1, image2, image3 } = images;

  return (
    <div className={'relative'} style={{ height: `${280 / 4}rem` }}>
      {textBody1 && (
        <div
          className={
            'w-1/2 absolute z-20 p-4 lg:p-6 bg-white border-8 border-emerald-green'
          }
          style={{ top: '2rem', left: '1rem' }}
        >
          <h2>{textBody1.title}</h2>
          <p>{textBody1.content}</p>
        </div>
      )}

      <img
        src={image1.src}
        alt={image1.alt}
        className={'h-90 w-3/5 object-cover absolute top-0 right-0'}
      />

      <img
        src={image2.src}
        alt={image2.alt}
        className={'h-100 w-2/3 object-cover absolute left-0 z-10'}
        style={{ top: '20rem' }}
      />

      {textBody2 && (
        <div
          className={
            'w-2/5 absolute z-20 p-4 lg:p-6 bg-white border-8 border-cobalt-blue'
          }
          style={{ top: '23.5rem', right: '4rem' }}
        >
          <h2>{textBody2.title}</h2>
          <p>{textBody2.content}</p>
        </div>
      )}

      {textBody3 && (
        <div
          className={
            'w-1/2 absolute z-20 p-4 lg:p-6 bg-white border-8 border-mustard-yellow'
          }
          style={{ top: '46.5rem', left: '1.5rem' }}
        >
          <h2>{textBody3.title}</h2>
          <p>{textBody3.content}</p>
        </div>
      )}

      <img
        src={image3.src}
        alt={image3.alt}
        className={'h-90 w-1/2 object-cover absolute'}
        style={{ top: '42rem', right: '2rem' }}
      />
    </div>
  );
};
