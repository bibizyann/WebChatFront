import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const poppins = Poppins({ subsets: ['latin'], weight: ['200'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <Head>
          <title>Рега</title>
          <meta name="Рега" content="Рега" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className={`${poppins.className} bg-dark-2`}>
          {children}
          <footer>
            {/* <p>© 2024 My Next.js App</p> */}
          </footer>
        </body>
      </html>
    </>
  );
}
