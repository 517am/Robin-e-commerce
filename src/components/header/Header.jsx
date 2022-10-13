import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="top">
        <div className="container ">
          <div className="logo">
            <img src={logo} alt="logotype" />
          </div>

          <div className="header-elements">
            <div className="deliver">
              <p>
                Deliver to <span>South Africa</span>
              </p>
            </div>
            <div className="search">
              <select name="" id="">
                <option value="All">All</option>
              </select>
              <input type="text" name="" id="" />
              <button></button>
            </div>
            <nav>
              <a href="#" className="profile">
                Profile
              </a>
              <a href="#" className="favorite">
                Favorite
              </a>
              <a href="#" className="orders">
                Orders
              </a>
              <a href="#" className="cart">
                Cart
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="container">
          <nav className="mainCategory">
            <a href="#" className="allCategories">
              All
            </a>
            <a href="#">Brands</a>
            <a href="#">Shops</a>
            <a href="#">Discounts</a>
            <a href="#">Clothes and Shoes</a>
            <a href="#">Children's products</a>
            <a href="#">Home & Garden</a>
            <a href="#" className="topFashion">
              Top Fashion
            </a>
            <a href="#">Electronics</a>
            <a href="#" className="btnSellWithUs">
              Sell with us
            </a>
            <a href="#" className="message">
              Message
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
