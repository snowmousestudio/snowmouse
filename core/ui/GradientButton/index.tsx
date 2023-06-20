import styles from "./styles.module.scss";

export default function GradientButton(props: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className={styles.mask}>
      <div className={styles.herobuttoncontainer}>
        <div className={styles.herobuttonwrapper}>
          <span className={styles.herobuttonbg} />
          <button className={styles.herogradientbutton}>{props.children}</button>
        </div>
      </div>
    </div>
  );
}
