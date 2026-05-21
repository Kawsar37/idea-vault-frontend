import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { ThemeSwitch } from "./ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import LogOutOutBtn from "./LogOutBtn";

export default async function Navbar() {
  let session = null;
  try {
    session = await auth.api.getSession({
      query: { disableCookieCache: true },
      headers: await headers(),
    });
  } catch (e) {
    console.log("Safely bypassed session check during Vercel build");
    session = null;
  }

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
      <li>
        <NavLink href={"/my-profile"}>My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 navbar bg-gray-100 dark:bg-black shadow-sm dark:shadow-white/10 mb-7 lg:mb-15 z-9999">
      <div className="navbar-start">
        <div className="dropdown z-10">
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
            className="menu menu-sm dropdown-content bg-gray-100! dark:bg-black! rounded-lg z-999999 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          href={"/"}
          className="hover:border-none hover:bg-transparent border-none ring-transparent hover:ring-transparent"
        >
          <Image
            src={"/assets/logo.svg"}
            height={65}
            width={65}
            alt="logo"
            loading="eager"
            className="m-0"
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end pr-4 relative z-50">
        <div className="relative z-50">
          <ThemeSwitch />
        </div>
        {session ? (
          <div className="flex items-center gap-3">
            <Link href={"/my-profile"}>
              <Avatar>
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={session.user.name}
                  src={session.user.image}
                />
                <Avatar.Fallback>{session.user.name[0]}</Avatar.Fallback>
              </Avatar>
            </Link>

            <LogOutOutBtn />
          </div>
        ) : (
          <Link href={"/sign-in"}>
            <Button className={"bg-(--p-color)"}>Log In</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
