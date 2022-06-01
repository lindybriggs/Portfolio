import React from 'react';

const active = {
    color: "black"
}

const inactive = {
    color: "white"
}

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#home" onClick={() => handlePageChange('Home')} style={currentPage === 'Home' ? active : inactive}>Home</a>
                </li>
                <li>
                    <a href="#aboutMe" onClick={() => handlePageChange('About')} style={currentPage === 'About' ? active : inactive}>About Me</a>
                </li>
                <li>
                    <a href="#myWork" onClick={() => handlePageChange('Work')} style={currentPage === 'Work' ? active : inactive}>My Work</a>
                </li>
                <li>
                    <a href="#contactMe" onClick={() => handlePageChange('Contact')} style={currentPage === 'Contact' ? active : inactive}>Contact Me</a>
                </li>
                <li>
                    <a href="#resume" onClick={() => handlePageChange('Resume')} style={currentPage === 'Resume' ? active : inactive}>Resume</a>
                </li>
            </ul>
        </nav>
    );
}
