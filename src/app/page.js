import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Image from "next/image";
import * as React from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* 
      Carousel Component
      More about us 
      School Faciliities
      Mission and vision
      Programs
      Brochure
      Admission
      Footer
      */}
      <About/>
    </div>
  );
}
