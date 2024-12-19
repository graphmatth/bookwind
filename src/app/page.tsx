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
import Link from "next/link";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Link
          href="/books/OL82548W"
          className="opacity-100 md:opacity-60 hover:opacity-100 transition-opacity"
        >
          <Image
            style={
              {
                "--stagger": 7,
              } as React.CSSProperties
            }
            className="hover:!opacity-100 transition-opacity landscapephone:hidden fixed bottom-[-9rem] rotate-[20deg] lg:rotate-[40deg] lg:bottom-0 left-[10%] lg:left-[-3rem] opacity-100 lg:opacity-60 animate-enter-img-mobile md:animate-enter-img"
            src={harryImg}
            alt="harry potter cover book"
            width={200}
          />
        </Link>
        <Link
          href="/books/OL9821758W"
          className="opacity-100 md:opacity-60 hover:opacity-100 transition-opacity"
        >
          <Image
            style={
              {
                "--stagger": 8,
              } as React.CSSProperties
            }
            className="hover:!opacity-100 transition-opacity  landscapephone:hidden fixed w-[150px] lg:w-[200px] right-[10%] lg:right-[-3rem] bottom-[-3rem] lg:bottom-0 rotate-[25deg] lg:rotate-[-55deg] opacity-100 lg:opacity-60 animate-enter-img-mobile md:animate-enter-img"
            src={joinIn}
            width={200}
            alt="Join In cover book"
          />
        </Link>
        <Link
          href="/books/OL20196399W"
          className="opacity-60 transform hover:opacity-100 transition-opacity"
        >
          <Image
            style={
              {
                "--stagger": 9,
              } as React.CSSProperties
            }
            className="hover:!opacity-100 transition-opacity  duration-300 landscapephone:hidden fixed hidden lg:block w-[175px] lg:w-[200px] right-[45%] lg:right-[-4rem] bottom-[-5rem] lg:bottom-auto top-auto lg:top-[10vh] rotate-[25deg] lg:rotate-[-25deg] opacity-40 enter-img-mobile md:animate-enter-img"
            src={jump}
            width={200}
            alt="Jump cover book"
          />
        </Link>
        <Link
          href="/books/OL492642W"
          className="opacity-60 transform hover:opacity-100 transition-opacity"
        >
          <Image
            style={
              {
                "--stagger": 10,
              } as React.CSSProperties
            }
            className="hover:!opacity-100 landscapephone:hidden fixed hidden lg:block left-[-4rem] lg:top-[2rem] rotate-[100deg] opacity-40 md:animate-enter-img"
            src={lastOlympianImg}
            width={200}
            alt="The last olympian cover book"
          />
        </Link>

        <div className="relative max-w-4xl mx-auto pt-5 md:pt-20 sm:pt-24 lg:pt-32">
          <h1
            style={{ "--stagger": 2 } as React.CSSProperties}
            className="text-slate-900 font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center p-1 animate-enter-anim"
          >
            Rapidly <span className="text-sky-500">search books</span> without
            ever leaving your computer.
          </h1>
          <p
            style={{ "--stagger": 3 } as React.CSSProperties}
            className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto p-1 text-balance animate-enter-anim"
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
