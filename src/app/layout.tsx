import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScrollProvider } from "@/components/primitives/SmoothScrollProvider";
import { FullscreenCursor } from "@/components/primitives/FullscreenCursor";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "G8 Mystry Fashion House 256 | Custom Tailoring & Fashion Design Kampala",
  description: "Premium fashion house in Makindye, Kampala. Custom tailoring, wedding gowns, African wear, menswear & alterations. Your vision, perfectly crafted.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <FullscreenCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}