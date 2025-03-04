# Book Finder Project

## Description


https://github.com/user-attachments/assets/0a4da19d-51ff-440f-91f8-1efb072407ed


A simple application to search for books and view their details, leveraging the [Open Library API](https://openlibrary.org/developers/api).

## Technologies Used

- React
- Next.js
- TanStack Query
- TailwindCSS
- React Hook Form
- Zod for type validation
- Zodios

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

I opted for Client-Side Rendering for the search functionality, particularly for dynamic data like search results, leveraging TanStack Query for efficient data fetching and state management. This decision was influenced by the **TanStack Query** documentation, which highlights challenges, when combining TanStack Query with **React Server Components**.

### **Server Components**

I utilized **React Server Components** for the **individual book detail pages**.

---
