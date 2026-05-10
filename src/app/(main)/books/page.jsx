"use client";

import React, { useState } from "react";
import booksArray from "@/lib/data.json";
import Image from "next/image";
import Link from "next/link";
export default function AllBooksPage() {
  const [search, setSearch] = useState("");
  const filteredBooks = booksArray.books.filter((book) => {
    return book.title.toLowerCase().includes(search.toLowerCase());
  });
  console.log(filteredBooks, "filtered books");

  // Categories as objects with id
  const categories = booksArray.categories;

  const books = booksArray.books;

  return (
    <section className="min-h-screen bg-[#f5f5f5] px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-[260px] bg-white rounded-2xl p-6 shadow-sm h-fit">
          <h2 className="text-2xl font-bold text-[#14143c] mb-8">Discover</h2>

          {/* Search */}
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase text-gray-500 mb-3">
              Search
            </p>

            <input
              type="text"
              placeholder="Title, Author, ISBN..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#14143c]"
            />
          </div>

          {/* Categories */}
          <div>
            <p className="text-xs font-semibold uppercase text-gray-500 mb-4">
              Categories
            </p>

            <div className="flex flex-col gap-3">
              {categories.map((category) => (
                <Link href={`/books/${category.id}`} key={category.id}>
                  <button className="w-full text-left px-4 py-3 rounded-xl bg-[#f5f5f5] hover:bg-[#14143c] hover:text-white transition font-medium text-sm">
                    {category.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={300}
                  height={420}
                  className="h-[320px] w-full object-cover"
                />

                <div className="p-5">
                  <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                    {book.category}
                  </span>

                  <h3 className="text-2xl font-bold text-[#14143c] mt-4 leading-tight">
                    {book.title}
                  </h3>

                  <p className="text-gray-500 mt-2">{book.author}</p>
                  <Link href={`/books/details/${book.id}`}>
                    <button className="w-full hover:cursor-pointer mt-6 bg-[#14143c] text-white py-3 rounded-xl hover:opacity-90 transition">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
