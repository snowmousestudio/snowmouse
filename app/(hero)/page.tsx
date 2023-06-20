import { Button } from "@/core/ui/Button";
import styles from "./page.module.scss";
import Link from "next/link";
import GradientButton from "@/core/ui/GradientButton";
import rajbir from "@/public/assets/rajbir.jpg";
import Image from "next/image";
import InfoCard from "./InfoCard";

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
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.item}>
            <h2>Meet the team.</h2>
          </div>
          <InfoCard
            title="Rajbir Johar"
            alt="Portrait of Rajbir"
            image={rajbir}
          >
            <p>
              Hello hello! I&#39;m a full time software engineer with a passion
              for design.
            </p>
            <p>
              CSS is my favorite artistic medium and I enjoy creating the little
              animations users get to experience.
            </p>
          </InfoCard>
        </div>
      </section>
    </>
  );
}
