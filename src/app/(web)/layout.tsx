import { Inria_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inria = Inria_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inria",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className={inria.variable}>{children}</div>
      </body>
    </html>
  );
}
