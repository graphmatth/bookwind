"use client";

import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Search } from "@/components/Search";
import { LuSearch } from "react-icons/lu";

import { Command } from "cmdk";

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
    <>
      <div className="mt-6 sm:mt-10 flex justify-center text-sm">
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{ "--stagger": 4 } as React.CSSProperties}
          className="flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/40 hover:ring-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500 shadow-xs rounded-lg text-slate-400 animate-enter-anim"
        >
          <LuSearch
            color="currentColor"
            className="text-slate-30"
            strokeWidth={2.5}
            size={20}
          />
          <span className="flex-auto">Search a book...</span>
          <kbd className="hidden sm:block font-sans font-semibold">
            <abbr title="Command" className="no-underline text-slate-300">
              ⌘
            </abbr>{" "}
            K
          </kbd>
        </button>
      </div>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        className="flex h-auto flex-col gap-2 items-center"
        label="Global Command Menu"
        shouldFilter={false}
        overlayClassName="fixed inset-0 z-50 backdrop-blur-[2px] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        contentClassName="fixed rounded-md overflow-auto left-[50%] top-[5%] max-h-[90dvh] z-50 max-w-[90vw] grid w-full md:max-w-2xl translate-x-[-50%] bg-white gap-4 border shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-1/2 data-[state=closed]:slide-out-to-top-[5%] data-[state=open]:slide-in-from-bottom-1/2 data-[state=open]:slide-in-from-top-[10%] sm:rounded-lg"
      >
        <div className="px-3 sticky top-0 w-full bg-white">
          <VisuallyHidden.Root>
            <Dialog.Title>Search books</Dialog.Title>
          </VisuallyHidden.Root>

          <Search />
        </div>
      </Command.Dialog>
    </>
  );
};

export default CommandSearch;
