// Footer.jsx

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#14143c] px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">Lumina Library</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Discover, borrow, and explore books from different genres with a
            modern digital library experience.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>

          <ul className="mt-5 space-y-3 text-sm text-gray-300">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link href="/books" className="transition hover:text-white">
                All Books
              </Link>
            </li>

            <li>
              <Link href="/profile" className="transition hover:text-white">
                My Profile
              </Link>
            </li>

            <li>
              <Link href="/login" className="transition hover:text-white">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>

          <div className="mt-5 space-y-3 text-sm text-gray-300">
            <p>support@luminalibrary.com</p>
            <p>+880 1234-567890</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>

          <div className="mt-5 flex items-center gap-4">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#14143c]"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#14143c]"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#14143c]"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#14143c]"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} lumina library. All rights reserved.
      </div>
    </footer>
  );
}
