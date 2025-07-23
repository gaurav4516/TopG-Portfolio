import "./App.css";
import About from "./components/About";

import Footer from "./components/Footer.jsx";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Certifications from "./components/Certifications";
import Skill from "./components/Skill.jsx";
import Contact from "./components/Contact.jsx";

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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
