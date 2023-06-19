import Gallery from "../Gallery";
import styles from "./page.module.scss";

export default function Portfolio() {
  return (
    <article className={styles.root}>
      <Gallery />
    </article>
  );
}
