import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";


function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">

            <div className="checkout_left">
                
                <img className="checkout_add"
                    src="https://spindigitalmedia.com/wp-content/uploads/2019/02/web-development.jpg"
                    alt=""
                />

                <div>
                    <h3> Hello, {user?.email} </h3>
                    <h2 className= "checkout_title"> Your Shopping Basket </h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                    {/*Basket Item*/}
                    
                </div>

            </div>

            <div className="checkout_right">

                <h2> SubTotal Items </h2>

                <Subtotal/>

            </div>
            
        </div>
    );
}

export default Checkout;
