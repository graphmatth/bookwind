"use client";

import React from "react";
import { BackgroundCoverHomepage } from "@/components/BackgroundCoverHomepage";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CommandSearch from "@/components/CommandSearch";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BackgroundCoverHomepage />
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
            Find books instantly, browse seamlessly
          </p>
          <CommandSearch />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}
