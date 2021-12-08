import React from "react";

function Carousel() {
  return (
    // <div className="container">
    <div
      id="carouselExampleIndicators"
      className="carousel carousel-fade slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img
            src="https://www.neutrogena.in/sites/neutrogena_in/files/slide-images/neutrogena-ultra-sheer-sunscreen.jpg"
            className="d-block w-80"
            alt="firstimage"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://www.neutrogena.in/sites/neutrogena_in/files/slide-images/ntg_banner_neutrogena_deepclean_face_wash.png"
            className="d-block w-80"
            alt="secondimage"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://www.neutrogena.in/sites/neutrogena_in/files/slide-images/ntg_banner_neutrogena_oil_free_acne_face_wash_grapefruit.png"
            className="d-block w-80"
            alt="thirdimage"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    // </div>
  );
}

export default Carousel;
