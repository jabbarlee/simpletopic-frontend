"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import LevelSelector from "../LevelSelector";
import { useRouter } from "next/navigation";

export default function InputForm() {
  const [levelSelected, setLevelSelected] = useState<string>("5-year-old");
  const [paragraph, setParagraph] = useState<string>("");
  const [alertMessageText, setAlertMessageText] = useState<string | null>(null);
  const [alertColor, setAlertColor] = useState<"green" | "red" | "blue">(
    "green"
  );
  const router = useRouter();

  const setLevel = (level: string) => {
    setLevelSelected(level);
    console.log("New level: ", levelSelected);
  };

  const handleExplain = (level: string, text: string) => {
    setAlertMessageText("Processing your request...");
    setAlertColor("blue"); // Blue for processing

    if (!level || !text) {
      setAlertMessageText("Please provide all the information...");
      setAlertColor("red"); // Red for error
      return;
    }

    // Simulate a successful process
    setTimeout(() => {
      setAlertMessageText("Explanation generated successfully!");
      setAlertColor("green"); // Green for success
    }, 2000);

    router.push("/result");
  };

  return (
    <div className={`${styles.formWrapper}`}>
      <textarea
        rows={8}
        placeholder="Paste your text here..."
        value={paragraph}
        onChange={(e) => setParagraph(e.target.value)}
        className={styles.textarea}
      />
      <div className={styles.levelSelectorWrapper}>
        <p className={styles.explanationLevelLabel}>Select explanation level</p>
        <LevelSelector selected={levelSelected} onChange={setLevel} />
      </div>
      <button
        className={styles.button}
        onClick={() => handleExplain(levelSelected, paragraph)}
      >
        Explain it
      </button>
      {alertMessageText && (
        <p style={{ color: alertColor }}>{alertMessageText}</p>
      )}
    </div>
  );
}
