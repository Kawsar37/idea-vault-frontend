"use client";

import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { ThemeSwitch } from "./ThemeSwitch";

export default function Navbar() {
  const links = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/ideas"}>Ideas</NavLink>
      </li>
      <li>
        <NavLink href={"/add-idea"}>Add Idea </NavLink>
      </li>
      <li>
        <NavLink href={"/my-ideas"}>My Ideas</NavLink>
      </li>
      <li>
        <NavLink href={"/my-interactions"}>My Interactions</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm dark:shadow-white/10 mb-7 lg:mb-15">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-gray-100 rounded-lg z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          href={"/"}
          className="btn btn-ghost hover:border-none hover:bg-transparent border-none ring-transparent hover:ring-transparent"
        >
          <Image
            src={"/assets/logo.svg"}
            height={60}
            width={60}
            alt="logo"
            loading="eager"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end pr-4 z-50">
        <ThemeSwitch />
        <Link href={"/my-profile"}>
          <Avatar>
            <Avatar.Image
              alt="John Doe"
              src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
            />
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}
