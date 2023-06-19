import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3 className={styles.logo}>Snow Mouse Studio</h3>
        <div className={styles.column}>
          <h5>Resources</h5>
          <a>Code</a>
          <a>Journals</a>
        </div>
        <div className={styles.column}>
          <h5>Navigate</h5>
          <a>Home</a>
          <a>Portfolio</a>
          <a>About</a>
        </div>
        <div className={styles.column}>
          <h5>Elsewhere</h5>
          <a>Twitter</a>
          <a>Github</a>
          <a>JS</a>
          <a>Rajbir</a>
        </div>
      </div>
    </footer>
  );
}
