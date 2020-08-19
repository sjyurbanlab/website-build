export type AdditionalLinks = {
  publicationLinks: Link[];
  otherLinks?: Link[];
};

export type Link = {
  id: number;
  link: string;
  title: string;
};
