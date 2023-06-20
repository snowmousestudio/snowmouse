import ThemeSwitch from "../ThemeSwitch";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3 className={styles.logo}>Snow Mouse Studio</h3>
        <div className={styles.links}>
          <div className={styles.column}>
            <a>Twitter</a>
            <a>Github</a>
          </div>
          <div className={styles.column}>
            <a>Portfolio</a>
            <a>About</a>
          </div>
          <div className={styles.column}>
            <a>JS</a>
            <a>Rajbir</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <small>© 2023 Snow Mouse Studio</small>
        <ThemeSwitch />
      </div>
    </footer>
  );
}
