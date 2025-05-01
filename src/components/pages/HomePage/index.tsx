import InputForm from "@/components/ui/InputForm";
import styles from "./index.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>
          Understand
          <br />
          Anything,
          <br />
          Instantly.
        </h1>
      </div>

      <div className={styles.rightSide}>
        <InputForm />
      </div>
    </div>
  );
}
