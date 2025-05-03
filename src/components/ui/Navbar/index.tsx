import Link from "next/link";
import styles from "./index.module.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  return (
    <header className={`${styles.navbar} ${inter.className}`}>
      <Link href="/" className={styles.brand}>
        SimpleTopic
      </Link>

      {/* nav links */}
      <nav className={styles.navLinks}>
        <Link href="#home" className={styles.link}>
          Home
        </Link>
        <Link href="#about" className={styles.link}>
          About
        </Link>
        <Link href="#features" className={styles.link}>
          Features
        </Link>
        <Link href="#pricing" className={styles.link}>
          Pricing
        </Link>
        <Link href="#contact" className={styles.link}>
          Contact
        </Link>
      </nav>
      <Link href="/signup" className={styles.cta}>
        Sign up
      </Link>
    </header>
  );
}
