import './App.css';
import React, { useState } from 'react';
import Navbarr from './Components/Navbar'
import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer'
import selfPhoto from './Images/self-photo.jpg'
import bigPic from './Images/mountains.JPG'

export default function App() {

  const initialState = window.location.href.split('#')[1] === undefined ? 'Home' : window.location.href.split('#')[1]

  const [currentPage, setCurrentPage] = useState(initialState)

  const renderPage = () => {
    if (currentPage === 'Home') {
      return ;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div id="column" >

      <header id="Home">
        <h1>Lindy Briggs</h1>
        {/* <Navbarr></Navbarr> */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} ></Nav>
      </header>

      {/* <section >
        <img src={selfPhoto} alt="self" className="mainImage"/>
      </section> */}
      <img src={bigPic} className="img-fluid" alt="Responsive image"></img>

      <main id="all" className='col-12'>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Resume></Resume>
      </main>

      <Footer></Footer>

      {/* {renderPage()} */}
    </div>
  );
}

