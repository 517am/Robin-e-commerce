import "./BestSellersItem.css";
import applePhones from "../../../assets/bestSellers/applePhones.png"

const BestSellersItem = (props) =>{
    return(
        <div className="BestSellersItem">
        <div className="BestSellersItemPicture">
          <img src={applePhones} alt="" />
        </div>
        <div className="BestSellersItemPrice">${props.price}</div>
        <div className="BestSellersItemBrand">{props.brand}</div>
      </div>
    )
}

export default BestSellersItem;