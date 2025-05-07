import { Inria_Serif } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import "./layout.module.css";

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
      <body className={`landingBg`}>{children}</body>
    </html>
  );
}
