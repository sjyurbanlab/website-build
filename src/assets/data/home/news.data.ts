import moment from 'moment';
import rawNews from './news.json';
import { News } from '@src/types/news';

export const news: News[] = Object.entries(rawNews)
  .map(([key, value]: [string, any]) => ({
    id: Number(key),
    image: value.image,
    title: value.title,
    content: value.content,
    author: value.author,
    date: value.date,
    link: value.link,
  }));
