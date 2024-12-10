"use client";

import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Search } from "@/components/Search";

const CommandSearch = () => {
  const [open, setOpen] = useState(false);

  // Cmd+K or Ctrl+K trigger
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          <button
            type="button"
            className="flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/40 hover:ring-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-none text-slate-30"
              aria-hidden="true"
            >
              <path d="m19 19-3.5-3.5"></path>
              <circle cx="11" cy="11" r="6"></circle>
            </svg>
            <span className="flex-auto">Search a book...</span>
            <kbd className="hidden sm:block font-sans font-semibold">
              <abbr title="Command" className="no-underline text-slate-300">
                ⌘
              </abbr>{" "}
              K
            </kbd>
          </button>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" /> */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content asChild>
          <div className="fixed rounded-md left-[50%] top-[5%] z-50 max-w-[90vw] grid w-full md:max-w-2xl translate-x-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
            <VisuallyHidden.Root>
              <Dialog.Title>Search books</Dialog.Title>
            </VisuallyHidden.Root>
            <Search />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CommandSearch;
