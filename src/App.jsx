import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import Achievements from './components/Achievements'; 
import Contact from './components/Contact';
import Skills from './components/Skills';
import About from './components/About';

function App() {
  return (
    <div>
      {/* <h1>Hello from App!</h1> */}
      <Navbar />
      <Hero />
      <About/>
      <Projects />
      <Skills/>
      <Achievements />
      <Contact/>
       
       <Footer />
    </div>
  );
}

export default App;








