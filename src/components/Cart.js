import React, {Component} from "react";
import Title from "./Title";
import CartColumn from "./Cart/CartColumns";
import EmptyCart from "./Cart/EmptyCart";
import { ProductConsumer } from "../context";
import CartList from "./Cart/CartList";
import CartTotals from "./Cart/CartTotals";

export default class Cart extends Component {
    render(){
        return (
           <section>
               <ProductConsumer>
                   {value => {
                       const {cart} = value;
                       if (cart.length>0){
                           return(
                            <React.Fragment>
                            <Title name="Your" title="Cart"/>
                            <CartColumn/>
                            <CartList value={value}/>
                            <CartTotals value={value}/>
                            </React.Fragment>
                           );
                       }
                       else {
                        return  <EmptyCart />;
                       }
                   }}
               </ProductConsumer>    
           </section>
        )
    }
}