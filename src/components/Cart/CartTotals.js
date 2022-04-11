import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({value}){
    const{cartSubtotal, cartTax, cartTotal, clearCart}=value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="textRight col-10 mt-2 mx-auto ml-sm-5 col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger font-plain mb-2 px-10"
                            type="button" onClick={()=> clearCart()}>clear Cart</button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal : </span>
                            <strong>$ {cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax : </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total : </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}