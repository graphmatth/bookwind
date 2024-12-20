import React from "react";
import { fetchBookDetails } from "@/services/api";
import { Metadata } from "next";
import { AuthorName } from "./AuthorName";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default async function BookPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const bookDetails = await fetchBookDetails(id);

  const {
    covers,
    title,
    authors,
    first_publish_date,
    description,
    first_publish_year,
  } = bookDetails;

  // description can be an object or a simple string
  const bookDescription =
    typeof description === "string" ? description : description?.value;

  if (!bookDetails) {
    return <div className="text-center">Book not found.</div>;
  }

  return (
    <div
      className="max-w-7xl mx-auto p-4 md:grid-cols-2 grid gap-6 animate-enter-anim"
      style={{ "--stagger": 2 } as React.CSSProperties}
    >
      {covers?.length && (
        <>
          <Image
            src={`https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`}
            alt={title}
            className="mt-4 w-64 h-auto mx-auto shadow-lg"
            width={256}
            height={414}
          />
        </>
      )}
      <div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {authors && (
          <div className="text-slate-700">
            {authors?.map((author) => (
              <AuthorName
                key={author.author.key}
                authorKey={author.author.key}
              />
            ))}
          </div>
        )}

        {first_publish_date ? (
          <p className="text-slate-700">
            <strong>First Publish Date:</strong> {first_publish_date}
          </p>
        ) : first_publish_year ? (
          <p className="text-slate-700">
            <strong>First Publish Year:</strong> {first_publish_year}
          </p>
        ) : null}

        {description ? (
          <>
            <p className="text-slate-700">
              <strong>Description:</strong>{" "}
            </p>
            <ReactMarkdown className="markdown-container">
              {bookDescription}
            </ReactMarkdown>
          </>
        ) : (
          "No description available."
        )}
      </div>
    </div>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await props.params;
  const bookDetails = await fetchBookDetails(id);

  const { title, description } = bookDetails;

  const descriptionText = typeof description === "string" ? description : null;

  return {
    title: title || "Book Details",
    description: descriptionText || "Details about this book.",
  };
}
