import {
  Book,
  BookSearchResponse,
  BookDetails,
  BookSearchResponseSchema,
  BookDetailsSchema,
} from "@/types/bookType";

import { AuthorResponseSchema } from "@/schemas/authorSchema";

const baseUrl: string = "https://openlibrary.org/";

export const fetchBooks = async (
  query: string,
  limit: number = 10,
): Promise<Book[]> => {
  if (!query) return [];

  try {
    const response = await fetch(
      `${baseUrl}search.json?q=${encodeURIComponent(query)}&limit=${limit}&fields=key,title,author_name,subject,first_publish_year,cover_i,ratings_average`,
    );

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);

      const errorBody = await response.text();
      throw new Error(
        `Network response was not ok: ${response.status} - ${errorBody}`,
      );
    }

    const data: BookSearchResponse = await response.json();

    const parsedData = BookSearchResponseSchema.safeParse(data);

    if (!parsedData.success) {
      console.error("Validation failed:", parsedData.error);
      return [];
    }

    return parsedData.data.docs;
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
    const res = await fetch(`${baseUrl}works/${id}.json`);

    if (!res.ok) {
      throw new Error("Failed to fetch book details");
    }

    const data = await res.json();
    const validatedData = BookDetailsSchema.safeParse(data);

    if (!validatedData.success) {
      console.error("Validation failed:", validatedData.error);
      throw new Error("Invalid book details data");
    }

    return validatedData.data;
  } catch (error) {
    console.error("Failed to fetch book details:", error);
    throw error;
  }
};

export const fetchAuthorName = async (authorKey: string) => {
  try {
    const response = await fetch(`${baseUrl}${authorKey}.json`);

    if (!response.ok) {
      throw new Error(`Failed to fetch author: ${response.status}`);
    }
    const data = await response.json();

    const parsedData = AuthorResponseSchema.safeParse(data);

    if (!parsedData.success) {
      console.error("Validation failed:", parsedData.error);
      return "Unknown Author";
    }

    return parsedData.data.name || "Unknow Author";
  } catch (error) {
    console.error("Error fetching author:", error);
    return "Unknown Author";
  }
};
