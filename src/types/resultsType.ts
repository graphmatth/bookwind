import { Book } from "@/types/bookType";

export type SearchResultsType = {
  results: Book[] | undefined;
  isLoading: boolean;
  isError: boolean;
  status: string;
  error: Error | null;
};
