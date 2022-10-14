import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

const styles = {
    textDecoration: "none",
    padding: "2rem",
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
            <div className='card-body'>
                <h2 id="Contact" className="card-title text-center lh-lg">CONTACT</h2>
                <section className="text-center my-3">

                    <p className="space d-inline">
                        <a style={styles} target="_blank" rel="noopener noreferrer" href="https://github.com/lindybriggs">
                            <i class="fab fa-github fa-2x" aria-hidden="true"></i>
                        </a></p>
                    <p className="space d-inline">
                        <a style={styles} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lindy-briggs/">
                            <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                        </a></p>
                    <p className="space d-inline">
                        <a style={styles} target="_blank" rel="noopener noreferrer" href="mailto:briggs.lindy@yahoo.com">
                            <i class="fas fa-envelope fa-2x" aria-hidden="true"></i>
                        </a></p>
                    <p className="space d-inline">
                        <a style={styles} target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1n6QhvcY4jyo33Y5MEH3WmQ4mKjh8KGJM/view?usp=sharing">
                            <i class="fas fa-file-pdf fa-2x" aria-hidden="true"></i>
                        </a></p>

                </section>

                    {/* <form className="form row justify-content-center mx-1">
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
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )} */}
            </div>
        </section>
    )
}


