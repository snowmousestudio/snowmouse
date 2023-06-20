"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/portfolio",
    text: "Portfolio",
  },
  {
    href: "/about",
    text: "About",
  },
];

export default function Header() {
  let pathname = usePathname() || "/";

  return (
    <motion.header className={styles.header} layoutRoot>
      <nav>
        <Link href="/">
          <h3 className={styles.logo}>Snow Mouse Studio</h3>
        </Link>
        <div className={styles.linkwrapper}>
          {links.map(({ href, text }, index) => {
            const active = href === pathname;
            return (
              <Link
                href={href}
                key={href}
                className={active ? styles.active : ""}
              >
                <AnimatePresence>
                  {active ? (
                    <motion.div
                      className={styles.indicator}
                      layoutId="nav-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 50,
                      }}
                    />
                  ) : null}
                </AnimatePresence>
                <span>{text}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
