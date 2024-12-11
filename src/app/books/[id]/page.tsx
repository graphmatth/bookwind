import React from "react";
import { fetchBookDetails } from "@/services/api";
import { Metadata } from "next";
import { AuthorName } from "./AuthorName";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface Params {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const { id } = await props.params;
  const bookDetails = await fetchBookDetails(id);

  const descriptionText =
    typeof bookDetails.description === "string"
      ? bookDetails.description
      : null;

  return {
    title: bookDetails.title || "Book Details",
    description: descriptionText || "Details about this book.",
  };
}

export default async function BookPage(props: Params) {
  const { id } = await props.params;

  const bookDetails = await fetchBookDetails(id);

  // description can be an object or a simple string
  const descriptionText =
    typeof bookDetails.description === "string"
      ? bookDetails.description
      : bookDetails.description?.value;

  if (!bookDetails) {
    return <div className="text-center">Book not found.</div>;
  }

  return (
    <div
      className="max-w-7xl mx-auto p-4 md:grid-cols-2 grid gap-6	"
      data-animate
      style={{ "--stagger": 2 } as React.CSSProperties}
    >
      {bookDetails.covers?.length && (
        <>
          <Image
            src={`https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`}
            alt={bookDetails.title}
            className="mt-4 w-64 h-auto mx-auto shadow-lg"
            width={256}
            height={414}
          />
        </>
      )}
      <div>
        <h1 className="text-3xl font-bold mb-4">{bookDetails.title}</h1>
        {bookDetails?.authors && (
          <div className="text-slate-700">
            {bookDetails.authors?.map((author, key) => (
              <AuthorName key={key} authorKey={author.author.key} />
            ))}
          </div>
        )}

        {bookDetails?.first_publish_date ? (
          <p className="text-slate-700">
            <strong>First Publish Date:</strong>{" "}
            {bookDetails.first_publish_date}
          </p>
        ) : bookDetails?.first_publish_year ? (
          <p className="text-slate-700">
            <strong>First Publish Year:</strong>{" "}
            {bookDetails.first_publish_year}
          </p>
        ) : null}

        {bookDetails.description && (
          <>
            <p className="text-slate-700">
              <strong>Description:</strong>{" "}
            </p>
            <ReactMarkdown className="markdown-container">
              {descriptionText || "No description available."}
            </ReactMarkdown>
          </>
        )}
      </div>
    </div>
  );
}
