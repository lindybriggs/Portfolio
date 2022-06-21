import React from 'react';

const active = {
    color: "black"
}

const inactive = {
    color: "white"
}

export default function Nav({ currentPage, handlePageChange }) {
    console.log(currentPage)
    return (
        // className="navbar sticky-top"
        <nav>
            <ul id="ignorePadding">
                <li >
                    <a href="#Home" onClick={() => handlePageChange('Home')} style={currentPage === 'Home' ? active : inactive}>Home</a>
                </li>
                <li >
                    <a href="#About" onClick={() => handlePageChange('About')} style={currentPage === 'About' ? active : inactive}>About</a>
                </li>
                <li >
                    <a href="#Projects" onClick={() => handlePageChange('Projects')} style={currentPage === 'Projects' ? active : inactive}>Projects</a>
                </li>
                <li >
                    <a href="#Contact" onClick={() => handlePageChange('Contact')} style={currentPage === 'Contact' ? active : inactive}>Contact</a>
                </li>
                <li >
                    <a href="#Resume" onClick={() => handlePageChange('Resume')} style={currentPage === 'Resume' ? active : inactive}>Resume</a>
                </li>
            </ul>
        </nav>
    );
}
