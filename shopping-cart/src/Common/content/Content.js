import React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./content.module.css";
//import { Products, ProductDetail, Cart, Confirmation} from "../../Pages";


//Pages: 1. Products  2. Product Detail  3. Shopping Cart  4. Confirmation of Purchase

export const Content = () => {
  return (
    <section className="appBody">
      <Switch>

        <Route exact path="/products">
         <Products/>         
        </Route>
        <Route exact path="/productdetail">
          <ProductDetail />
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
        <Route exact path="/confirmation">
          <Confirmation/>
        </Route>
      
      </Switch>
    </section>
  );
};
