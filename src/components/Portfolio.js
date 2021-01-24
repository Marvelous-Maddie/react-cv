import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  return (
  <div className="container-fluid p-5 bg-dark shadow-sm" id="portfolio">
    <h2 className="text-center" style={{color: "#b30059"}}>Portfolio</h2>
    <div className="d-flex justify-content-center flex-wrap mx-5">

      {/*The Book Club*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/The-Book-Club.JPG")} className="rounded float-left" alt="The book Club" style={{width: "18rem", height: "9rem"}} />
        <div className="ml-4">
          <h5 style={{color: "white", textDecoration: "underline"}}>
            The Book Club
            <a className="ml-4" href="https://the-book-club-2408.web.app/" style={{color: "#b30059"}}><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            <a className="ml-4" href="https://youtu.be/PhmN60Yi89I?t=900" style={{color: "#b30059"}}><FontAwesomeIcon icon={faYoutube} /></a>
          </h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Final project for the WBS Coding School</li>
            <li>Social network meets decentralised library</li>
            <li>Tech Stack: Firebase, Express.js, React.js, Redux, Material-UI</li>
            <li>Features: Authentication, Image Upload, CRUD Booklist, CRUD Postings and Comments, Notifications</li>
          </ul>
        </div>
      </div>

      {/*Simple*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/Simple.JPG")} className="rounded float-left" alt="Simple" style={{width: "18rem", height: "9rem"}} />
        <div className="ml-4">
          <h5 style={{width: "18rem", color: "white", textDecoration: "underline"}}>
            Simple
            <a className="ml-4" href="https://github.com/Marvelous-Maddie/Simple" style={{color: "#b30059"}}><FontAwesomeIcon icon={faGithub} /></a>
          </h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Personal project (work in progress)</li>
            <li>A simple facility management system</li>
            <li>Tech Stack: PostgreSQL / ElephantSQL, Node.js, Express.js, React.js, React-Bootstrap</li>
          </ul>
        </div>
      </div>

      {/*Recipes Blog*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/Recipes Blog.JPG")} className="rounded float-left" alt="Recipes Blog" style={{width: "18rem", height: "9rem"}} />
        <div className="ml-4">
          <h5 style={{width: "18rem", color: "white", textDecoration: "underline"}}>
            Recipes Blog
            <a className="ml-4" href="https://github.com/Marvelous-Maddie/recipes_group4" style={{color: "#b30059"}}><FontAwesomeIcon icon={faGithub} /></a>
            <a className="ml-4" href="https://how-not-to-cook-recipes.netlify.app/" style={{color: "#b30059"}}><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
          </h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Goup project (after 7 weeks of coding school)</li>
            <li>Tech Stack: Contentful (CRM/headless API), React.js, CSS, Bootstrap, Bootswatch</li>
          </ul>
        </div>
      </div>

      {/*MyToDoList*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/MyToDoList.JPG")} className="rounded float-left" alt="MyToDoList" style={{width: "18rem", height: "9rem"}} />
        <div className="ml-4">
          <h5 style={{width: "18rem", color: "white", textDecoration: "underline"}}>
            MyToDoList
            <a className="ml-4" href="https://github.com/Marvelous-Maddie/MyToDoList" style={{color: "#b30059"}}><FontAwesomeIcon icon={faGithub} /></a>
          </h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Personal project</li>
            <li>Tech Stack: Local Storage, React.js, Bootstrap, Bootswatch</li>
          </ul>
        </div>
      </div>

      {/*Video Player*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/placeholder.png")} className="rounded float-left" alt="Video Player" style={{width: "18rem", height: "9rem", padding: "1rem", border: "4px solid #696969"}} />
        <div className="ml-4">
          <h5 style={{width: "18rem", color: "white", textDecoration: "underline"}}>
            Video Player
            <a className="ml-4" href="https://github.com/Marvelous-Maddie/WBS-video-player" style={{color: "#b30059"}}><FontAwesomeIcon icon={faGithub} /></a>
          </h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Group project (after 5 weeks of coding school)</li>
            <li>Tech Stack: React.js, Bootstrap</li>
          </ul>
        </div>
      </div>

      {/*ToDo List*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/placeholder.png")} className="rounded float-left" alt="ToDo List" style={{width: "18rem", height: "9rem", padding: "1rem", border: "4px solid #696969"}} />
        <div className="ml-4">
          <h5 style={{width: "18rem", color: "white", textDecoration: "underline"}}>
            ToDo List
            <a className="ml-4" href="https://github.com/Marvelous-Maddie/WBS-todo" style={{color: "#b30059"}}><FontAwesomeIcon icon={faGithub} /></a>
            </h5>
          <ul style={{width: "18rem", color: "white", marginLeft: "-1.2rem"}}>
            <li>Group project (after 4 weeks of coding school)</li>
            <li>Tech Stack: Vanilla-Javascript, CSS, Bootstrap</li>
          </ul>
        </div>
      </div>

      {/*#1 Cook Book*/}
      <div className="d-inline-flex flex-row align-items-center m-5">
        <img src={require("../assets/placeholder.png")} className="rounded float-left" alt="#1 Cook Book" style={{width: "18rem", height: "9rem", padding: "1rem", border: "4px solid #696969"}} />
        <div className="ml-4">
          <h5 style={{width: "18rem", color: "white", textDecoration: "underline"}}>
            #1 Cook Book
            <a className="ml-4" href="https://github.com/Marvelous-Maddie/cookbook-group4" style={{color: "#b30059"}}><FontAwesomeIcon icon={faGithub} /></a>
          </h5>
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
