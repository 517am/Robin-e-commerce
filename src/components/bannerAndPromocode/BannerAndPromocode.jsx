import "./BannerAndPromocode.css";
import { slide1 } from "../../assets/images"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

const BannerAndPromocode = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 1
  };
    return(
        <section className="bannerAndPromocode">
          <div className="banner">
          <Slider {...settings}>
           <div> <img src={slide1} alt="" /></div>
           <div> <img src={slide1} alt="" /></div>
           <div> <img src={slide1} alt="" /></div>
           <div> <img src={slide1} alt="" /></div>
            </Slider>
           
          </div>

          <div className="promocode">
            <h3>Have a promo code?</h3>
            <div className="enterPromocode">
              <input
                type="text"
                placeholder="Enter promo code"
                name=""
                id=""
              />
              <button className="btnEnterPromocode"></button>
            </div>
            <a href="#">All Discounts and coupons</a>
            <hr />
            <h2>Login</h2>
            <p>Login in order to track orders.</p>
            <button className="loginOrRegister">Login or register</button>
          </div>
      </section>
    )
}

export default BannerAndPromocode;