import React from 'react';

const Portfolio = () => {
  return (
  <div className="container-fluid p-5 bg-dark shadow-sm" id="portfolio">
    <h2 className="text-center" style={{color: "#b30059"}}>Portfolio</h2>
    <div className="d-flex justify-content-center flex-wrap mx-5">

      {/*The Book Club*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/The-Book-Club.JPG")} class="rounded float-left" alt="The book Club" style={{width: "18rem", height: "9rem"}} />
        <div className="ml-4">
          <h5 style={{color: "white", textDecoration: "underline"}}>The Book Club</h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Final project for the WBS Coding School</li>
            <li>Tech Stack: Firebase, Node.js, Express.js, React.js, Material-UI</li>
            <li>Features: Authentication, Image Upload, CRUD Booklist, CRUD Postings and Comments, Notifications</li>
          </ul>
        </div>
      </div>

      {/*Simple*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/Simple.JPG")} class="rounded float-left" alt="Simple" style={{width: "18rem", height: "9rem"}} />
        <div className="ml-4">
          <h5 style={{width: "18rem", color: "white", textDecoration: "underline"}}>Simple - A facility management system</h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Personal project (work in progress)</li>
            <li>Tech Stack: PostgreSQL / ElephantSQL, Node.js, Express.js, React.js, React-Bootstrap</li>
          </ul>
        </div>
      </div>

      {/*Recipes Blog*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/Recipes Blog.JPG")} class="rounded float-left" alt="Recipes Blog" style={{width: "18rem", height: "9rem"}} />
        <div className="ml-4">
          <h5 style={{width: "18rem", color: "white", textDecoration: "underline"}}>Recipes Blog</h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Goup project (after 7 weeks of coding school)</li>
            <li>Tech Stack: Contentful (CRM/headless API), React.js, CSS, Bootstrap, Bootswatch</li>
          </ul>
        </div>
      </div>

      {/*MyToDoList*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/MyToDoList.JPG")} class="rounded float-left" alt="book-club" style={{width: "18rem", height: "9rem"}} />
        <div className="ml-4">
          <h5 style={{width: "18rem", color: "white", textDecoration: "underline"}}>MyToDoList</h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Personal project</li>
            <li>Tech Stack: Local Storage, React.js, Bootstrap, Bootswatch</li>
          </ul>
        </div>
      </div>

      {/*Video Player*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/Simple.JPG")} class="rounded float-left" alt="book-club" style={{width: "18rem", height: "9rem"}} />
        <div className="ml-4">
          <h5 style={{width: "18rem", color: "white", textDecoration: "underline"}}>Video Player</h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Group project (after 5 weeks of coding school)</li>
            <li>Tech Stack: React.js, Bootstrap</li>
          </ul>
        </div>
      </div>

      {/*ToDo List*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/Simple.JPG")} class="rounded float-left" alt="book-club" style={{width: "18rem", height: "9rem"}} />
        <div className="ml-4">
          <h5 style={{width: "18rem", color: "white", textDecoration: "underline"}}>ToDo List</h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Group project (after 4 weeks of coding school)</li>
            <li>Tech Stack: Vanilla-Javascript, CSS, Bootstrap</li>
          </ul>
        </div>
      </div>

      {/*#1 Cook Book*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/Simple.JPG")} class="rounded float-left" alt="book-club" style={{width: "18rem", height: "9rem"}} />
        <div className="ml-4">
          <h5 style={{width: "18rem", color: "white", textDecoration: "underline"}}>#1 Cook Book</h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Group project (after 2 weeks of coding school)</li>
            <li>Tech Stack: HTML, CSS, Bootstrap</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
)}

export default Portfolio;
