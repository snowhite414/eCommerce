import React from "react";

export default function CartColumn (){
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row font-plain">
                    <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Product Name</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Qty</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Total</p>
                    </div>
                </div>
            </div>
        );
    
}