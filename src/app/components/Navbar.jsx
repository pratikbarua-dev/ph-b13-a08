"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { signOut, useSession } from "@/lib/auth-client";


export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending, error } = useSession();
  const handleLogout = async () => {
    await signOut();
    router.push("/"); // or "/sign-in", wherever you want
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left Side */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/home"
                className={
                  pathname === "/home"
                    ? "border-b-2 border-primary font-semibold rounded-none"
                    : ""
                }
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/books"
                className={
                  pathname === "/books"
                    ? "border-b-2 border-primary font-semibold rounded-none"
                    : ""
                }
              >
                All Books
              </Link>
            </li>

            <li>
              <Link
                href="/profile"
                className={
                  pathname === "/profile"
                    ? "border-b-2 border-primary font-semibold rounded-none"
                    : ""
                }
              >
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className=" btn btn-ghost text-xl"
        >
          Lumina Library
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/home"
              className={
                pathname === "/home"
                  ? "border-b-2 border-primary font-semibold rounded-none"
                  : ""
              }
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/books"
              className={
                pathname.startsWith("/books")
                  ? "border-b-2 border-primary font-semibold rounded-none"
                  : ""
              }
            >
              All Books
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className={
                pathname === "/profile"
                  ? "border-b-2 border-primary font-semibold rounded-none"
                  : ""
              }
            >
              My Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        {isPending ? (
          <span className="loading loading-dots loading-xl"></span>
        ) : session ? (
          <div className="flex items-center gap-3">
            <p>Hey, {session.user?.name || session.user?.email}!</p>
            {/* Optional: show user name / email */}

            <button onClick={handleLogout} className="btn btn-error">
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-success">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
