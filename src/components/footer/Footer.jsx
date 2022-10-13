import "./Footer.css";
import visa from "../../assets/images/visa.png";
import masterCard from "../../assets/images/masterCard.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerListItem">
            <h2>Buers</h2>
            <ul>
              <li>How to make an order</li>
              <li>Order</li>
              <li>Payment Methods</li>
              <li>Return of goods</li>
              <li>Refunds</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="footerListItem">
            <h2>Partners</h2>
            <ul>
              <li>Sell on TechTrek</li>
              <li>Carriers</li>
              <li>Open the pick-up point</li>
              <li>Franchise pickup point</li>
            </ul>
          </div>

          <div className="footerListItem">
            <h2>Company</h2>
            <ul>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Details</li>
            </ul>
          </div>

          <div className="footerListItem">
            <h2>Social networks</h2>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>

        <p>
          2022 © TechTrek International - fashionable online store of clothes,
          shoes and accessories. All rights reserved. Delivery throughout SADC.
        </p>

        <div className="waysToPay">
          <img src={visa} alt="" />
          <img src={masterCard} alt="" />
        </div>
      </footer>

      <div className="toUp"></div>
      <div className="chat"></div>
    </>
  );
};

export default Footer;
