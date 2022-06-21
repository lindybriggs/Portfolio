import React from 'react';
import recipePhoto from '../Images/recipe4success.png'
import noteTakerPhoto from '../Images/noteTaker.png'
import schedulerPhoto from '../Images/scheduler.png'
import expensePhoto from '../Images/expense-tracker.png'

export default function Projects() {
    return (
        <section className="card">
            <div className='card-body'>
                <h2 id="Projects" className="card-title text-center lh-lg">PROJECTS</h2>

                <section className="row justify-content-center">

                    <div className="col-sm-10 col-md-6 col-lg-3">
                        <div className="card text-center" >
                            <img src={expensePhoto} className="card-img-top" alt="projects day scheduler home page" />
                            <div className="card-body align-content-center">
                                <h5 className="card-title text-center">Expense Tracker</h5>
                                <a href="https://github.com/ggrove87/Expense-Tracker" className="btn btn-secondary m-1">GitHub</a>
                                <a href="https://nu-expense-tracker.herokuapp.com/" className="btn btn-secondary m-1">Deployed App</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 col-md-6 col-lg-3">
                        <div className="card text-center " >
                            <img src={recipePhoto} className="card-img-top" alt="recipe for success deployed homepage" />
                            <div className="card-body align-content-center">
                                <h5 className="card-title text-center">The Recipe for Success</h5>
                                <a href="https://github.com/mcjbyday/therecipeforsuccess" className="btn btn-secondary m-1">GitHub</a>
                                <a href="https://therecipeforsuccess.herokuapp.com/" className="btn btn-secondary m-1">Deployed App</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 col-md-6 col-lg-3">
                        <div className="card text-center" >
                            <img src={noteTakerPhoto} className="card-img-top" alt="note taker homepage" />
                            <div className="card-body align-content-center">
                                <h5 className="card-title text-center">Note Taker</h5>
                                <a href="https://github.com/lindybriggs/Note-Taker" className="btn btn-secondary m-1">GitHub</a>
                                <a href="https://limitless-wave-23866.herokuapp.com/" className="btn btn-secondary m-1">Deployed App</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 col-md-6 col-lg-3">
                        <div className="card text-center" >
                            <img src={schedulerPhoto} className="card-img-top" alt="projects day scheduler home page" />
                            <div className="card-body align-content-center">
                                <h5 className="card-title text-center">Projects Day Scheduler</h5>
                                <a href="https://github.com/lindybriggs/hw5-scheduler" className="btn btn-secondary m-1">GitHub</a>
                                <a href="https://lindybriggs.github.io/hw5-scheduler/" className="btn btn-secondary m-1">Deployed App</a>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </section >
    )
};