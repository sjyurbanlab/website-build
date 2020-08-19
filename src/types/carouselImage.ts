import { Image } from './image';

export interface CarouselImage extends Image {
  id: number;
  src: string;
  alt: string;
  title: string;
}
