import React from "react";
import styles from "./header.module.css";
import Image1 from "./logo.png";



export const Header = () => {
  // functional component dont have THIS , because it is not a class but fuinction !!!
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
      <img
              className={styles.image}
              width="25%"
              src={Image1}
              alt="logo"
            />     
      </div>
     </header>
  );
};
