import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe ();
    const elements = useElements ();

    return (
        <div className="payment">

            <div className="payment_container">
                <h1>
                    Checkout {<Link to="/checkout">{basket?.length} items</Link>}
                </h1>
               
                <div className="payment_section">

                    <div className="payment_title">
                        <h3>delivery address</h3>
                    </div>

                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>road/house</p>
                        <p>location</p>
                    </div>

                </div>

                <div className="payment_section">

                    <div className="payment_title">
                        <h3>review items and delivery address</h3>
                    </div>

                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                           />
                        ))}
                    </div>
                    
                </div>

                <div className="payment_section">

                    <div className="payment_title">
                        <h3>payment method</h3>
                    </div>

                    <div className="payment_details">
                        {/*Stripe function*/}
                    </div>
                    
                </div>

            </div>
            
        </div>
    );
}

export default Payment;
