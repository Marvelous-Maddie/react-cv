import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require("../assets/Profile.jpg")} className="d-block w-100" alt="Profile" />
        </div>
        <div className="carousel-item">
          <img src={require("../assets/Software-Development.jpg")} className="d-block w-100" alt="Software Development" />
        </div>
        <div className="carousel-item">
          <img src={require("../assets/Project-Management.jpg")} className="d-block w-100" alt="Project Management" />
        </div>
        <div className="carousel-item">
          <img src={require("../assets/IT-Training.jpg")} className="d-block w-100" alt="IT-Training" />
        </div>
      </div>
    </div>
  )
}

export default Carousel
