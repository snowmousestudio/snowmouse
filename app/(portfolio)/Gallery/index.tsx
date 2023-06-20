"use client";

import { Mosaic } from "@/util/mosaic";
import mountain from "@/public/assets/mountain.jpg";
import mountain2 from "@/public/assets/mountain-cropped.jpg";
import light from "@/public/assets/light.jpg";
import light2 from "@/public/assets/light-cropped.jpg";
import bird from "@/public/assets/bird.jpg";
import Image from "next/image";
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionImage = motion(Image);

export default function Gallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: ref,
    // offset: ["end end", "start start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const images = [
    { src: mountain, alt: "Mountain" },
    { src: mountain2, alt: "Mountain" },
    { src: light, alt: "Light" },
    { src: light2, alt: "Light" },
    { src: bird, alt: "Bird" },
    { src: mountain, alt: "Mountain" },
    { src: mountain2, alt: "Mountain" },
    { src: light, alt: "Light" },
    { src: light2, alt: "Light" },
    { src: bird, alt: "Bird" },
    { src: mountain, alt: "Mountain" },
    { src: mountain2, alt: "Mountain" },
    { src: light, alt: "Light" },
    { src: light2, alt: "Light" },
    { src: bird, alt: "Bird" },
    { src: mountain, alt: "Mountain" },
    { src: mountain2, alt: "Mountain" },
    { src: light, alt: "Light" },
    { src: light2, alt: "Light" },
    { src: bird, alt: "Bird" },
  ];

  return (
    <Mosaic
      items={images}
      config={{
        columns: [1, 2, 3, 4],
        gap: [20, 20, 20, 20],
        media: [668, 868, 1068, 1268],
      }}
      render={(item, index) => (
        <motion.div
          key={index}
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}

          // ref={ref}
        >
          <MotionImage
            src={item.src}
            alt={item.alt}
            className={styles.image}
            style={{ y }}
          />
          <div className={styles.information}>
            <div className={styles.content}>
              <h3 className={styles.title}>Title</h3>
              <p className={styles.description}>Description</p>
            </div>
          </div>
        </motion.div>
      )}
    />
  );
}
