import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">Sohel</div>

            <ul className={menuOpen ? "nav-links mobile-menu" : "nav-links"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skill">Skills</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <button className="hire-btn"><Link to="/contact">Hire Me</Link></button>
                </li>
            </ul>

            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
