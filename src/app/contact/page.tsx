"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData } from "@/types/contactType";
import { contactFormSchema } from "@/schemas/contactSchema";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data submitted:", JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <>
      <h1
        className="text-2xl md:text-6xl font-semibold mb-4 text-center mt-20 animate-enter-anim"
        style={{ "--stagger": 1 } as React.CSSProperties}
      >
        Contact Our Team
      </h1>
      <p
        className="mt-6 mb-6 text-lg text-slate-600 text-center max-w-3xl mx-auto p-1 text-balance animate-enter-anim"
        style={{ "--stagger": 1 } as React.CSSProperties}
      >
        Got any questions about the product or searching on our platform ?
        We&apos;re here top help. Chat out friendly team 27/7 and get an answer
        in less than 5 minutes.
      </p>
      <div
        className="max-w-lg mx-auto p-3 animate-enter-anim"
        style={{ "--stagger": 2 } as React.CSSProperties}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-15"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              {...register("title")}
              className={`*:h-10 p-2 rounded-md border w-full ${errors.title ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-15"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`h-10 p-2 rounded-md border w-full ${errors.email ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-15"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              rows={4}
              className={`min-h-20 p-2 rounded-md border  w-full ${errors.description ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
