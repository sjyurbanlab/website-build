import React, { FC } from 'react';

import { IntroductionProps, TextBody } from './IntroductionProps';
import { Image } from '@src/types/image';

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

const Item: FC<{ textBody: TextBody; image: Image; color: string }> = ({
  textBody,
  color,
}) => (
  <div className={`w-full bg-white border-8 border-${color}`}>
    <div className={'p-4'}>
      <h2>{textBody.title}</h2>
      <p>{textBody.content}</p>
    </div>
  </div>
);
