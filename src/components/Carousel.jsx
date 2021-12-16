import React from "react";

function Carousel() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="2000">
          <img
            src="https://www.neutrogena.in/sites/neutrogena_in/files/slide-images/neutrogena-ultra-sheer-sunscreen.jpg"
            class="d-block w-100"
            alt="first"
          />
        </div>
        <div class="carousel-item" data-interval="2000">
          <img
            src="https://www.neutrogena.in/sites/neutrogena_in/files/slide-images/ntg_banner_neutrogena_oil_free_acne_face_wash_grapefruit.png"
            class="d-block w-100"
            alt="second"
          />
        </div>
        <div class="carousel-item" data-interval="2000">
          <img
            src="https://www.neutrogena.in/sites/neutrogena_in/files/slide-images/ntg_banner_neutrogena_deepclean_face_wash.png"
            class="d-block w-100"
            alt="third"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleInterval"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleInterval"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
