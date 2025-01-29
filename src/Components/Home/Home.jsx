import React, { useContext } from "react";
import { CartContext } from "../../App";
import Bookcard from "../Bookcard/Bookcard";
import "./Home.css";
import books from "../../Data/books.js";

export default function Home() {
    const { cart, setCart, saveCart } = useContext(CartContext);

    const addToCart=(id)=>{
        let newCart = {...cart,[id]:1};
        saveCart(newCart);
        setCart(newCart);
    }

    const removeFromCart=(id)=>{
        let newCart={...cart};
        delete newCart[id];
        saveCart(newCart);
        setCart(newCart);
    }

    return (
        <>
            <main>
                <div className="info" id="about">
                    <p className="fPara">Hello! Welcome to</p>
                    <p className="sPara">Good Reads</p>
                    <p className="tPara">Where Every Page Feels Like Magic</p>
                    <div>
                        <a href="#books">Discover</a>
                        <a href="#contact">Let's talk</a>
                    </div>
                </div>
            </main>
            <div id="books">
                <div className="books">
                    {books.map((val) => (
                        <Bookcard key={val.id} book={val} selected={cart[val.id]} addToCart={addToCart} removeFromCart={removeFromCart}></Bookcard>
                    ))}
                </div>
                <div className="booksTag">
                    <div className="line"></div>
                    <div className="follow">Books</div>
                    <div className="line"></div>
                </div>
            </div>
        </>
    );
}
