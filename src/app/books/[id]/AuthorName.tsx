import React from "react";

interface AuthorNameProps {
  authorKey: string;
}

export const AuthorName = async ({ authorKey }: AuthorNameProps) => {
  const fetchAuthorName = async () => {
    try {
      const response = await fetch(`https://openlibrary.org${authorKey}.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch author: ${response.status}`);
      }
      const data = await response.json();
      return data.name;
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
