import "./PopularBrands.css";
import reebok from "../../assets/brandsCategory/reebok.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

const PopularBrands = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
    ],
  };

  return (
    <section className="popularBrands">
      <div>
        <h2>Popular brands</h2>
        <h2>See all</h2>
      </div>

      <div className="brandsCategories">
        <div className="categoriesItem">women</div>
        <div className="categoriesItem">men</div>
        <div className="categoriesItem">sport</div>
        <div className="categoriesItem">electronic</div>
        <div className="categoriesItem">books</div>
        <div className="categoriesItem">home</div>
        <div className="categoriesItem">fitness</div>
        <div className="categoriesItem">electronic</div>
        <div className="categoriesItem">technical city</div>
      </div>

      <div className="categoriesSlider">
        <div className="wrapperSlider">
          <Slider {...settings}>
            <div className="item">
              <img src={reebok} alt="" />
            </div>

            <div className="item">
              <img src={reebok} alt="" />
            </div>

            <div className="item">
              <img src={reebok} alt="" />
            </div>

            <div className="item">
              <img src={reebok} alt="" />
            </div>

            <div className="item">
              <img src={reebok} alt="" />
            </div>

            <div className="item">
              <img src={reebok} alt="" />
            </div>

            <div className="item">
              <img src={reebok} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
