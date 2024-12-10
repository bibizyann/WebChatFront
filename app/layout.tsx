import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";

const poppins = Poppins({ subsets: ['latin'], weight: ['200'] });

export const metadata: Metadata = {
  title: "WebChat",
  description: "Video calling",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${poppins.className} dark:bg-dark-2`}>
          {children}
          <Toaster />
          <footer>
            {/* <p>© 2024 My Next.js App</p> */}
          </footer>
        </body>
      </html>
    </>
  );
}
