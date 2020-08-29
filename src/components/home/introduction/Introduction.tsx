import React, { FC } from 'react';
import { MobileIntroduction } from './MobileIntroduction';
import { DesktopIntroduction } from './DesktopIntroduction';

export const Introduction: FC = () => {
  const textBodies = {
    textBody1: {
      title: 'Our Lab',
      content:
        'Welcome to the Healthy Cities Laboratory at HKU Department of Mechanical Engineering. Our group focuses on numerous research themes in urban area, including urban land-atmosphere interactions, urban hydro-climate, urban green infrastructure, building energy efficiency, urban fluid mechanics, and urban health. We are equipped with strong relevant research skills about model development, numerical simulation, and field experiment to investigate urban heat and moisture transport processes, city ventilation mechanisms, indoor-outdoor exchanges, human thermoregulation, climate change adaptation, etc.',
    },
    textBody2: {
      title: 'Our Mission',
      content:
        'Rapid urbanisation and the associated landscape modification have led to numerous environmental challenges, such as urban heat stress, air pollution, limited green space, excessive energy consumption, high possibility of airborne disease transmission, etc. To tackle these challenges, we have been working on developing and evaluating smart adaptation strategies, such as city landscape reform, urban green infrastructure implementation, climate-resilient urban planning, and energy-efficient building design.',
    },
    textBody3: {
      title: 'Our Vision',
      content:
        'We aim to foster sustainable urban planning and development towards future smart and healthy cities with more sustainable indoor and outdoor environment, better physical and mental health, more resilience to environmental changes such as global warming, climate-related disasters, and unforeseeable pandemics, etc.​',
    },
  };

  const images = {
    image1: {
      id: 1,
      src:
        'https://sjyurbanlab.github.io/website-assets/home/introduction/hong-kong-day.jpg',
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
