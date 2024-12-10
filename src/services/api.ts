import { Book, BookSearchResponse } from "@/types/bookType";

export const fetchBooks = async (
  query: string,
  limit: number = 10,
): Promise<Book[]> => {
  if (!query) return [];

  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=${limit}&fields=key,title,author_name,subject,first_publish_year,cover_i,ratings_average`,
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
