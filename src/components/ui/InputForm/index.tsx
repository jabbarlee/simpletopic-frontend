"use client";

import styles from "./index.module.css";
import LevelSelector from "../LevelSelector";

export default function InputForm() {
  const level = "5-year-old";

  const setLevel = (val: string) => console.log(val);
  return (
    <div className={`${styles.formWrapper}`}>
      <textarea
        rows={8}
        placeholder="Paste your text here..."
        className={styles.textarea}
      />
      <div className={styles.levelSelectorWrapper}>
        <LevelSelector selected={level} onChange={setLevel} />
      </div>
      <button type="submit" className={styles.button}>
        Explain it
      </button>
    </div>
  );
}
