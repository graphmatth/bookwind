"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData } from "@/types/contactType";
import { contactFormSchema } from "@/schemas/contactSchema";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui//Label";
import { Textarea } from "@/components/ui/Textarea";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
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
        Got any questions about the product or searching on our platform ?{" "}
        <br />
        We&apos;re here top help.
      </p>
      <div
        className="max-w-lg mx-auto p-3 animate-enter-anim"
        style={{ "--stagger": 2 } as React.CSSProperties}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              placeholder="Your title"
              {...register("title")}
              className="w-full"
              variant={errors.title ? "error" : "default"}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@gmail.com"
              {...register("email")}
              className="w-full"
              variant={errors.title ? "error" : "default"}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-15"
            >
              Description
            </Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Describe your request"
              className="w-full"
              variant={errors.description ? "error" : "default"}
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
