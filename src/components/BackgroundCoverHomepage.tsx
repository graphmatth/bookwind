import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BookCoverHomepage } from "@/types/homeType";

import harryImg from "../../public/cover-homepage/harry-01.jpg";
import sapiens from "../../public/cover-homepage/sapiens.jpg";
import atomicHabits from "../../public/cover-homepage/atomic-habits.jpg";
import lastOlympianImg from "../../public/cover-homepage/the-last-olympian.jpg";

import { cn } from "@/utils/cn";

const books: BookCoverHomepage[] = [
  {
    id: "harry-potter",
    href: "/books/OL82548W",
    src: harryImg,
    alt: "harry potter cover book",
    stagger: 7,
    className:
      "bottom-[-9rem] rotate-[20deg] lg:rotate-[40deg] lg:bottom-0 left-[10%] lg:left-[-3rem]",
  },
  {
    id: "sapiens",
    href: "/books/OL17075811W",
    src: sapiens,
    alt: "Sapiens cover book",
    stagger: 8,
    className:
      "w-[150px] lg:w-[200px] right-[10%] lg:right-[-3rem] bottom-[-3rem] lg:bottom-0 rotate-[25deg] lg:rotate-[-55deg]",
  },
  {
    id: "atomic-habits",
    href: "/books/OL17930368W",
    src: atomicHabits,
    alt: "Atomic Habits cover book",
    stagger: 9,
    className:
      "hidden lg:block w-[175px] lg:w-[200px] right-[45%] lg:right-[-4rem] bottom-[-5rem] lg:bottom-auto top-auto lg:top-[10vh] rotate-[25deg] lg:rotate-[-25deg]",
  },
  {
    id: "last-olympian",
    href: "/books/OL492642W",
    src: lastOlympianImg,
    alt: "The last olympian cover book",
    stagger: 10,
    className: "hidden lg:block left-[-4rem] lg:top-[2rem] rotate-[100deg]",
  },
];

const BookCoverLink = ({
  src,
  alt,
  className,
  href,
  stagger,
}: BookCoverHomepage) => {
  return (
    <Link
      href={href}
      className={cn(
        `landscapephone:hidden fixed transition-opacity animate-enter-img-mobile md:animate-enter-img opacity-60 hover:!opacity-100 `,
        className,
      )}
    >
      <Image
        style={{ "--stagger": stagger } as React.CSSProperties}
        src={src}
        alt={alt}
        width={200}
      />
    </Link>
  );
};

export const BackgroundCoverHomepage = () => {
  return books.map((book) => {
    const { id, href, className, src, stagger, alt } = book;
    return (
      <BookCoverLink
        key={id}
        src={src}
        href={href}
        className={className}
        stagger={stagger}
        alt={alt}
      />
    );
  });
};
