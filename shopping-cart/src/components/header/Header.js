import React from "react";
import styles from "./header.module.css";

export const Header = () => {
  // functional component dont have THIS , because it is not a class but fuinction !!!
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header}>
      <img
              className={styles.image}
              src="https://img-cicis-chocolates.s3.us-east-2.amazonaws.com/logo.png"
              alt="logo"
            />     
      </div>
     </header>
  );
};
