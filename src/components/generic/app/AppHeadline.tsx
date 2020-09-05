import React, { FC } from 'react';
import { house } from '@assets/images';

export const AppHeadline: FC = () => (
  <div className={'flex items-center justify-center space-x-4'}>
    <div>
      <img src={house} alt={'house'} className={'h-12 md:h-16 w-auto'} />
    </div>
    <div>
      <p className={'text-xl md:text-3xl'}>Healthy Cities Laboratory</p>
      <p>A young and rising team led by Prof./Dr. Jiyun Song</p>
    </div>
  </div>
);
