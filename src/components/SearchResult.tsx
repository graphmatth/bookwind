import React from "react";
import { useSearchResults } from "@/hooks/useSearchResults";
import Image from "next/image";

export const SearchResult = ({ searchQuery = "" }) => {
  const { data, isLoading, isError, error, status } =
    useSearchResults(searchQuery);

  if (isError || error?.message?.length > 0)
    return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col gap-3 mt-2 w-full overflow-auto max-h-[80vh]">
      {data?.map((book, key) => {
        return (
          <div
            key={key}
            className="flex gap-2 border border-slate-300 w-100 p-3 border-opacity-30 rounded-md"
          >
            {book?.cover_i ? (
              <div className="min-h-[115px] min-w-[80px] flex">
                <Image
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                  className="book-cover object-contain py-2 pr-2"
                  width={80}
                  height={115}
                />
              </div>
            ) : (
              <div className="min-w-[80px] max-w-20 bg-slate-100 min-h-32 rounded-sm flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                  <path d="M8 11h8" />
                  <path d="M8 7h6" />
                </svg>
              </div>
            )}
            <div className="flex flex-col gap-1">
              <p className="font-bold">{book?.title}</p>
              {book?.author_name && (
                <p className="slate-300">by {book?.author_name[0]}</p>
              )}

              <div className="flex gap-2">
                {book?.first_publish_year && (
                  <p className="slate-300 flex flex-nowrap">
                    Published : {book?.first_publish_year}{" "}
                    {book?.subject && `| ${book?.subject[0]}`}
                  </p>
                )}
              </div>
              {book?.ratings_average && (
                <div className="slate-300 flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-yellow-400"
                    strokeLinejoin="round"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                  {book?.ratings_average?.toFixed(1)}
                </div>
              )}
            </div>
          </div>
        );
      })}
      {isLoading && (
        <div className="animate-pulse min-h-[100px] bg-slate-100 bg-muted flex gap-2 border border-slate-500 w-100 p-3 border-opacity-30 rounded-md">
          <div className="bg-muted animate-pulse min-w-[80px] bg-slate-200 min-h-32 rounded-md" />

          <div className="flex flex-col gap-1 w-full">
            <p className="bg-muted w-[150px]  animate-pulse font-bold bg-slate-200 rounded-sm">
              &nbsp;
            </p>
            <p className="bg-muted w-[full] animate-pulse slate-300 bg-slate-200 rounded-sm">
              &nbsp;
            </p>
            <p className="bg-muted w-[full] animate-pulse slate-300 bg-slate-200 rounded-sm">
              &nbsp;
            </p>
            <p className="bg-muted w-[full] animate-pulse slate-300 bg-slate-200 rounded-sm">
              &nbsp;
            </p>
          </div>
        </div>
      )}
      {status === "success" && data.length === 0 && "No result"}
    </div>
  );
};
