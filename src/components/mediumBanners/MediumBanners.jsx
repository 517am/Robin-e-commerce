import "./mediumBanners.css";
import leftBnr from "../../assets/mediumBanners/leftBnr.png";
import rightBnr from "../../assets/mediumBanners/rightBnr.png";

const MediumBanner = () => {
  return (
    <section className="mediumBanners">
    
        <div className="bnrMedium">
          <img src={leftBnr} alt="" />
        </div>
        <div className="bnrMedium">
          <img src={rightBnr} alt="" />
        </div>
    
    </section>
  );
};

export default MediumBanner;
