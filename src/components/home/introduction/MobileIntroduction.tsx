import React, { FC } from 'react';

import { IntroductionProps, TextBody } from './IntroductionProps';
import { Image } from '@src/types/image';
import { InnerImage } from '@components/generic';

export const MobileIntroduction: FC<IntroductionProps> = ({
  textBodies,
  images,
}) => {
  const { textBody1, textBody2, textBody3 } = textBodies;

  const { image1, image2, image3 } = images;

  return (
    <div className={'space-y-2'}>
      <Item textBody={textBody1} image={image1} color={'emerald-green'} />
      <Item textBody={textBody2} image={image2} color={'cobalt-blue'} />
      <Item textBody={textBody3} image={image3} color={'mustard-yellow'} />
    </div>
  );
};

const Item: FC<{ textBody?: TextBody; image: Image; color: string }> = ({
  textBody,
  image,
  color,
}) => (
  <div
    className={`${
      textBody ? '' : 'h-72'
    } w-full relative border-8 border-${color}`}
  >
    <InnerImage
      src={image.src}
      alt={image.alt}
      style={
        textBody
          ? {
              filter: 'blur(2px) saturate(0.75) brightness(50%)',
            }
          : {}
      }
      fallbackSrc={'https://via.placeholder.com/1000?text=Cover+1'}
    />

    {textBody && (
      <div className={'relative text-white p-4'}>
        <h2>{textBody.title}</h2>
        <p>{textBody.content}</p>
      </div>
    )}
  </div>
);
