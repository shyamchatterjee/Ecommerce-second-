import { useContext, useState } from "react";
import { Context } from "./appcontext";
import { Link } from "react-router";

let Buy = () => {
  let counter = useContext(Context);
  console.log(counter.buy);
  let [sums, setsum] = useState();

  let click = () => {
    let sum = 0;
    counter.buy.map((element) => {
      sum = sum + element.price * element.q;
    });
    setsum("total product price : Rs. " + sum);
  };
  return (
    <div className="contener">
      <Link to={"/"}>
        <button
          style={{ marginTop: "20px", backgroundColor: "green" }}
          className="added"
        >
          Back
        </button>
      </Link>
      <div className="buycontener">
        {counter.buy.map((element) => {
          return (
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
              className="pros"
            >
              <img src={element.images} height={100} width={100} alt="" />
              <h3>{element.category}</h3>
              <p>{element.title}</p>

              <p>{"Rs. " + element.price}</p>
              <p>total {"Rs. " + element.q * element.price}</p>
              <h3>{"Rating : " + element.rating}</h3>
              <p>{element.reviews[0].comment}</p>
              <p>{element.reviews[1].comment}</p>
              <p>{element.reviews[2].comment}</p>
              <p>{element.shippingInformation}</p>
              <p>{"Count : " + element.q}</p>
              <p style={{ color: "green" }}>{"Rs. " + element.price}</p>
              <p style={{ color: "red" }}>
                total {"Rs. " + element.q * element.price}
              </p>
              <button className="totalproductbutton" onClick={click}>
                Total product price
              </button>
              <p> {sums}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Buy;
