import { Image } from '@src/types/image';
import { TextBody } from './textBody';

export type Introduction = {
  textBodies: {
    textBody1: TextBody;
    textBody2: TextBody;
    textBody3: TextBody;
  };
  images: {
    image1: Image;
    image2: Image;
    image3: Image;
  };
};
