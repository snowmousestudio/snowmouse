"use client";

import { useTheme } from "next-themes";
import styles from "./styles.module.scss";
import { CogIcon, MoonStarIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={styles.theme}>
      <button
        onClick={() => setTheme("light")}
        style={{
          backgroundColor:
            theme === "light" ? "var(--button-bg)" : "transparent",
        }}
      >
        <SunIcon />
      </button>
      <button
        onClick={() => setTheme("system")}
        style={{
          backgroundColor:
            theme === "system" ? "var(--button-bg)" : "transparent",
        }}
      >
        <CogIcon />
      </button>
      <button
        onClick={() => setTheme("dark")}
        style={{
          backgroundColor:
            theme === "dark" ? "var(--button-bg)" : "transparent",
        }}
      >
        <MoonStarIcon />
      </button>
    </div>
  );
}
