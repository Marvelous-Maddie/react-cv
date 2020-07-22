import React from 'react';
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import About from "./components/About";
import Education from "./components/Education";
import Quote from "./components/Quote";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Contact />
      <About />
      <Education />
      <Quote />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
