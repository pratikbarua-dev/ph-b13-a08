// components/BorrowButton.jsx

"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";

export default function BorrowButton() {
  return (
    <div>
      <button
        onClick={() => toast.success("You have borrowed this book!")}
        className="bg-[#1515a7] hover:cursor-pointer hover:opacity-90 transition text-white px-8 py-4 rounded-2xl font-medium"
      >
        📚 Borrow This Book
      </button>
      <ToastContainer />
    </div>
  );
}
