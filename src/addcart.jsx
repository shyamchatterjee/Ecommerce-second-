import { useContext, useState } from "react";
import "./App.css";
import { Context } from "./appcontext";
import { Link } from "react-router";
let Cart = () => {
  let counter = useContext(Context);
  let [totals, settotal] = useState();
  let [styles, setstyle] = useState("none");
  let total = () => {
    let sum = 0;
    counter.cart.map((element) => {
      sum = sum + element.q + element.price;
    });
    settotal("   Rs. " + Math.floor(sum));
  };
  let stylefuntion = () => {
    setstyle("");
    if (styles == "") {
      setstyle("none");
    }
  };
  return (
    <div className="uppercontener">
      <div className="conteners">
        <Link to={"/"}>
          <button style={{ backgroundColor: "black" }} className="addeds">
            Back
          </button>
        </Link>

        <div className="totaldiv">
          <button
            style={{ backgroundColor: "black", color: "white" }}
            className="total"
            onClick={() => {
              total(), stylefuntion();
            }}
          >
            Grand price
          </button>
          <div style={{ display: styles }} className="totalcontener">
            <p style={{ fontSize: "20px", color: "blue" }}>Grand total</p>
            <h3>{totals}</h3>
          </div>
        </div>
        <div className="uppersingle">
          <div className="singleproduct">
            {counter.cart.map((element) => {
              return (
                <div className="pro">
                  <img src={element.images} height={100} width={100} alt="" />
                  <h3>{element.category}</h3>
                  <p>{element.title}</p>
                  <p>{element.q}</p>
                  <p>
                    {"Rs." +
                      element.price +
                      " x " +
                      element.q +
                      " = " +
                      "" +
                      "Rs. " +
                      element.price * element.q}
                  </p>
                  <button
                    className="remove"
                    onClick={() => counter.remove(element)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
