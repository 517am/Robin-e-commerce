import "./App.css";
import Advertising from "./components/advertising/Advertising";
import BannerAndPromocode from "./components/bannerAndPromocode/BannerAndPromocode";
import BestSellers from "./components/bestSellers/BestSellers";
import CheckedGoods from "./components/checkedGoods/CheckedGoods";
import Footer from "./components/footer/Footer";
import Goods from "./components/goods/Goods";
import Header from "./components/header/Header";
import MediumBanner from "./components/mediumBanners/MediumBanners";
import PopularBrands from "./components/popularBrands/PopularBrands";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <BannerAndPromocode />
        <Advertising />
        <BestSellers />
        <MediumBanner />
        <Goods />
        <CheckedGoods />
        <PopularBrands />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
