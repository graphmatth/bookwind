import React from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchResult } from "@/components/SearchResult";
import { useSearchResults } from "@/hooks/useSearchResults";

export const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const debouncedQuery = useDebounce(searchQuery, 500);

  const {
    data: results,
    isLoading,
    isError,
    error,
    status,
  } = useSearchResults(debouncedQuery);

  return (
    <div className="flex h-auto flex-col gap-2 items-center">
      <div className="p-3 sticky top-0 w-full bg-white">
        <input
          value={searchQuery}
          type="text"
          placeholder="Search a book..."
          className="w-full h-10 p-2 rounded-md border border-blue-950 sticky top-0"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {searchQuery?.length > 0 && (
        <SearchResult
          results={results}
          isLoading={isLoading}
          isError={isError}
          error={error}
          status={status}
        />
      )}
    </div>
  );
};
