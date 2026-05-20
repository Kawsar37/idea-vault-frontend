import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-[70vh]">
      <h1 className="text-(--p-color) text-6xl">404!</h1>
      <h1 className="text-3xl">Page Not Found</h1>
      <Link className="bg-amber-300 btn rounded-full" href={"/"}>
        Back To Home
      </Link>
    </div>
  );
}
