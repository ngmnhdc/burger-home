import React from 'react'
import '../Styles/Header.css'

function Header() {
    return (
        <div id="main">
            <div className="header-heading">
                <h3>It's great time for a good taste of burger</h3>
                <h1><span>BURGER</span> FOR<br />WEEK</h1>
                <p className="details">Lorem ipsum dolor sit amet, consectetur adip</p>
                <div className="header-btns">
                    <a href="#" className="header-btn">Order</a>
                </div>
            </div>
        </div>
    )
}

export default Header
