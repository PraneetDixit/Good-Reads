import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";

export const CartContext = createContext();

function App() {
    const [cart, setCart] = useState({});

    const saveCart = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const getCart = () => {
        const cart = localStorage.getItem("cart");
        if (cart) {
            setCart(JSON.parse(cart));
        }
    };

    useEffect(() => {
        getCart();
    }, []);

    return (
        <>
            <CartContext.Provider value={{ cart, setCart, saveCart }}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                    <footer>
                        <div>
                        <span>
                            <a href="#">Privacy policy</a> <a href="#">Terms & Conditions</a>
                        </span>
                        <br/>
                        <span>
                            &copy; 2025 Good Reads. All rights reserved.
                        </span>
                        </div>
                        <a href="#">⬆</a>
                    </footer>
                </Router>
            </CartContext.Provider>
        </>
    );
}

export default App;
