import rawIntroduction from './introduction.json';
import { Introduction } from '@src/types/introduction';
import { Image } from '@src/types/image';

const populateImage = (key: string, value: string): Image => ({
  id: Math.round(Math.random() * 3),
  src: value,
  alt: key,
});

export const introduction: Introduction = {
  textBodies: rawIntroduction.textBodies,
  images: {
    image1: populateImage('image1', rawIntroduction.images.image1),
    image2: populateImage('image2', rawIntroduction.images.image2),
    image3: populateImage('image3', rawIntroduction.images.image3),
  },
};
