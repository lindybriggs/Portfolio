import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import selfPhoto from './Images/self-photo.jpg'

function App() {
  return (
    <body id="column">

      <header id="home">
        <h1>Lindy Briggs' Portfolio</h1>
        <Nav></Nav>
      </header>

      <section className="mainImage">
      <img src={selfPhoto} alt="self"/>;
      </section>

      <main id="all">
        <About></About>
        <Work></Work>
        <Contact></Contact>
        <Resume></Resume>
      </main>

    </body>
  );
}

export default App;
