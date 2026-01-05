import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wikii Movies | Ultimate Entertainment",
  description:
    "Wikii Movies is your all-in-one entertainment hub with Movies, Series, Live TV & more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
