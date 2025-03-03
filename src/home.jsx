import { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Context } from "./appcontext";
import AddProduct from "./component/addproduct";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Search from "./searchcomponent";

let Home = () => {
  let [style, setstyle] = useState("none");

  let buttons = () => {
    setstyle("");
    if (style == "") {
      setstyle("none");
    }
  };

  let counter = useContext(Context);

  return (
    <div className="contener">
      <div className="navber">
        <div className="side">
          <FaBars
            className="buttons"
            onClick={buttons}
            style={{ color: "white" }}
          />
          <div
            className="sideber"
            style={{ display: style, cursor: "pointer" }}
          >
            <div className="nav">
              <Link to="/">Home</Link>
              <Link to="/product">Product</Link>

              <Link to="/cart">
                <button className="cartbutton">
                  <FaShoppingCart
                    className="cartimg"
                    style={{
                      color: "black",
                      fontSize: "15px",
                    }}
                  />
                  <p className={counter.cart.length === 0 ? "peradis" : "pera"}>
                    {counter.cart.length}
                  </p>
                </button>
              </Link>
            </div>
          </div>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>

          <div className="link">
            <Link to="/cart">
              <button className="cartbutton">
                <FaShoppingCart
                  className="cartimg"
                  style={{
                    color: "black",
                  }}
                />
                <div
                  className={
                    counter.cart.length === 0 ? "peradis" : "peracontener"
                  }
                >
                  <p className="pera">{counter.cart.length}</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="order">
        <h1 style={{ color: "orange" }}>Order Now!!</h1>
      </div>
      <Search />

      <div className="productcontener">
        <AddProduct />
      </div>
    </div>
  );
};
export default Home;
