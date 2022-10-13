import "./Goods.css";
import GoodsItem from "./goodsItem/GoodsItem";

const Goods = () => {
  return (
    <section className="goods">
      <div className="wrapperGoods">
        <GoodsItem name="MONTBLANC" price="10" />
        <GoodsItem name="MONTBLANC" price="10" />
        <GoodsItem name="MONTBLANC" price="10" />
        <GoodsItem name="MONTBLANC" price="10" />
        <GoodsItem name="MONTBLANC" price="10" />
        <GoodsItem name="MONTBLANC" price="10" />
        <GoodsItem name="MONTBLANC" price="10" />
        <GoodsItem name="MONTBLANC" price="10" />
        <GoodsItem name="MONTBLANC" price="10" />
        <GoodsItem name="MONTBLANC" price="10" />
      </div>

      <button className="showMore">Show More</button>
    </section>
  );
};

export default Goods;
