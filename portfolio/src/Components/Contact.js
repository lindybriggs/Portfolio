import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        alert(`Hello ${name}`);

        setEmail('');
        setName('');
        setMessage('');
    }

    return (
        <section id="contactCard" className="card">
            <h2 id="Contact" className="titles">Contact Me</h2>
            <section className="content">
                <p className="space"><a href="https://github.com/lindybriggs">Github</a></p>
                <p className="space"><a href="https://www.linkedin.com/in/lindy-briggs">LinkedIn</a></p>
                <p className="space"><a href="mailto: briggs.lindy@yahoo.com">Email</a></p>
            </section>
            <form className="form">
                <input
                    value={email}
                    name="email"
                    type="email"
                    onChange={handleInputChange}
                    placeholder="email"
                />
                <input
                    value={name}
                    name="name"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="name"
                />
                <input
                    value={message}
                    name="message"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="message"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </section>
    )
}

