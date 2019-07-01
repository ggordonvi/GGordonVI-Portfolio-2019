import React from 'react';

// Components
import Navbar from './components/navbar';
import Banner from './components/banner';
// import SocialBar from './components/social-bar';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App" id="home">
      <Navbar />
      <Banner />
      {/* <SocialBar /> */}
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="skills">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
