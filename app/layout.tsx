import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import { RactQueryProvider } from "@/providers/ReactQueryProvider";
import Header from "@/components/navbar/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const metadata: Metadata = {
  title: "Piskent tumani hokimligi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RactQueryProvider>
          <Header />
          <Navbar />
          <div className="max-w-[1300px] w-full mx-auto">
          {children}
          </div>
          <Footer />
        </RactQueryProvider>
      </body>
    </html>
  );
}
