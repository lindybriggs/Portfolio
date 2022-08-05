import React from 'react';
import headShot from "../Images/head-shot.jpeg"

const imageStyle = {
    width: "10rem",
    borderRadius: "50%"
}

const paragraphStyle = {
    margin: "1.3rem",
    textAlign: "justify",
    textJustify: "inter-word"
}

export default function About() {
    return (
        <section id="resumeCard" className="card">
            <div className='card-body'>
                <h2 id="About" className="card-title text-center lh-lg">ABOUT</h2>
                <div className='row justify-content-center py-3 card-body'>
                    <img className='col-sm-9 col-md-3' style={imageStyle} src={headShot} alt="developer head shot"></img>
                    <p className="col-sm-9 col-md-7 text-justify" style={paragraphStyle}>
                        Full stack web developer with a passion for problem solving.
                        Leveraging analytical and strategic marketing background to improve web efficiency and system intuitiveness - keeping the end user in mind.
                        Excited to work hard, learn, grow, and develop long-term.
                    </p>
                </div>
            </div>
        </section>
    )
};