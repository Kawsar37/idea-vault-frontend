"use client";

import { useTheme } from "next-themes";
import { HiMoon } from "react-icons/hi";
import { Button } from "@heroui/react";
import { AiOutlineSun } from "react-icons/ai";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const currentTheme = theme ?? "light";

  return (
    <Button
      variant="outline"
      className="text-2xl h-10 w-10 rounded-full mr-4"
      onClick={() => {
        setTheme(currentTheme === "dark" ? "light" : "dark");
      }}
    >
      <div className="dark:hidden">
        <HiMoon className="text-2xl" />
      </div>
      <div className="hidden dark:block">
        <AiOutlineSun className="text-2xl" />
      </div>
    </Button>
  );
}
