type Props = {
  selected: string;
  onChange: (val: string) => void;
};

import styles from "./index.module.css";

export default function LevelSelector({ selected, onChange }: Props) {
  const options = [
    { label: "5-year-old", value: "5yo" },
    { label: "Teenager", value: "teen" },
    { label: "Professional", value: "pro" },
  ];

  return (
    <div className={styles.wrapper}>
      {options.map((opt) => (
        <label key={opt.value} className={styles.selection}>
          <input
            type="radio"
            value={opt.value}
            checked={selected === opt.value}
            onChange={() => onChange(opt.value)}
          />
          <p className={styles.label}>{opt.label}</p>
        </label>
      ))}
    </div>
  );
}
