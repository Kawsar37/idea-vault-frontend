import Image from "next/image";
import React from "react";

export default function ImageHover() {
  return (
    <div className="hover-3d max-w-100 md:w-100">
      {/* content */}
      <figure className=" rounded-2xl">
        <Image
          src="https://img.magnific.com/free-vector/perfect-idea-illustration-with-elements-composition_98292-6780.jpg?semt=ais_hybrid&w=740&q=80"
          alt="3D card"
          height={400}
          width={600}
        />
      </figure>
      {/* 8 empty divs needed for the 3D effect */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
