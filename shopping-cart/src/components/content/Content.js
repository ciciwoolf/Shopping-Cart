
import React from "react";
import { Switch, Route } from "react-router-dom";
//import styles from "./content.module.css";
import { Slider} from "../carousel/Carousel";
import { Info } from "../info/Info";
import { Products, Cart, ProductDetail, Confirmation} from "../../Pages";


//Pages: 1. Products  2. Product Detail  3. Shopping Cart  4. Confirmation of Purchase

export const Content = () => {
  return (
    <section className="appBody">
      <Switch>
        <Route exact path="/">         
         <Slider/>
         <Info/>  
         <Products/>   
         </Route>   
         <Route exact path="/productdetail/:id" component={ProductDetail} />
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/confirmation" component={Confirmation} />     
      </Switch>
    </section>
  );
};
