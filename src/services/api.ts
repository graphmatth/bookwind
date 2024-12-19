import {
  Book,
  BookSearchResponse,
  BookDetails,
  BookSearchResponseSchema,
  BookDetailsSchema,
} from "@/types/bookType";

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

    const parsedData = BookSearchResponseSchema.parse(data);
    return parsedData.docs;
  } catch (error) {
    console.error("Fetch error details:", {
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
      query: query,
    });
    return [];
  }
};

export const fetchBookDetails = async (id: string): Promise<BookDetails> => {
  try {
    const res = await fetch(`https://openlibrary.org/works/${id}.json`);

    if (!res.ok) {
      throw new Error("Failed to fetch book details");
    }

    const data = await res.json();
    const validatedData = BookDetailsSchema.parse(data);
    return validatedData;
  } catch (error) {
    console.error("Failed to fetch book details:", error);
    throw error;
  }
};
