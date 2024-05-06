import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ClerkProvider } from "@clerk/nextjs";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afeitto | Máquinas de Afeitar de Acero Inoxidable",
  description:
    "Las mejores máquinas de afeitar de acero inoxidable duraderas para un afeitado perfecto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("relative overflow-x-hidden", inter.className)}>
          <Navbar />
          <main>{children}</main>
          <div className="fixed bottom-5 right-5 rounded-full h-14 w-14 z-50">
            <WhatsAppButton />
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
