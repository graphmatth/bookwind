import { Zodios } from "@zodios/core";
import { BookSearchResponseSchema, BookDetailsSchema } from "@/types/bookType";
import { AuthorResponseSchema } from "@/schemas/authorSchema";
import { z } from "zod";

const baseUrl: string = "https://openlibrary.org";

const ValidationError = z
  .object({ loc: z.array(z.string()), msg: z.string(), type: z.string() })
  .passthrough();
const HTTPValidationError = z
  .object({ detail: z.array(ValidationError) })
  .partial()
  .passthrough();

export const schemas = {
  ValidationError,
  HTTPValidationError,
};

export const client = new Zodios(baseUrl, [
  {
    method: "get",
    path: "/search.json",
    parameters: [
      {
        name: "q",
        description: "query",
        type: "Query",
        schema: z.string(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "fields",
        description: "Fields",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    alias: "getBook",
    response: BookSearchResponseSchema,
  },
  {
    method: "get",
    path: "/works/:olid",
    requestFormat: "json",
    alias: "getBookDetails",
    parameters: [
      {
        name: "olid",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: BookDetailsSchema,
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
  {
    method: "get",
    path: ":olid",
    requestFormat: "json",
    alias: "getAuthorDetails",
    parameters: [
      {
        name: "olid",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: AuthorResponseSchema,
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
]);
