import React from "react";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [expand, setexpand] = useState(false);
    const location = useLocation();
    const navRef = useRef();
    const toggleNav = () => {
        setexpand(!expand);
    };
    useEffect(() => {
        const closeDropdown = (e) => {
            if (!navRef.current.contains(e.target)) {
                setexpand(false);
            }
        };
        document.body.addEventListener("click", closeDropdown);
        return () => document.body.removeEventListener("click", closeDropdown);
    }, []);
    useEffect(() => {
        setexpand(false);
    }, [location]);
    return (
        <nav ref={navRef}>
            <div id="home">
                <Link to="/">Good Reads</Link>
            </div>
            <div className="spacer"></div>
            <ul className={expand ? "show" : ""}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#about">Categories</a>
                </li>
                <li>
                    <a href="#projects">About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <Link to={"/cart"}>Cart</Link>
                </li>
            </ul>
            <button id="hamburger" onClick={toggleNav}>
                <>&#x2630;</>
            </button>
        </nav>
    );
}
