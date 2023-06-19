import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <article className={styles.root}>{children}</article>;
}
