import { Button } from "@/core/ui/Button";
import styles from "./page.module.scss";
import Link from "next/link";
import { GradientButton } from "@/core/ui/GradientButton";

export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.circle} />
          <div
            className={styles.circle}
            style={{
              height: "80%",
              animationDuration: "60s",
              animationDirection: "reverse",
            }}
          />
          <div
            className={styles.circle}
            style={{ height: "60%", animationDuration: "20s" }}
          />
          <span className={styles.badge}>In the works</span>
          <h1 className={styles.title}>Snow Mouse Studio</h1>
          <div className={styles.subtitle}>
            <p>
              A small, independent studio. Focused on creating the impossible
              and breaking the limits of the web. We are a team of two,
              engineers by trade, designers at heart.
            </p>
          </div>
          <div className={styles.actions}>
            <Link href="/portfolio">
              <Button>Explore</Button>
            </Link>
            <Link href="/portfolio">
              <GradientButton>Portfolio</GradientButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
