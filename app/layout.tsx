import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./contexts/CartContext";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "NaturaVex - Energy & Libido",
  description: "Естествен продукт за повишаване на енергията и либидото",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${montserrat.variable} font-montserrat antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
