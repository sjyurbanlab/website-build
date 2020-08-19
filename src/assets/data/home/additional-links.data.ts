import rawLinks from './additional-links.json';
import { AdditionalLinks, Link } from '@src/types/additionalLinks';

const parseLinks = (links: any): Link[] =>
  Object.entries(links)
    .map(([key, value]: [string, any]) => ({
      id: Number(key),
      link: value.link,
      title: value.title,
    }))
    .sort((a, b) => a.id - b.id);

export const additionalLinks: AdditionalLinks = {
  publicationLinks: rawLinks.publications
    ? parseLinks(rawLinks.publications)
    : [],
  otherLinks: rawLinks.otherLinks && parseLinks(rawLinks.otherLinks),
};
