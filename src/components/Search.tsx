import React from "react";

import { useQuery } from "@tanstack/react-query";

import { SearchResult } from "@/components/SearchResult";

export const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="grid items-center w-full">
      <main className="flex h-auto flex-col gap-2 items-center">
        <input
          value={searchQuery}
          type="text"
          className="text-black max-w-[500px] w-full h-8 rounded-sm px-2"
          // TO DO - useDebounce hook
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchResult searchQuery={searchQuery} />
      </main>
    </div>
  );
};
