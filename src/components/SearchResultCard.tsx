import React from "react";
import { Book } from "@/types/bookType";
import { Command } from "cmdk";
import Image from "next/image";
import { LuBookText, LuStar } from "react-icons/lu";

type SearchResultCardType = {
  book: Book;
  cleanKey: string;
  onSelect: () => void;
};

export const SearchResultCard = ({
  book,
  cleanKey,
  onSelect,
}: SearchResultCardType) => {
  const {
    cover_i,
    title,
    author_name,
    first_publish_year,
    subject,
    ratings_average,
  } = book;

  return (
    <Command.Item
      key={cleanKey}
      value={title}
      onSelect={onSelect}
      className="group flex gap-1 border border-slate-300 w-100 p-3 border-opacity-30 rounded-md items-center hover:shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-50 data-[selected=true]:ring-sky-50 data-[selected=true]:bg-sky-500 transition-all"
    >
      {cover_i ? (
        <div className="min-w-[80px] p-2">
          <Image
            src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
            alt={title}
            className="object-contain shadow-md rounded-sm overflow-hidden"
            width={80}
            height={115}
          />
        </div>
      ) : (
        <div className="p-2 ">
          <div className="min-w-[80px] bg-slate-100 min-h-32 rounded-sm flex items-center justify-center">
            <LuBookText
              color="currentColor"
              strokeWidth={2}
              size={24}
              className="text-gray-70"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-1 py-4">
        <div>
          <p className="font-bold group-hover:text-white group-data-[selected=true]:text-white text-gray-500">
            {title}
          </p>
          {author_name && (
            <p className="font-medium group-hover:text-white group-data-[selected=true]:text-white">
              by {author_name[0]}
            </p>
          )}
        </div>
        <div>
          <div className="flex gap-2">
            {first_publish_year && (
              <p className="text-slate-500 flex flex-nowrap group-hover:text-white group-data-[selected=true]:text-white">
                Published : {first_publish_year} {subject && `| ${subject[0]}`}
              </p>
            )}
          </div>
          {ratings_average && (
            <div className="flex gap-1 items-center group-hover:text-white group-data-[selected=true]:text-white text-sky-500">
              <LuStar
                strokeWidth={2}
                size={18}
                color="currentColor"
                fill="currentColor"
                className="group-hover:text-white group-data-[selected=true]:text-white"
              />
              {ratings_average?.toFixed(1)}
            </div>
          )}
        </div>
      </div>
    </Command.Item>
  );
};

export const SearchResultCardLoading = () => {
  return (
    <Command.Loading className="w-full px-3 mb-3">
      <div className="animate-pulse min-h-[100px] bg-slate-100 bg-muted flex gap-2 border border-slate-500 w-100 p-3 border-opacity-30 rounded-md">
        <div className="bg-muted animate-pulse min-w-[80px] bg-slate-200 min-h-32 rounded-md" />
        <div className="flex flex-col gap-1 w-full">
          <div className="bg-muted w-[150px]  animate-pulse font-bold bg-slate-200 rounded-sm h-4" />
          <div className="bg-muted w-[full] animate-pulse slate-300 bg-slate-200 rounded-sm h-4" />
          <div className="bg-muted w-[full] animate-pulse slate-300 bg-slate-200 rounded-sm h-4" />
          <div className="bg-muted w-[full] animate-pulse slate-300 bg-slate-200 rounded-sm h-4" />
        </div>
      </div>
    </Command.Loading>
  );
};
