import React from "react";
import styles from "./product-item.module.css";
import { SolidButton } from "../components/buttons/solidButton";

//props are: id key img title date content anchor
export const ProductItem = (props) => {

  //handleClick function goes here?

     return (
      <li className={styles.cardBody}>
        <div>
          <img className={styles.image} alt = "Chocolate Product" src={props.image}/>
        </div>

        <div className={styles.blurbBody}>
          <h2 className={styles.name}>{props.name}</h2>         
          <p className={styles.description}>
           {props.description}
          </p>
          <div>
              <h2 className={styles.price}>${props.price} &nbsp;&nbsp;            
              <span className={styles.button__wrapper}>
              <SolidButton label="buy now"  className={styles.buyButton} />       
            </span>
            </h2>
               
          </div>
            
          
        </div>
      </li>     
    );
  }

  /*
  <SolidButton handleClick={()=> {----function here (props.id)}} label="buy now"  className={styles.buyButton} />   
  Use filter method here to filter data by id? 
  
  */