export type Book = {
  key: string;
  title: string;
  author_name?: string[];
  ratings_average?: number;
  first_publish_year?: number;
  cover_i: string;
  subject: string[];
};

export type BookSearchResponse = {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Book[];
};

export type BookDetails = {
  description: string | { type: string; value: string };
  title: string;
  covers: number[];
  subject_places?: string[];
  subjects?: string[];
  first_publish_year?: string;
  first_publish_date?: number;
  subject_people?: string[];
  key: string;
  authors?: {
    author: {
      key: string;
    };
    type: {
      key: string;
    };
  }[];
  type?: {
    key: string;
  };
};
