"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "@gravity-ui/icons";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const currentTheme = theme ?? "light";

  return (
    <button
      onClick={() => {
        setTheme(currentTheme === "dark" ? "light" : "dark");
      }}
      className="text-lg mr-4 z-9999"
    >
      {currentTheme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
