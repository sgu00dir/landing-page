import "../styles/globals.css";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Loopframe",
  description: "Reimagining privacy, the smart way.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} min-h-screen bg-white text-gray-900`}
        style={{
          backgroundImage: "url('/images/landing-bg.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {children}
      </body>
    </html>
  );
}
