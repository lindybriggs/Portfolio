import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body id="column">

    <header>
        <h1>Lindy Briggs' Portfolio</h1>
        <nav>
            <ul>
                <li>
                    <a href="#aboutMe">About Me</a>
                </li>
                <li>
                    <a href="#myWork">My Work</a>
                </li>
                <li>
                    <a href="#contactMe">Contact Me</a>
                </li>
            </ul>
        </nav>
    </header>

    <section className="mainImage"></section>

    <main id="all">

        <section className="card">
            <h2 id="aboutMe" className="titles">About Me</h2>
            <p className="content">
                Welcome to my portfolio! My name's Lindy Briggs and I am learning to code through a full-stack web development bootcamp. We've learned so much in the past few months, including front and back end, and have combined the two recently to develop full stack applications. Thanks for stopping by, and please check out some of my work in the section below!
            </p>
        </section>

        <section className="card">
            <h2 id="myWork" className="titles">My Work</h2>
            <section className="content">
                <div className="try">
                    <a href="https://therecipeforsuccess.herokuapp.com/" target="_blank"><img className="bigWork" src="./Images/recipe4success.png" alt="full stack group project - the recipe for success" /></a> 
                    <h3>The Recipe for Success: <a href="https://github.com/mcjbyday/therecipeforsuccess">GitHub</a> </h3>
                </div>
                <div className="other1">
                    <a href="https://limitless-wave-23866.herokuapp.com/" target="_blank"><img className="otherWork1" src="./Images/noteTaker.png" alt="note taker app" /></a>
                    <h3>Note Taker: <a href="https://github.com/lindybriggs/Note-Taker">GitHub</a> </h3>
                </div>
                <div className="other2">
                    <a href="https://lindybriggs.github.io/hw5-scheduler/" target="_blank"><img className="otherWork2" src="./Images/scheduler.png" alt="another photo of my work" /></a>
                    <h3>Scheduler: <a href="https://github.com/lindybriggs/hw5-scheduler">GitHub</a></h3>
                </div>
            </section>
        </section>

        <section id="contactCard" className="card">
            <h2 id="contactMe" className="titles">Contact Me</h2>
            <section className="content">
                <p className="space"><a href="https://github.com/lindybriggs">Github</a></p>
                <p className="space"><a href="https://www.linkedin.com/in/lindy-briggs">LinkedIn</a></p>
                <p className="space"><a href="mailto: briggs.lindy@yahoo.com">Email</a></p>
                <p className="space"><a href="https://drive.google.com/file/d/1b-LsVq1alS6q4p9Jo7JQcQMyMVoedzOl/view?usp=sharing">Resume</a></p>
            </section>
        </section>
    </main>

</body>
    
  );
}

export default App;
