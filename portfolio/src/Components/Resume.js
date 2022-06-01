import React from "react";
import driveLogo from "../Images/google-drive-logo.png"

export default function Resume() {
    return (
        <section id="resumeCard" className="card">
            <h2 id="Resume" className="card-title text-center lh-lg">RESUME</h2>
            <section>
                <h5 className="text-center" ><img style={{ maxWidth: "2.2rem" }} src={driveLogo} alt="google drive logo"></img><a style={{ textDecoration: 'none' }} href="https://drive.google.com/file/d/1b-LsVq1alS6q4p9Jo7JQcQMyMVoedzOl/view?usp=sharing">view pdf</a></h5>
                {/* <h4>Developer Proficiencies</h4> */}
                <p className="text-center"> Git | JavaScript | Node.js | React.js | CSS | HTML5 | Express.js | MERN Stack | MongoDB | Mongoose | MySQL | Sequelize</p>
            </section>
        </section>
    )
}

