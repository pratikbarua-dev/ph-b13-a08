export default function HeroBanner() {
  return (
    <div className="w-full flex items-center justify-center bg-[#f3f4f6] p-6">
      <div
        className="relative w-full max-w-6xl overflow-hidden rounded-3xl px-10 py-16 md:px-16"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(18,16,84,0.95), rgba(18,16,84,0.75)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Find Your Next <br /> Read
          </h1>

          <p className="mt-6 text-sm md:text-lg leading-8 text-gray-300">
            Step into the modern atheneum. Discover thousands of curated titles
            across disciplines in a quiet, distraction-free environment designed
            for the modern scholar.
          </p>

          <button className="mt-8 flex items-center gap-3 rounded-xl bg-[#7d8f4f] px-6 py-4 text-white font-semibold transition hover:scale-105">
            Browse Now
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
