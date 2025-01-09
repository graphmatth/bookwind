import { Book, BookDetails, BookSchema } from "@/types/bookType";

import { client } from "./client";

const fields = Object.keys(BookSchema.shape).join(",");

export const fetchBooks = async (
  query: string,
  limit: number = 10,
): Promise<Book[]> => {
  if (!query) return [];

  try {
    const response = await client.getBook({
      queries: {
        q: query,
        limit,
        fields,
      },
    });

    return response.docs;
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
    const response = await client.getBookDetails({
      params: {
        olid: id,
      },
    });

    return response;
  } catch (error) {
    console.error("Failed to fetch book details:", error);
    throw error;
  }
};

export const fetchAuthorName = async (authorKey: string) => {
  try {
    const response = await client.getAuthorDetails({
      params: {
        olid: authorKey,
      },
    });

    return response.name;
  } catch (error) {
    console.error("Error fetching author:", error);
    return "Unknown Author";
  }
};
