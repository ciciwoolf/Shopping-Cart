import React from "react"
import styles from "./product-detail.module.css"
import { ProductsData } from "../data/data"
import {ProductItem} from "../components/productItem/productItem"
import {useParams} from "react-router-dom";


export const ProductDetail = (props) => {
  const {id} = useParams() 
  const item = ProductsData.find(item => item.id == id)
  console.log(item)

  //method find
 
  return (
  <div className={styles.wrapper}>
    <ul className={styles.wrapper}>     
          <ProductItem
            id={item.id}
            key={item.id}
            image={item.image}
            name={item.name} 
            description={item.description} 
            price={item.price} 
          />     
      </ul>
    
  </div>
  )
};
