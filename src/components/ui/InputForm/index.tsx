"use client";

import styles from "./index.module.css";
import LevelSelector from "../LevelSelector";
import { Button, Input, Typography } from "antd";

const { TextArea } = Input;

export default function InputForm() {
  const level = "5-year-old";

  const setLevel = (val: string) => console.log(val);
  return (
    <div className={`${styles.formWrapper}`}>
      <TextArea
        rows={8}
        placeholder="Paste your text here..."
        className={styles.textarea}
      />
      <div className={styles.levelSelectorWrapper}>
        <p className={styles.explanationLevelLabel}>Select explanation level</p>
        <LevelSelector selected={level} onChange={setLevel} />
      </div>
      <Button className={styles.button} size="large">
        Explain it
      </Button>
    </div>
  );
}
