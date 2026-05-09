import Image from "next/image";
import React from "react";

export default function ProfilePage() {
  const user = {
    name: "Eleanor Vance",
    email: "eleanor.vance@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    memberSince: "Oct 2023",
    activeLoans: 3,
    profileUrl: "https://example.com/my-photo.jpg",
  };

  return (
    <section className="min-h-screen bg-[#f5f5f5] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left Profile Card */}
        <div className="w-full lg:w-[260px] bg-white rounded-2xl p-6 shadow-sm h-fit">
          <div className="flex flex-col items-center text-center">
            <Image
              src={user.image}
              alt={user.name}
              width={90}
              height={90}
              className="w-[90px] h-[90px] rounded-full object-cover"
            />

            <h2 className="text-2xl font-bold text-[#14143c] mt-5">
              {user.name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">{user.email}</p>
          </div>

          {/* Stats */}
          <div className="border-t border-gray-100 mt-6 pt-5 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Member Since</span>

              <span className="font-semibold text-[#14143c]">
                {user.memberSince}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Active Loans</span>

              <span className="bg-[#dce8d1] text-[#4d6634] px-3 py-1 rounded-full text-xs font-semibold">
                {user.activeLoans} Books
              </span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-[#14143c]">
              Profile Information
            </h1>

            <button className="text-[#14143c] text-lg hover:opacity-70 transition">
              ✎
            </button>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Full Name
              </label>

              <input
                type="text"
                defaultValue={user.name}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#14143c]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email Address
              </label>

              <input
                type="email"
                defaultValue={user.email}
                disabled
                className="w-full border border-gray-200 bg-gray-100 rounded-xl px-4 py-3 outline-none text-gray-500"
              />

              <p className="text-xs text-gray-400 mt-2">
                Email cannot be changed directly. Contact support.
              </p>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Profile Image URL
              </label>

              <input
                type="text"
                defaultValue={user.profileUrl}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#14143c]"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                type="submit"
                className="bg-[#14143c] text-white px-6 py-3 rounded-xl hover:opacity-90 transition font-medium"
              >
                Update Information
              </button>

              <button
                type="button"
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
