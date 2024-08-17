// frontend/src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../public/css/Header.css';
import logo from '../assets/Logo.png';



function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header>
            <div className="logo">
                <Link to="/"><img src={logo} alt='logo' /></Link>
            </div>
            <nav>
                <button onClick={toggleMenu}>Menu</button>
                <ul className={menuOpen ? 'menu-open' : ''}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;