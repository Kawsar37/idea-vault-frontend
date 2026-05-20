"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <section>
      {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
      {children}
      {/* </ThemeProvider> */}
    </section>
  );
}
