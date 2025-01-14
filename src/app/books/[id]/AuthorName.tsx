import React from "react";

import { AuthorType } from "@/types/authorType";
import { fetchAuthorName } from "@/services/api";

export const AuthorName = async ({ authorKey }: AuthorType) => {
  const authorName = await fetchAuthorName(authorKey);
  return (
    <div>
      <p className="text-gray-700">
        <strong>Author:</strong> {authorName}
      </p>
    </div>
  );
};
