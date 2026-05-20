import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Roboto, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./provider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "IdeaVault",
  description: "IdeaVault is a idea publishing blog website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-background text-foreground relative"
        cz-shortcut-listen="true"
      >
        <Providers>
          <Navbar />
          <main className=" min-h-[70vh]">{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
