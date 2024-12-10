"use client";

import React from "react";
import Image from "next/image";
import harryImg from "../../public/cover-homepage/harry-01.jpg";
import joinIn from "../../public/cover-homepage/join-in.jpg";
import jump from "../../public/cover-homepage/jump.jpg";
import lastOlympianImg from "../../public/cover-homepage/the-last-olympian.jpg";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CommandSearch from "@/components/CommandSearch";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Image
          alt="harry potter cover book"
          data-animate-img
          style={{ "--stagger": 7 } as React.CSSProperties}
          className="custombp:hidden fixed bottom-[-9rem] rotate-[20deg] lg:rotate-[40deg] lg:bottom-0 left-[10%] lg:left-[-3rem] "
          src={harryImg}
          width={200}
        />
        <Image
          className="custombp:hidden fixed w-[150px] lg:w-[200px] right-[10%] lg:right-[-3rem] bottom-[-3rem] lg:bottom-0 rotate-[25deg] lg:rotate-[-55deg] opacity-100 lg:opacity-40"
          src={joinIn}
          width={200}
          alt="harry potter cover book"
          data-animate-img
          style={{ "--stagger": 8 } as React.CSSProperties}
        />
        <Image
          className="custombp:hidden fixed hidden lg:block w-[175px] lg:w-[200px] right-[45%] lg:right-[-4rem] bottom-[-5rem] lg:bottom-auto top-auto lg:top-[10vh] rotate-[25deg] lg:rotate-[-25deg] opacity-40"
          src={jump}
          width={200}
          alt="harry potter cover book"
          data-animate-img
          style={{ "--stagger": 9 } as React.CSSProperties}
        />
        <Image
          className="custombp:hidden fixed hidden lg:block left-[-4rem] lg:top-[2rem] rotate-[100deg] opacity-40"
          src={lastOlympianImg}
          width={200}
          alt="harry potter cover book"
          data-animate-img
          style={{ "--stagger": 10 } as React.CSSProperties}
        />
        <div
          className="absolute inset-0 bg-grid-slate-900/[0.04] bg-grid bg-[bottom_1px_center]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black)",
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />
        <Nav />
        <div className="relative max-w-4xl mx-auto pt-5 md:pt-20 sm:pt-24 lg:pt-32">
          <h1
            data-animate
            style={{ "--stagger": 2 } as React.CSSProperties}
            className="text-slate-900 font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center p-1"
          >
            Rapidly <span className="text-sky-500">search books</span> without
            ever leaving your computer.
          </h1>
          <p
            data-animate
            style={{ "--stagger": 3 } as React.CSSProperties}
            className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto p-1 text-balance"
          >
            In reality, this is an exercise to join Jump, because I love the
            idea of joining Jump.
          </p>
          <CommandSearch />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

const Nav = () => {
  return (
    <nav
      className="flex justify-between p-5 container mx-auto relative"
      data-animate
      style={{ "--stagger": 1 as React.CSSProperties }}
    >
      <p className="font-semibold">BookWind</p>
      <a
        href="https://github.com/graphmatth/bookwind"
        target="_blank"
        className="ml-6 block text-slate-400 hover:text-slate-500"
      >
        <span className="sr-only">BookWind on GitHub</span>
        <svg
          viewBox="0 0 16 16"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
    </nav>
  );
};
