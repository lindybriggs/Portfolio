import React from "react";
import driveLogo from "../Images/google-drive-logo.png"

export default function Resume() {
    return (
        <section id="resumeCard" className="card">
            <div className='card-body'>
                <h2 id="Resume" className="card-title text-center lh-lg">RESUME</h2>
                <section>
                    <h5 className="text-center" ><img style={{ maxWidth: "2.2rem" }} src={driveLogo} alt="google drive logo"></img><a style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/17ircoVqvQXj4jCHsTpzbqCfAqwMjQ07D/view?usp=sharing">view pdf</a></h5>
                    {/* <h4>Developer Proficiencies</h4> */}
                    <p className="text-center"> HTML5 | CSS3 | ES6 | JavaScript | React.js | Node.js | Express.js | SQL | MySQL | Sequelize | MongoDB | Mongoose | GraphQL | Git | NPM | REST APIs | Agile Methodologies | Testing</p>
                </section>
            </div>
        </section>
    )
}

