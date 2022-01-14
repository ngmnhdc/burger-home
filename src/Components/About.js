import React from 'react'
import aboutImg from '../images/about.png'

function About() {
    return (
        <div id="about">
            <div className="about-text">
                <h1>UPCOMING EVENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipis ac turpis ac turpis ac turpis ac turpis ac turpis ac
                    turpis ac turpis ac turpis ac turpis ac turp ipsum dolor sit amet, consectetur adipis ac turpis ac turpis
                    ac turpis ac turpis ac turpis ac turpis ac turpis ac turpis ac turpis ac turp ipsum dolor sit amet,
                    consectetur adipis ac turpis ac turpis ac turpis ac turpis ac turpis ac turpis ac turpis ac turpis ac </p>
            </div>
            <div className="about-img">
                <img src={ aboutImg } alt="about-image" />
            </div>
        </div>
    )
}

export default About
