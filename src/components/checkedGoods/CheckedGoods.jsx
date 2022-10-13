import "./CheckedGoods.css";
import GoodsItem from "../goods/goodsItem/GoodsItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

const CheckedGoods = () => {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className="checked">
      <h2>You have checked</h2>
      <div className="checkedGoods">
        <Slider {...settings}>
          <div>
            {" "}
            <GoodsItem name="MONTBLANC" price="10" />
          </div>
          <div>
            <GoodsItem name="MONTBLANC" price="10" />
          </div>
          <div>
            {" "}
            <GoodsItem name="MONTBLANC" price="10" />
          </div>
          <div>
            <GoodsItem name="MONTBLANC" price="10" />
          </div>
          <div>
            <GoodsItem name="MONTBLANC" price="10" />
          </div>
          <div>
            <GoodsItem name="MONTBLANC" price="10" />
          </div>
          <div>
            <GoodsItem name="MONTBLANC" price="10" />
          </div>
        </Slider>
      </div>
      <div className="prevGoods"></div>
      <div className="nextGoods"></div>
    </section>
  );
};

export default CheckedGoods;
