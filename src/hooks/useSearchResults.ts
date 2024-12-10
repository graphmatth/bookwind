import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchBooks } from "@/services/api";
import { Book } from "@/types/bookType";

/**
 * Custom hook to fetch book search results.
 * @param query - The search string entered by the user.
 * @returns Query state: data, isLoading, isError, error
 */
export const useSearchResults = (
  query: string,
): UseQueryResult<Book[], Error> => {
  return useQuery({
    queryKey: ["searchResults", query], // Cache based on search query
    queryFn: () => fetchBooks(query),
    enabled: query.length > 0, // Only fetch if the query is non-empty
    staleTime: 1000 * 60 * 5, // 5 minutes before data becomes stale
  });
};
