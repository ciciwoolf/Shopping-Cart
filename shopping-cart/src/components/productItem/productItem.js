
import React from "react";
import styles from "./product-item.module.css";
import {SolidLink} from "../buttons/solidButton";

       
export const ProductItem = (props) => {
console.log(props)
  
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
                <SolidLink to={`/productdetail/${props.id}`} id={props.id} label={"Aprenda mas"}/>              
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