import React from "react";

import { AuthorType } from "@/types/authorType";
import { fetchAuthorName } from "@/services/api";

export const AuthorName = async ({ authorKey }: AuthorType) => {
  try {
    const authorName = await fetchAuthorName(authorKey);
    return (
      <div>
        <p className="text-gray-700">
          <strong>Author:</strong> {authorName}
        </p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching author: ", error);
  }
};
