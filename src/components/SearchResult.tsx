import React from "react";

import { useSearchResults } from "@/hooks/useSearchResults";

export const SearchResult = ({ searchQuery = "" }) => {
  const { data, isLoading, isError, error, status } =
    useSearchResults(searchQuery);

  if (isError) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col gap-3 mt-2 w-full max-w-[500px]">
      {data?.map((book, key) => {
        return (
          <div
            key={key}
            className="flex gap-2 border border-slate-300 w-100 p-3 border-opacity-30 rounded-md ali"
          >
            {book?.cover_i ? (
              // TO DO - use <Image /> component
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                className="book-cover object-contain py-2 pr-2"
                width="80"
              />
            ) : (
              // TO DO - Find a default icon
              <div className="min-w-[80px] bg-slate-400 min-h-32"></div>
            )}
            <div className="flex flex-col gap-1">
              <p className="font-bold">{book?.title}</p>
              {book?.author_name && (
                <p className="slate-300">by {book?.author_name}</p>
              )}

              {book?.first_publish_year && (
                <p className="slate-300"> {book?.first_publish_year}</p>
              )}
              {book?.ratings_average && (
                <p className="slate-300">
                  {book?.ratings_average?.toFixed(1)} / 5
                </p>
              )}
            </div>
          </div>
        );
      })}
      {/* // TO DO - Make a Skeleton for loading state */}
      {isLoading && "Loading..."}
      {status === "success" && data.length === 0 && "No result"}
    </div>
  );
};
