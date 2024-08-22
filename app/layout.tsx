import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Studbook",
  description:
    "An innovative, digital platform designed to revolutionize the way equine professionals manage and access studbook records. This comprehensive, user-friendly web application offers a modern solution for breeders, owners, trainers, and equine enthusiasts to seamlessly document, track, and analyze horse pedigrees and lineage data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
