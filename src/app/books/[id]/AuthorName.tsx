import React from "react";
import { z } from "zod";
import { AuthorType } from "@/types/authorType";

const AuthorResponseSchema = z.object({
  name: z.string().optional(),
});

export const AuthorName = async ({ authorKey }: AuthorType) => {
  const fetchAuthorName = async () => {
    try {
      const response = await fetch(`https://openlibrary.org${authorKey}.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch author: ${response.status}`);
      }
      const data = await response.json();

      const parsedData = AuthorResponseSchema.parse(data);

      return parsedData.name || null;
    } catch (error) {
      console.error("Error fetching author:", error);
      return "Unknown Author";
    }
  };

  const authorName = await fetchAuthorName();

  return (
    <div>
      <p className="text-gray-700">
        <strong>Author:</strong> {authorName}
      </p>
    </div>
  );
};
