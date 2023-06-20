import React from "react";
import styles from "./styles.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    return (
      <div className={styles.mask}>
        <div className={styles.herobuttoncontainer}>
          <div className={styles.herobuttonwrapper}>
            <span className={styles.herobuttonbg} />
            <button className={styles.herogradientbutton}>
              {props.children}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };
