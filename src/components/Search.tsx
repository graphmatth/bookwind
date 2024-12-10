import React from "react";

import { SearchResult } from "@/components/SearchResult";

export const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="flex h-auto flex-col gap-2 items-center">
      <input
        value={searchQuery}
        type="text"
        placeholder="Search a book..."
        className="w-full h-8 rounded-md px-2 border border-blue-950 sticky"
        // TO DO - useDebounce hook
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchResult searchQuery={searchQuery} />
    </div>
  );
};
