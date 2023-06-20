"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/core/ui/Button";
import { Plus } from "lucide-react";
import classNames from "classnames";

export default function InfoCard({
  image,
  alt,
  title,
  children,
}: {
  image: string | StaticImageData;
  alt: string;
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const buttonClasses = classNames({
    [styles.button]: true,
    [styles.open]: open,
  });
  const heroClasses = classNames({
    [styles.hero]: true,
    [styles.open]: open,
  });

  return (
    <div className={styles.root}>
      <Image src={image} alt={alt} className={styles.image} />
      <div className={heroClasses}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
      <Button
        className={buttonClasses}
        onClick={() => setOpen(!open)}
        style={{
          rotate: open ? "45deg" : "0deg",
          transition: "rotate var(--transition-slower)",
        }}
      >
        <Plus strokeWidth={2.5} />
      </Button>
    </div>
  );
}
