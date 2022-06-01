import React from 'react';

const styles = {
    textDecoration: "none",
    padding: "1rem",
    color: "white"
}

const Footer = () => {
    return (
        <footer className="footer-copyright text-center py-3 bg-secondary">
            <a style={styles} href="https://github.com/lindybriggs">Github</a>
            <a style={styles} href="https://www.linkedin.com/in/lindy-briggs">LinkedIn</a>
        </footer>
    )
}

export default Footer