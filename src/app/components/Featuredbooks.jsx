import booksList from "@/lib/data.json";
import Image from "next/image";
import Link from "next/link";
export function FeaturedBooks() {
  const books = booksList.books.slice(0, 8); // Get the first 8 books for the featured section

  return (
    <section className="px-6 py-14 bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#14143c]">
              Featured Books
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Curated selections for the inquisitive mind.
            </p>
          </div>

          <button className="text-sm font-medium text-[#14143c] hover:underline">
            View All →
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BookCard({ book }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={book.image_url}
          alt={book.title}
          width={300}
          height={420}
          className="h-[320px] w-full object-cover"
        />

        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-medium text-white ${
            book.status === "Available" ? "bg-[#6f7f48]" : "bg-gray-700"
          }`}
        >
          {book.status}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-[10px] tracking-[0.2em] text-gray-400">
          {book.category}
        </p>

        <h3 className="mt-2 text-lg font-semibold leading-snug text-[#14143c] line-clamp-2">
          {book.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">{book.author}</p>

        {/* Push button to bottom */}
        <Link href={`/books/details/${book.id}`}>
          <button className="w-full hover:cursor-pointer mt-6 bg-[#14143c] text-white py-3 rounded-xl hover:opacity-90 transition">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}
