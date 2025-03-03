import { useContext, useState } from "react";
import { Link } from "react-router";
import AddProduct from "./component/addproduct";
import { Context } from "./appcontext";

let Product = () => {
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
          <button className="buttons" onClick={buttons}>
            click
          </button>
          <div className="sideber" style={{ display: style }}>
            <div className="nav">
              <Link to="/">Home</Link>
              <Link to="/product">Product</Link>

              <Link to="/cart">
                <button className="cartbutton">{counter.cart.length}</button>
              </Link>
            </div>
          </div>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>

          <div className="link">
            <Link to="/cart">
              <button className="cartbutton">{counter.cart.length}</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="productcontener">
        <AddProduct />
      </div>
    </div>
  );
};
export default Product;
