import { Button } from "@/core/ui/Button";
import styles from "./page.module.scss";
import Link from "next/link";
import GradientButton from "@/core/ui/GradientButton";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <span className={styles.badge}>In the works</span>
        <h1 className={styles.title}>Snow Mouse Studio</h1>
        <div className={styles.subtitle}>
          <p>
            A small, independent studio. Focused on creating the impossible and
            breaking the limits of the web. We are a team of two, engineers by
            trade, designers at heart.
          </p>
        </div>
        <div className={styles.actions}>
          <Link href="/portfolio">
            <Button variant="ghost">Explore</Button>
          </Link>
          <Link href="/portfolio">
            <GradientButton>Portfolio</GradientButton>
          </Link>
        </div>
      </div>
    </>
  );
}
