import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchResultsType } from "@/types/resultsType";

export const SearchResult = ({
  results,
  isLoading,
  isError,
  error,
  status,
}: SearchResultsType) => {
  const errorMessage =
    error instanceof Error ? error.message : "An unknown error occurred";

  if (isError) return <p className="text-red-500">Error: {errorMessage}</p>;

  return (
    <div className="flex flex-col gap-3 w-full px-3 pb-3 ">
      {results?.map((book) => {
        const {
          key,
          cover_i,
          title,
          author_name,
          first_publish_year,
          subject,
          ratings_average,
        } = book;

        // the key include "/works/<key>" and we don't want it here
        const formattedId = book.key.replace("/works/", "");

        return (
          <Link
            href={`/books/${formattedId}`}
            key={key}
            className="group flex gap-1 border border-slate-300 w-100 p-3 border-opacity-30 rounded-md items-center hover:shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-50 transition-all hover:-translate-y-px	"
          >
            {cover_i ? (
              <div className="min-w-[80px] p-2">
                <Image
                  src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
                  alt={title}
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
                    className="text-gray-70"
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
                <p className="font-bold group-hover:text-white">{title}</p>
                {author_name && (
                  <p className=" text-gray-500 font-medium group-hover:text-white">
                    by {author_name[0]}
                  </p>
                )}
              </div>
              <div>
                <div className="flex gap-2">
                  {first_publish_year && (
                    <p className="text-slate-500 flex flex-nowrap group-hover:text-white">
                      Published : {first_publish_year}{" "}
                      {subject && `| ${subject[0]}`}
                    </p>
                  )}
                </div>
                {ratings_average && (
                  <div className="text-slate-600 flex gap-1 items-center group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-sky-500 group-hover:text-white"
                      strokeLinejoin="round"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    {ratings_average?.toFixed(1)}
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
