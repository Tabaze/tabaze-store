import React from "react";
import "./Checkout.css";
import { workData, cartCheckOut } from "./../../data/workData";

const Checkout = () => {
    const cartItems = cartCheckOut.map((cartItem) => {
        const product = workData.find((p) => p.id === cartItem.id);
        return {
            ...product,
            quantity: cartItem.quantity,
            subtotal: product.price * cartItem.quantity,
        };
    });

    const shipping = 5;
    const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0) + shipping;

    return (
        <div className="checkout-main">
            <div className="subject">
                DailyUI #002 <br />
                <strong>Credit Card Checkout</strong>
            </div>

            <div className="checkout">
                <div className="order">
                    <h2>Checkout</h2>
                    <h5>Order #0101</h5>

                    <ul className="order-list">
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />
                                <h4>
                                    {item.title} <span>x{item.quantity}</span>
                                </h4>
                                <h5>${item.subtotal.toFixed(2)}</h5>
                            </li>
                        ))}
                    </ul>

                    <h5>Shipping</h5>
                    <h4>${shipping.toFixed(2)}</h4>

                    <h5 className="total">Total</h5>
                    <h1>${total.toFixed(2)}</h1>
                </div>

                <div className="payment">
                    <h2>Payment</h2>
                    <div className="card">
                        <div className="card-content">
                            <h5>Card Number</h5>
                            <h6 id="label-cardnumber">0000 0000 0000 0000</h6>
                            <h5>
                                Expiration<span>CVC</span>
                            </h5>
                            <h6 id="label-cardexpiration">
                                00 / 0000<span>000</span>
                            </h6>
                        </div>
                        <div className="wave"></div>
                    </div>

                    <div className="card-form">
                        <div className="field">
                            <input
                                type="text"
                                id="cardnumber"
                                name="cardnumber"
                                placeholder="1234 5678 9123 4567"
                                pattern="\d*"
                                title="Card Number"
                            />
                        </div>

                        <div className="field-box">
                            <div className="field">
                                <input
                                    type="text"
                                    id="cardexpiration"
                                    name="cardexpiration"
                                    placeholder="MM / YYYY"
                                    pattern="\d*"
                                    title="Card Expiration Date"
                                />
                            </div>

                            <div className="field">
                                <input
                                    type="text"
                                    id="cvc"
                                    name="cvc"
                                    placeholder="CVC"
                                    pattern="\d*"
                                    title="Card CVC"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;
