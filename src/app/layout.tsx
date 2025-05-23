import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";


const archivo = Archivo({
  variable: "--font-archivo",
    subsets: ["latin"]
    }
)

export const metadata: Metadata = {
  title: "Sample Next.js Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} antialiased`}
      >
      <ResponsiveNav />
        {children}

      </body>
    </html>
  );
}
