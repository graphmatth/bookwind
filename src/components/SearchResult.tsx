import React from "react";
import Image from "next/image";
import { Book } from "@/types/bookType";
import Link from "next/link";

interface SearchResultsProps {
  results: Book[] | undefined;
  isLoading: boolean;
  isError: boolean;
  status: string;
  error: Error | null;
}

export const SearchResult = ({
  results,
  isLoading,
  isError,
  error,
  status,
}: SearchResultsProps) => {
  const errorMessage =
    error instanceof Error ? error.message : "An unknown error occurred";

  if (isError) return <p className="text-red-500">Error: {errorMessage}</p>;

  return (
    <div className="flex flex-col gap-3 w-full px-3 pb-3 ">
      {results?.map((book: Book, key: React.Key | null | undefined) => {
        // the key include "/works/<key>" and we don't want it here
        const cleanKey = book.key.includes("/")
          ? book.key.split("/")[2]
          : book.key;

        return (
          <Link
            href={`/books/${cleanKey}`}
            key={key}
            className="flex gap-1 border border-slate-300 w-100 p-3 border-opacity-30 rounded-md items-center"
          >
            {book?.cover_i ? (
              <div className="min-w-[80px] p-2">
                <Image
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                  className="book-cover object-contain shadow-md rounded-sm overflow-hidden"
                  width={80}
                  height={115}
                />
              </div>
            ) : (
              <div className="p-2 ">
                <div className=" min-w-[80px] bg-slate-100 min-h-32 rounded-sm flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-gray-700"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                    <path d="M8 11h8" />
                    <path d="M8 7h6" />
                  </svg>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-1 py-4">
              <div>
                <p className="font-bold">{book?.title}</p>
                {book?.author_name && (
                  <p className=" text-gray-500 font-medium">
                    by {book?.author_name[0]}
                  </p>
                )}
              </div>
              <div>
                <div className="flex gap-2">
                  {book?.first_publish_year && (
                    <p className="text-slate-500 flex flex-nowrap">
                      Published : {book?.first_publish_year}{" "}
                      {book?.subject && `| ${book?.subject[0]}`}
                    </p>
                  )}
                </div>
                {book?.ratings_average && (
                  <div className="text-slate-600 flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-sky-500"
                      strokeLinejoin="round"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    {book?.ratings_average?.toFixed(1)}
                  </div>
                )}
              </div>
            </div>
          </Link>
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
      {status === "success" && results?.length === 0 && "No result"}
    </div>
  );
};
