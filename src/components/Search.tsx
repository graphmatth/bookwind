import React from "react";

import { useQuery } from "@tanstack/react-query";

type Book = {
  key: string;
  title: string;
  author_name?: string[];
};

type BookSearchResponse = {
  docs: Book[];
};

export const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const query = useQuery({
    queryKey: ["books", searchQuery],
    queryFn: () => fetchBooks(searchQuery),
    enabled: !!searchQuery,
    retry: 1,
    // The default retryDelay is set to double (starting at 1000ms) with each attempt, but not exceed 20 seconds:
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 20000),
  });

  if (query.error) return "An error has occurred: " + query.error.message;

  return (
    <div className="grid items-center w-full">
      <main className="flex h-auto flex-col gap-2 items-center">
        <input
          value={searchQuery}
          type="text"
          className="text-black"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {query?.data?.map((book, key) => {
          return <p key={key}>{book?.title}</p>;
        })}
        {query.isLoading && "Loading..."}
        {query.status === "success" && query.data.length === 0 && "No result"}
      </main>
    </div>
  );
};

const fetchBooks = async (query: string): Promise<Book[]> => {
  if (!query) return [];

  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}&limit=10`,
    );

    // Add more detailed error handling
    if (!response.ok) {
      // Log the actual status for debugging
      console.error(`HTTP error! status: ${response.status}`);

      // Provide more context
      const errorBody = await response.text();
      throw new Error(
        `Network response was not ok: ${response.status} - ${errorBody}`,
      );
    }

    const data: BookSearchResponse = await response.json();
    return data.docs;
  } catch (error) {
    // More comprehensive error logging
    console.error("Fetch error details:", {
      message: error?.message,
      query: query,
    });
    return [];
  }
};
