import React from "react";
import Navbar from "../components/Navbar";
import Home from "../page";
import Homepage from "./home/page";
import { Chilanka } from "next/font/google";

export default function layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
}
