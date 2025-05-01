import { Inria_Serif } from "next/font/google";
import "./globals.css";

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
      {/* full-width white background & global serif */}
      <body className={`${inria.variable} font-[var(--font-inria)] bg-white`}>
        {children}
      </body>
    </html>
  );
}
