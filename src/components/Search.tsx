import React from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchResult } from "@/components/SearchResult";
import { useSearchResults } from "@/hooks/useSearchResults";
import { Command } from "cmdk";

export const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const debouncedQuery = useDebounce(searchQuery, 500);

  const { data, isLoading, isError, error, status } =
    useSearchResults(debouncedQuery);

  return (
    <div className="flex h-auto flex-col gap-2 items-center">
      <div className="p-3 top-0 w-full bg-white">
        <Command.Input
          value={searchQuery}
          placeholder="Search a book..."
          className="w-full h-10 p-2 rounded-md border border-blue-950 sticky top-0"
          onValueChange={setSearchQuery}
        />
      </div>
      {debouncedQuery.length > 0 && (
        <SearchResult
          results={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
          status={status}
        />
      )}
    </div>
  );
};
