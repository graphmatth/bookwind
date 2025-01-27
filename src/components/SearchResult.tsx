import React from "react";
import { SearchResultsType } from "@/types/resultsType";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { SearchResultCard, SearchResultCardLoading } from "./SearchResultCard";

export const SearchResult = ({
  results,
  isLoading,
  isError,
  error,
  status,
}: SearchResultsType) => {
  const errorMessage =
    error instanceof Error ? error.message : "An unknown error occurred";

  const router = useRouter();

  if (isError) return <p className="text-red-500">Error: {errorMessage}</p>;

  if (isLoading) return <SearchResultCardLoading />;
  if (isError) return <div>Error loading results</div>;
  if (!results?.length && status === "success")
    return <Command.Empty>No results found</Command.Empty>;
  if (!results) return null;

  return (
    <Command.List className="flex flex-col gap-3 w-full px-3 pb-3 max-h-[80vh] overflow-auto">
      {results?.map((book) => (
        <SearchResultCard
          key={book.key}
          book={book}
          onSelect={() => router.push(`/books/${book.key}`)}
        />
      ))}
    </Command.List>
  );
};
