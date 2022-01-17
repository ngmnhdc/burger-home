import React from 'react'
import '../Styles/Contact.css'

function Contact() {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div id="contact">
            <h1>BOOK YOUR TABLE</h1>
            <form id="form">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <input type="submit" value="BOOK" onClick={ handleSubmit } />
            </form>
        </div>
    )
}

export default Contact
