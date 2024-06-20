import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const Column = ({ images, translateY }) => {
  return (
    <motion.div style={{ translateY }} className={styles.column}>
      {images.map((item, index) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <img loading="eager" src={item} />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Column;
