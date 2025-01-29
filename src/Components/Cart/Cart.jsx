import React, { useContext } from "react";
import { CartContext } from "../../App";
import "./Cart.css";
import books from "../../Data/books";

export default function Cart() {
    const { cart,setCart, saveCart } = useContext(CartContext);

    const increment = (id) => {
        let newCart = { ...cart, [id]: cart[id] + 1 };
        saveCart(newCart);
        setCart(newCart);
    }

    const decrement = (id) => {
        let newCart = { ...cart, [id]: cart[id] - 1 };
        if (newCart[id] === 0) {
            delete newCart[id];
        }
        saveCart(newCart);
        setCart(newCart);
    }

    return (
        <div id="cart">
            <div className="cartInfo">
                {cart &&
                    Object.entries(cart).map(([id, val], ind) => (
                        <div className="cartItem">
                            <img
                                src={books[id-1].coverImage}
                                alt={books[id-1].title}
                            />
                            <div className="cartDetails">
                                <p className="cartTitle">{books[id-1].title}</p>
                                <p className="cartAuthor">
                                    by {books[id-1].author}
                                </p>
                                <div className="spacer"></div>
                                <div className="cartQuantity">
                                    <button onClick={()=>{decrement(id)}}>-</button>
                                    <span>{val}</span>
                                    <button onClick={()=>{increment(id)}}>+</button>
                                </div>
                            </div>
                            <div className="spacer"></div>
                            <div className="cartPrice">
                                ₹{books[id-1].price * val}
                            </div>
                        </div>
                    ))}
                    {cart && (<div id="checkout">
                      
                    </div>)}
                {!Object.values(cart).length && (
                    <p id="empty">
                        Your cart is empty. Explore our latest collections.
                    </p>
                )}
            </div>
            <div className="cartTag">
                <div className="line"></div>
                <div className="follow">Cart</div>
                <div className="line"></div>
            </div>
        </div>
    );
}
