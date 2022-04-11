import React, {Component} from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
    render(){
        return (
             <ProductConsumer>
                 {(value) => {
                     const {id, name, price, imageUrl, description, inCart} = 
                     value.detailProduct;
                     return (
                         <div className="container py-5">
                             <div className="row">
                                 <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{name}</h1>
                                 </div>
                             </div>
                             {/* end name*/}
                             {/* product info*/}
                             <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={imageUrl} className="img-fluid" alt="product"/>
                                </div>
                                {/*product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                <h4>
                                    price : <span>$</span>
                                    {price}
                                </h4><strong>
                                <p className="font-plain mt-3 mb-0">
                                    Description:
                                </p></strong>
                                <p className="font-plain">{description} </p>
                                
                                <div>
                                <Link to="/">
                                    <ButtonContainer>
                                        Back to Products
                                    </ButtonContainer>
                                </Link>
                                <ButtonContainer cart
                                disabled={inCart?true:false}
                                onClick={()=> {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}>
                                    {inCart? "inCart" : "add to Cart"}
                                </ButtonContainer>
                                </div>
                                </div>
                             </div>
                         </div>
                     );
                 }}
             </ProductConsumer>
        )
    }
}

 