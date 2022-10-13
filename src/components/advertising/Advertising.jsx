import "./Advertising.css";
import * as images from "../../assets/images";

const Advertising = () => {
  return (
    <section className="advertising">
     
        <div className="dealsAndOffers">
          <h2>Deals and offers</h2>
          <p>Hygiene equipments</p>
          <div className="timer">
            <ul>
              <li>
                <p className="timeElem">12</p>
                <p>Days</p>
              </li>
              <li>
                <p className="timeElem">12</p>
                <p>Hours</p>
              </li>
              <li>
                <p className="timeElem">50</p>
                <p>Min</p>
              </li>
              <li>
                <p className="timeElem">60</p>
                <p>Sec</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="smallBanners">
          <img src={images.smallBnr1} alt="" />
          <img src={images.smallBnr2} alt="" />
          <img src={images.smallBnr3} alt="" />
          <img src={images.smallBnr4} alt="" />
          <img src={images.smallBnr5} alt="" />
          <img src={images.smallBnr6} alt="" />
        </div>

    </section>
  );
};

export default Advertising;