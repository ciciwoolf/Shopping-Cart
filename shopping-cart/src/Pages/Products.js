import React, {useEffect, useState} from "react";
import {ProductItem} from "./ProductItem";
import styles from "./products.module.css";
import { ProductsData } from "../data/data";


export const Products = () => {

  return (
    <div className={styles.products__wrapper}>
     <ul className={styles.wrapper}>
      {ProductsData.map((item) => {
        return (
          <ProductItem
            id={item.id}
            key={item.id}
            img={item.img}
            title={item.title} 
            content={item.content} 
            anchor={item.anchor} 

          />
        );
      })}
    </ul>
    
   
    </div>
  )
}