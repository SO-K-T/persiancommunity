import { ClerkProvider } from "@clerk/nextjs";

import '../globals.css'
export const metadata = {
  title: "persiancommunity",
  description: "برنامه ای برای گفت و گو در موضوع ترند های روز",
};

const IranYekan = (
  <style>@import url('https://fonts.cdnfonts.com/css/iranyekan');</style>
);

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="fa">
        <body className="bg-white-1">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
