import React from 'react';
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import About from "./components/About";
import Education from "./components/Education";
import Quote from "./components/Quote";
import Experience from "./components/Experience";

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

          <h1 id="skills">skills</h1>
          <h1>footer</h1>

    </div>
  );
}

export default App;
