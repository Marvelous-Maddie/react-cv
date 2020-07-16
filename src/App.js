import React from 'react';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <h1 id="contact">contact</h1>
          <h1 id="about">about</h1>
          <h1 id="education">education</h1>
          <h1 id="experience">experience</h1>
          <h1 id="skills">skills</h1>
          <h1>footer</h1>
      </main>
    </div>
  );
}

export default App;
