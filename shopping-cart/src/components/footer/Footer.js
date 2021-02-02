import React from "react";
import styles from "./footer.module.css";


export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      
      <p className={styles.copyright}>
        &copy; Cici Woolf {(new Date().getFullYear())}
      </p>
    </footer>
  );
};
