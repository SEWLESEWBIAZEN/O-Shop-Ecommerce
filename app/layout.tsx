import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "./_components/HeaderTop";
import HeaderMain from "./_components/HeaderMain";
import Navbar from "./_components/Navbar";
import MobileNavbar from "./_components/MobileNavbar";
import Footer from "./_components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoriesProvider } from "./_components/CategoriesProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O-Shop | Buy Your Favourite",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "An Online shop that you can order the product you want to purchase, and it is an online show room",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className}`}>
        <CategoriesProvider>
          <HeaderTop />
          <HeaderMain />
          <Navbar />
          <MobileNavbar />
          {children}
          <Footer />
        </CategoriesProvider>
      </body>
    </html>
  );
}
