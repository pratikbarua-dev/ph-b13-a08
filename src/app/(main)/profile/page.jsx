"use client";
import Image from "next/image";
import React from "react";
import { useSession } from "@/lib/auth-client";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session, isPending, error } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const updateHandler = async (data) => {
    console.log("Updated Data:", data);
    // Here you would typically send the updated data to your backend API
    await authClient.updateUser({
      image: data.image,
      name: data.name,
    });
  };
  if (isPending) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>User not logged in</p>
      </div>
    );
  }
  const user = session.user;

  console.log(user);

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
                {format(new Date(user.createdAt), "MMMM d, yyyy")}
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
          <form onSubmit={handleSubmit(updateHandler)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Full Name
              </label>

              <input
                {...register("name", { required: "Full name is required" })}
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
                {...register("image", {
                  required: "Profile image URL is required",
                })}
                type="text"
                defaultValue={user.image}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#14143c]"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                type="submit"
                className="bg-[#14143c] hover:cursor-pointer text-white px-6 py-3 rounded-xl hover:opacity-90 transition font-medium"
              >
                Update Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
