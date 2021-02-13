import React from "react";
import {ProductItem} from "./ProductItem"
import styles from "./products.module.css"
import { ProductsData } from "../data/data"



export const Products = () => {

  return (
    <div className={styles.products__wrapper}>
     <ul className={styles.wrapper}>
      {ProductsData.map((item) => {
        console.log(item)
        return (
          <ProductItem
            id={item.id}
            key={item.id}
            image={item.image}
            name={item.name} 
            description={item.description} 
            price={item.price}          

          />
        );
      })}
    </ul>
    
   
    </div>
  )
}