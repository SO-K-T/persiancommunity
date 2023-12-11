import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import Navbar from "@/components/shared/Navbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "persiancommunity",
  description: "برنامه ای برای گفت و گو در موضوع ترند های روز",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>

        <Navbar/>
        
        <main className="flex flex-row">
          <LeftSidebar/>

          <section className="main-container">
            <div className="w-full max-w-4xl">
              {children}
            </div>
          </section>

          <RightSidebar/>
        </main>
        <Footer/>
        </body>
    </html>
    </ClerkProvider>
  );
}
