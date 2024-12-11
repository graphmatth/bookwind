# Book Finder Project

## Description

A simple application to search for books and view their details, leveraging the [Open Library API](https://openlibrary.org/developers/api).

## Technologies Used

- React
- Next.js
- TanStack Query
- TailwindCSS
- React Hook Form
- Zod for type validation

## Installation

1.  Clone this repository

```bash
git clone https://github.com/graphmatth/book-finder.git
```

2. Install dependencies

```bash
npm install
```

1. Run the application

```bash
npm run dev
```

## **Usage**

1. Visit the homepage and search for a book by title or author.
2. Click on a book to view its details, including the description and author.

---

## **Time Spent**

This project took approximately **2 days** to complete. During this time, I focused on:

- Setting up the project architecture.
- Integrating the **Open Library API** using **TanStack Query** and **React Server Components**.
- Styling the application with **TailwindCSS**.
- Handling state management and data validation with **Zod**.

---

## **Planned Evolutions**

1. **Improved Search Functionality**: Add filters and sorting options to refine search results.
2. **Favorites and History**: Allow users to save favorite books and view their recent searches when the search bar is empty.
3. **Enhanced UI/UX for Mobile Devices**: Improve the search experience; the current modal approach is suboptimal for smaller screens.
4. **Expanded Book Details Page**: Display more comprehensive data about each book.
5. **Keyboard Navigation**: Add support for navigating the command menu using the keyboard.
6. **Testing**: Add unit and integration tests to ensure the app functions correctly and reliably.

---

## **Technical Choices**

### **Client-Side Rendering (CSR)**

I opted for Client-Side Rendering for the search functionality, particularly for dynamic data like search results, leveraging TanStack Query for efficient data fetching and state management. This decision was influenced by the **TanStack Query** documentation, which highlights challenges, when combining TanStack Query with React **Server Components**.

> \*"Using React Query with Server Components makes most sense if:
>
> - You have an app using React Query and want to migrate to Server Components without rewriting all the data fetching.
> - You want a familiar programming paradigm but still want to sprinkle in the benefits of Server Components where it makes most sense.
> - You have some use case that React Query covers, but that your framework of choice does not cover.
>
> It's hard to give general advice on when it makes sense to pair React Query with Server Components and not. If you are just starting out with a new Server Components app, we suggest you start out with any tools for data fetching your framework provides you with and avoid bringing in React Query until you actually need it. This might be never, and that's fine, use the right tool for the job!"\*
>
> **Source**: [TanStack Query - Advanced SSR Guide](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr)

### **Server Components**

I utilized **React Server Components** for the **individual book detail pages**.

---
