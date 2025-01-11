import React from "react";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";

export const Nav = () => {
  return (
    <nav
      className="flex justify-between p-5 container mx-auto relative animate-enter-anim"
      style={{ "--stagger": 1 } as React.CSSProperties}
    >
      <Link href="/" className="font-semibold">
        BookWind
      </Link>
      <div className="flex items-center gap-2 text-slate-600">
        <Link className="font-medium hover:underline" href="/contact">
          Contact
        </Link>{" "}
        <span className="opacity-60">|</span>
        <a
          href="https://github.com/graphmatth/bookwind"
          target="_blank"
          className=" block text-slate-600 hover:text-slate-700"
        >
          <span className="sr-only">BookWind on GitHub</span>
          <RxGithubLogo color="currentColor" size={20} />
        </a>
      </div>
    </nav>
  );
};
