import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../images/logo.png'
import '../Styles/Navbar.css'

function Navbar() {

    const [nav, setNav] = useState(false)
    const changBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', changBackground)

    return (
        <nav className={ nav ? "nav active" : "nav" }>
            <Link to="main" className="logo" smooth={ true } duration={ 1000 }>
                <img src={ logo } alt="" />
            </Link>
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="main" smooth={ true } duration={ 1000 }>Home</Link></li>
                <li><Link to="products" smooth={ true } duration={ 1000 }>Products</Link></li>
                <li><Link to="about" smooth={ true } duration={ 1000 }>About</Link></li>
                <li><Link to="contact" smooth={ true } duration={ 1000 }>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
