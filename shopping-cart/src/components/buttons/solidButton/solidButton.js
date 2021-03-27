import React from "react";
import styles from  "./solid-button.module.css";
import {Link} from "react-router-dom";

export const SolidButton = ({onClick, label, className}) => 
                <button onClick={onClick} className={`${styles.buyButton}${className ? ` ${className}` : ''}`}>{label}</button>



export const SolidLink = ({to, label, className}) => 
                <Link to={to} className={`${styles.buyButton}${className ? ` ${className}` : ''}`}>{label}</Link>

