"use server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import booksArray from "@/lib/data.json";
import { format } from "date-fns";
import BorrowButton from "@/app/components/BorrowButton";
export default async function BookDetailsPage({ params }) {
  const { id } = await params;

  const book = booksArray.books.find((b) => b.id == id);
  console.log(book, "book details");
  const date = new Date(book.publish_date);
  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <section className="min-h-screen bg-[#f5f5f5] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Top Navigation */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#14143c] transition">
            ← Back to Catalog
          </Link>

          <span>|</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div>
            {/* Book Image */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="relative">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={500}
                  height={700}
                  className="w-full h-130 object-cover rounded-xl"
                />

                <span className="absolute top-4 right-4 bg-[#dce8d1] text-[#4d6634] text-xs px-3 py-1 rounded-full font-medium">
                  Available
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <p className="text-gray-400 text-sm mb-2">📖</p>

                <p className="text-xs uppercase text-gray-400 mb-1">Pages</p>

                <h3 className="text-xl font-bold text-[#14143c]">
                  {book.pages}
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <p className="text-gray-400 text-sm mb-2">📅</p>

                <p className="text-xs uppercase text-gray-400 mb-1">
                  Published
                </p>

                <h3 className="text-xl font-bold text-[#14143c]">
                  {format(date, "MMMM dd, yyyy")}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Tags */}
              <div className="flex gap-3 mb-6">
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                  {book.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl font-bold text-[#14143c] leading-tight">
                {book.title}
              </h1>

              {/* Author */}
              <p className="text-2xl text-gray-500 mt-3">{book.author}</p>

              {/* Description */}
              <p className="text-gray-600 leading-8 mt=8">{book.description}</p>

              {/* Quote */}
              <p className="text-gray=500 leading=8 mt=6 italic">
                &quot;{book.quote}&quot;
              </p>
            </div>

            {/* Bottom Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-5 mt-10">
              <div>
                <p className="text-xs uppercase text-gray-400 mb-2">
                  Library Status
                </p>

                <h3 className="text-3xl font-bold text-[#14143c]">
                  Available Quantity: {book.available_quantity}
                </h3>
              </div>

              <BorrowButton></BorrowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
