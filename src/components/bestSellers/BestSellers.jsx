import BestSellersItem from "./bestSellerItems/bestSellersItem";
import "./BestSellers.css";

const BestSellers = (props) => {
  return (
    <section className="BestSellers">
     
        <h2>Best Sellers</h2>
        <div className="bestSellersWrapper">
         <BestSellersItem price = "50.00" brand="APPLE"/>
         <BestSellersItem price = "50.00" brand="APPLE"/>
         <BestSellersItem price = "50.00" brand="APPLE"/>
         <BestSellersItem price = "50.00" brand="APPLE"/>
         <BestSellersItem price = "50.00" brand="APPLE"/>
         <BestSellersItem price = "50.00" brand="APPLE"/>
         <BestSellersItem price = "50.00" brand="APPLE"/>
         <BestSellersItem price = "50.00" brand="APPLE"/>
         <BestSellersItem price = "50.00" brand="APPLE"/>
         <BestSellersItem price = "50.00" brand="APPLE"/>
        </div>
     
    </section>
  );
};

export default BestSellers;
