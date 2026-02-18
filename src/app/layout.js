import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";

export const metadata = {
  title: "Lilac Clone",
  description: "Therapy services for adults",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}