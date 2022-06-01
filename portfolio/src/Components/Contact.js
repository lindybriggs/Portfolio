import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

const styles = {
    textDecoration: "none",
    padding: "3rem",
    color: "rgb(44, 62, 53)"
}

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
            <h2 id="Contact" className="card-title text-center lh-lg">CONTACT</h2>
            <section className="text-center">
                <p className="space d-inline"><a style={styles} href="https://github.com/lindybriggs">GitHub</a></p>
                <p className="space d-inline"><a style={styles} href="https://www.linkedin.com/in/lindy-briggs">LinkedIn</a></p>
                <p className="space d-inline"><a style={styles} href="mailto: briggs.lindy@yahoo.com">Email</a></p>
            </section>
            <div>
                <form className="form row justify-content-center">
                    <div className="col-sm-8 col-md-3">
                        <input
                            value={email}
                            name="email"
                            type="email"
                            onChange={handleInputChange}
                            placeholder="email"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-8 col-md-3">
                        <input
                            value={name}
                            name="name"
                            type="text"
                            onChange={handleInputChange}
                            placeholder="name"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-8 col-md-3">
                        <input
                            value={message}
                            name="message"
                            type="text"
                            onChange={handleInputChange}
                            placeholder="message"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-8 col-md-3">
                        <button className="btn btn-secondary" type="button" onClick={handleFormSubmit}>Submit</button>
                    </div>
                </form>
                <p className="text-center">Note: form backend currently inactive</p>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </section>
    )
}

