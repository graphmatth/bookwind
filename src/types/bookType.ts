export type Book = {
  key: string;
  title: string;
  author_name?: string[];
  ratings_average?: number;
  first_publish_year?: number;
  cover_i: string;
};

export type BookSearchResponse = {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Book[];
};
