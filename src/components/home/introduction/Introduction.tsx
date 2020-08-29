import React, { FC } from 'react';
import { MobileIntroduction } from './MobileIntroduction';
import { DesktopIntroduction } from './DesktopIntroduction';

export const Introduction: FC = () => {
  const textBodies = {
    textBody1: {
      title: 'Our Lab',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis nibh vitae tortor fermentum luctus at ac ex. Integer eget dapibus enim. Sed erat erat, feugiat sit amet ultrices ut, elementum sed tortor. Proin condimentum at nunc in mollis. Fusce porta sem et mi tempor, egestas aliquam quam scelerisque. Integer pharetra lectus sapien, vel congue urna vulputate eu. Nam rutrum est blandit est finibus, non luctus massa aliquam.',
    },
    textBody2: {
      title: 'Our Mission',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis nibh vitae tortor fermentum luctus at ac ex. Integer eget dapibus enim. Sed erat erat, feugiat sit amet ultrices ut, elementum sed tortor. Proin condimentum at nunc in mollis. Fusce porta sem et mi tempor, egestas aliquam quam scelerisque. Integer pharetra lectus sapien.',
    },
    textBody3: {
      title: 'Our Vision',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis nibh vitae tortor fermentum luctus at ac ex. Integer eget dapibus enim. Sed erat erat, feugiat sit amet ultrices ut, elementum sed tortor. Proin condimentum at nunc in mollis. Fusce porta sem et mi tempor, egestas aliquam quam scelerisque. Integer pharetra lectus sapien, vel congue urna vulputate eu. Nam rutrum est blandit est finibus, non luctus massa aliquam. Nam rutrum est blandit est finibus, non luctus massa aliquam.',
    },
  };

  const images = {
    image1: {
      id: 1,
      src:
        'https://sjyurbanlab.github.io/website-assets/home/introduction/hong-kong-night.jpg',
      alt: 'cover 1',
    },
    image2: {
      id: 2,
      src:
        'https://sjyurbanlab.github.io/website-assets/home/introduction/greenery-with-buildings.jpg',
      alt: 'cover 2',
    },
    image3: {
      id: 3,
      src:
        'https://sjyurbanlab.github.io/website-assets/home/introduction/green-brochure.jpg',
      alt: 'cover 3',
    },
  };

  return (
    <>
      <div className={'block lg:hidden'}>
        <MobileIntroduction textBodies={textBodies} images={images} />
      </div>
      <div className={'hidden lg:block'}>
        <DesktopIntroduction textBodies={textBodies} images={images} />
      </div>
    </>
  );
};
