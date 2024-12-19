import { StaticImageData } from "next/image";

export type BookCoverHomepage = {
  id?: string;
  src: string | StaticImageData;
  alt: string;
  className?: string;
  stagger: number;
  href: string;
};
