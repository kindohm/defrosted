import { getDefrostedStatus } from "@/getDefrostedStatus";
import { getDefrostedText } from "@/getDefrostedText";
import styles from "./page.module.css";

export default function Home() {
  const status = getDefrostedStatus(new Date());
  const txt = getDefrostedText(status);

  return (
    <main className={styles.main}>
      <h1>Is Mariah Carey defrosted?</h1>
      <p>{txt}</p>
    </main>
  );
}
