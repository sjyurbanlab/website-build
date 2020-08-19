import rawImages from './carousel-images.json';
import { CarouselImage } from '@src/types/carouselImage';

export const carouselImages: CarouselImage[] = Object.entries(rawImages)
  .map(([key, value]) => ({
    id: Number(key),
    src: value.image,
    alt: value.title,
    title: value.title,
  }))
  .sort((a, b) => a.id - b.id);
