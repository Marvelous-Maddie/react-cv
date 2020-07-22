import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={require("../assets/Profile.jpg")} class="d-block w-100" alt="Profile" />
        </div>
        <div class="carousel-item">
          <img src={require("../assets/Software-Development.jpg")} class="d-block w-100" alt="Software Development" />
        </div>
        <div class="carousel-item">
          <img src={require("../assets/Project-Management.jpg")} class="d-block w-100" alt="Project Management" />
        </div>
        <div class="carousel-item">
          <img src={require("../assets/IT-Training.jpg")} class="d-block w-100" alt="IT-Training" />
        </div>
      </div>
    </div>
  )
}

export default Carousel
