import "./GoodsItem.css";
import mountbland from "../../../assets/goods/mountbland.png";

const GoodsItem = (props) => {
  return (
    <div className="goodsItem">
      <img src={mountbland} alt="" />
      <div className="infoGoodsItem">
        <div className="goodsInfo">
          <p>{props.name}</p>
          <div className="rating">*****</div>
        </div>
        <div className="goodsPrice">
          <p>${props.price}</p>
          <button className="addToCart">
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;
