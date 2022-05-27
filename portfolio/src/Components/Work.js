import React from 'react';

export default function Work() {
    return (
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
    )
};