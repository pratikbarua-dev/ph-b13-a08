import ContactUs from "@/app/components/ContactUs";
import { FeaturedBooks } from "@/app/components/Featuredbooks";
import Footer from "@/app/components/Footer";
import HeroBanner from "@/app/components/Herobanner";
import MarqueeComponent from "@/app/components/Marquee";
import React from "react";

export default function Homepage() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <MarqueeComponent></MarqueeComponent>
      <FeaturedBooks></FeaturedBooks>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
}
