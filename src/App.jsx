import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";

export const CartContext = createContext();

function App() {
    const [cart, setCart] = useState({});
    const [isVisible, setIsVisible] = useState(false);

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
        const handleScroll = () => {
            if (window.scrollY > 700) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
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
                    </footer>
                    <a href="#" id="top" style={isVisible?{display: "block"}:{display: "none"}}>⬆</a>
                </Router>
            </CartContext.Provider>
        </>
    );
}

export default App;
