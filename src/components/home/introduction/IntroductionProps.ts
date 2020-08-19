import { Image } from '@src/types/image';

export type IntroductionProps = {
  textBodies: {
    textBody1?: TextBody;
    textBody2?: TextBody;
    textBody3?: TextBody;
  };
  images: {
    image1: Image;
    image2: Image;
    image3: Image;
  };
};

export type TextBody = {
  title?: string;
  content?: string;
};
