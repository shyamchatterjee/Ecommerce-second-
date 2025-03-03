import { useContext } from "react";
import "./App.css";
import { Context } from "../appcontext";
import Button from "../buttonadd";
import { Link } from "react-router";

let AddProduct = () => {
  let counter = useContext(Context);
  return (
    <div className="products">
      {counter.deta.length == 0 ? (
        <h2>Loading...</h2>
      ) : (
        counter.deta.map((element) => {
          if (
            element.category != "furniture" &&
            element.category != "fragrances"
          ) {
            return (
              <Link to={"/product/" + element.id + "/" + element.category}>
                <div className="product">
                  <img src={element.images} height={100} width={100} alt="" />
                  <h3 style={{ color: "black" }}>{element.category}</h3>
                  <p style={{ color: "black" }}>{element.title}</p>
                  <h4 style={{ color: "red" }}>{element.brand}</h4>
                  <p style={{ color: "green" }}>{"Rs. " + element.price}</p>
                  <Button element={element} />
                </div>
              </Link>
            );
          }
        })
      )}
    </div>
  );
};
export default AddProduct;
