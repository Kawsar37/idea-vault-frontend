"use client";

import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";
import { IoMoonSharp } from "react-icons/io5";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme("light");

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-lg mr-4"
    >
      {theme === "light" ? <IoMoonSharp /> : <CiLight />}
    </button>
  );
}
