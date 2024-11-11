import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { Providers } from "@/redux/provider";
import { Toaster, toast } from "sonner";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

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
    <html lang="en">
      <body className={` antialiased`}>
        <Providers>
          <MainLayout>{children}</MainLayout>
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}
