import React from "react";
import styles from  "./solid-button.module.css";

export class SolidButton extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {};
    
        //this.handleClick = this.handleClick.bind(this);
      }
    render() {
        return (
            <>
                <button onClick={this.props.handleClick} className={styles.buyButton}>BUY NOW</button>
            </>
        );

   }
};

