"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const regisHandler = (data) => {
    console.log(data);
  };

  return (
    <section className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1400&auto=format&fit=crop"
            alt="Library"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#14143c]/70" />

          <div className="absolute bottom-10 left-10 right-10 text-white z-10">
            <h1 className="text-4xl font-bold leading-tight">
              Join The Athenaeum
            </h1>

            <p className="text-sm text-gray-200 mt-4 leading-7 max-w-md">
              Create your scholar account and start exploring the library.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          {/* Tabs */}
          <div className="flex items-center gap-8 mb-8">
            <Link
              href="/login"
              className=" text-[#14143c] font-semibold border-b-2 border-[#14143c] pb-2"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="text-gray-400 hover:text-[#14143c] transition pb-2 "
            >
              Register
            </Link>
          </div>

          {/* Google OAuth */}
          <button
            type="button"
            className="w-full border hover:cursor-pointer border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
          >
            <span className="text-lg">
              <FaGoogle />
            </span>

            <span className="font-medium text-sm text-gray-700">
              CONTINUE WITH GOOGLE
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-gray-200" />

            <p className="text-sm text-gray-400">or register with email</p>

            <div className="flex-1 h-[1px] bg-gray-200" />
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit(regisHandler)}>
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                Email Address
              </label>

              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="scholar@example.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#14143c]"
              />
            </div>
            <p className="text-red-600">{errors.email?.message}</p>
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">
                Password
              </label>

              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#14143c]"
              />
            </div>
            <p className="text-red-600">{errors.password?.message}</p>
            <button
              type="submit"
              className="w-full bg-[#14143c] hover:opacity-90 transition text-white py-3 rounded-xl font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
