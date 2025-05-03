"use client";

import styles from "./index.module.css";
import LevelSelector from "../LevelSelector";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function InputForm() {
  const level = "5-year-old";

  const setLevel = (val: string) => console.log(val);
  return (
      <div className={`${styles.formWrapper} ${inter.className}`}>
        <textarea
          rows={8}
          placeholder="Paste your text here..."
          className={styles.textarea}
        />
        <div className={styles.levelSelectorWrapper}>
          <label className={styles.title}>Choose your explanation level</label>
          <LevelSelector selected={level} onChange={setLevel} />
        </div>
        <button type="submit" className={styles.button}>
          Explain it
        </button>
      </div>
  );
}
