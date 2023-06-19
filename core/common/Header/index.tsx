"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";

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
    <motion.header className={styles.header}>
      <LayoutGroup>
        <motion.nav
          initial={{ width: 0 }}
          animate={{
            width: "auto",
            transition: {
              delay: 0.4,
              duration: 0.6,
              type: "spring",
              stiffness: 105,
              mass: 0.5,
            },
          }}
        >
          {/* <div className={styles.glowline} /> */}
          <div className={styles.linkwrapper}>
            {links.map(({ href, text }, index) => {
              const active = href === pathname;
              return (
                <Link
                  href={href}
                  key={href}
                  className={active ? styles.active : ""}
                >
                  <span>{text}</span>
                  {active ? (
                    <>
                      <motion.div
                        className={styles.indicator}
                        layoutId="nav"
                        initial={{
                          borderTopRightRadius: index === 0 ? 12 : 32,
                          borderBottomRightRadius: index === 0 ? 12 : 32,
                          borderTopLeftRadius:
                            index === links.length - 1 ? 12 : 32,
                          borderBottomLeftRadius:
                            index === links.length - 1 ? 12 : 32,
                        }}
                        animate={{
                          borderTopRightRadius: index === 0 ? 12 : 32,
                          borderBottomRightRadius: index === 0 ? 12 : 32,
                          borderTopLeftRadius:
                            index === links.length - 1 ? 12 : 32,
                          borderBottomLeftRadius:
                            index === links.length - 1 ? 12 : 32,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 50,
                        }}
                      />
                    </>
                  ) : null}
                </Link>
              );
            })}
          </div>
        </motion.nav>
      </LayoutGroup>
    </motion.header>
  );
}
