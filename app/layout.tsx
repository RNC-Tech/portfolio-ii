import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Transition from "./components/Transition";
import AudioControl from "./components/AudioControl";
import { FloatingDock } from "../components/ui/floating-dock";
import { FloatingDockDaisyUI } from "@/components/ui/FloatingDockDaisyUI";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RNC Simbaya Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="glass">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Transition>
          <div className="xs:px-6 xs:pb-24 sm:px-6 sm:pb-24 md:px-8 md:py-12 lg:px-12 lg:py-32 xl:px-16">
            {children}
          </div>
        </Transition>
        <AudioControl />
        <div className="fixed top-4 left-1/2 -translate-x-1/2 hidden lg:block ">
          <FloatingDock />
        </div>
        <div className="sticky bottom-4 right-4 block lg:hidden">
          <FloatingDockDaisyUI />
        </div>
      </body>
    </html>
  );
}
