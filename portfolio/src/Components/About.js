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
            <h2 id="About" className="card-title text-center lh-lg">ABOUT</h2>
            <div className='row justify-content-center py-3 card-body'>
                <img className='col-sm-9 col-md-3' style={imageStyle} src={headShot} alt="developer head shot"></img>
                <p className="col-sm-9 col-md-7 text-justify" style={paragraphStyle}>
                    Full-stack web developer leveraging analytical marketing and media planning background to improve web efficiency and system intuitiveness. Certified in full stack development from Northwestern Bootcamps. Known as an organized, detail-oriented team player with a passion for problem solving.
                </p>
            </div>
        </section>
    )
};