import "./App.css";
import About from "./components/About";

import Footer from "./components/Footer.jsx";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Certifications from "./components/Certifications";
import Skill from "./components/Skill.jsx";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skill />
      <Projects />
      <Resume/>
      <Certifications/>
      
      <Footer />
    </>
  );
}

export default App;
