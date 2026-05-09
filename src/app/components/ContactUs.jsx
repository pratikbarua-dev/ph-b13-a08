

export default function ContactUs() {
  return (
    <section className="bg-[#f5f5f5] px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6f7f48]">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#14143c]">
            Let’s Talk About Your Next Read
          </h2>

          <p className="mt-5 max-w-lg text-gray-600">
            Have questions about memberships, borrowing books, or your account?
            Reach out to us anytime and our team will get back to you shortly.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <p className="text-sm font-semibold text-[#14143c]">Email</p>
              <p className="text-gray-500">support@luminalibrary.com</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#14143c]">Phone</p>
              <p className="text-gray-500">+880 1234-567890</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#14143c]">Location</p>
              <p className="text-gray-500">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#14143c]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#14143c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#14143c]">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#14143c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#14143c]">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#14143c]"
              ></textarea>
            </div>

            <button className="w-full rounded-xl bg-[#14143c] py-3 font-medium text-white transition hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
