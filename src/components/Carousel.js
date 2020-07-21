import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/0022_Engel_SW_2_21052019.jpg" class="d-block w-100" alt="Profile" />
        </div>
        <div class="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_960_720.jpg" class="d-block w-100" alt="Software Development" />
        </div>
        <div class="carousel-item">
          <img src="https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="Think about things differently" />
        </div>
        <div class="carousel-item">
          <img src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="Project Management" />
        </div>
        <div class="carousel-item">
          <img src="" class="d-block w-100" alt="Software Development" />
        </div>
        <div class="carousel-item">
          <img src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="IT Training" />
        </div>
      </div>
    </div>
  )
}

export default Carousel
