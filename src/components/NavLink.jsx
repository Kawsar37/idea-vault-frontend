"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ children, href }) {
  const path = usePathname();
  return (
    <Link href={href} className={`${path === href ? "bg-(--p-color)" : ""}`}>
      {children}
    </Link>
  );
}
