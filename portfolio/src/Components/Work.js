import React from 'react';
import recipePhoto from '../Images/recipe4success.png'
import noteTakerPhoto from '../Images/noteTaker.png'
import schedulerPhoto from '../Images/scheduler.png'

export default function Work() {
    return (
        <section className="card">
            <h2 id="myWork" className="titles">My Work</h2>
            <section className="content">
                <div className="try">
                    <a href="https://therecipeforsuccess.herokuapp.com/" ><img className="bigWork" src={recipePhoto} alt="full stack group project - the recipe for success" /></a>
                    <h3>The Recipe for Success: <a href="https://github.com/mcjbyday/therecipeforsuccess">GitHub</a> </h3>
                </div>
                <div className="other1">
                    <a href="https://limitless-wave-23866.herokuapp.com/"><img className="otherWork1" src={noteTakerPhoto} alt="note taker app" /></a>
                    <h3>Note Taker: <a href="https://github.com/lindybriggs/Note-Taker">GitHub</a> </h3>
                </div>
                <div className="other2">
                    <a href="https://lindybriggs.github.io/hw5-scheduler/"><img className="otherWork2" src={schedulerPhoto} alt="another example of my work" /></a>
                    <h3>Scheduler: <a href="https://github.com/lindybriggs/hw5-scheduler">GitHub</a></h3>
                </div>
            </section>
        </section>
    )
};