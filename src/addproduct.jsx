import { useContext } from "react";
import "./App.css";
import { Context } from "./appcontext";
import Button from "./buttonadd";
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
              <>
                {counter.mode == "light" ? (
                  <>
                    <Link
                      to={"/product/" + element.id + "/" + element.category}
                    >
                      <div className="product">
                        <img
                          src={element.images}
                          width="200px"
                          height="200px"
                          alt=""
                        />
                        <h3 style={{ color: "black" }}>{element.category}</h3>

                        <p style={{ color: "black" }}>{element.title}</p>
                        <h4 style={{ color: "red" }}>{element.brand}</h4>
                        <p>{element.reviews[0].comment}</p>
                        <p>{"**** " + element.rating + " rating"}</p>
                        <p style={{ color: "green" }}>
                          {"Rs. " + element.price}
                        </p>
                        <Button element={element} />
                      </div>
                    </Link>
                  </>
                ) : (
                  <Link to={"/product/" + element.id + "/" + element.category}>
                    <div
                      className="product"
                      style={{ backgroundColor: "#0F1A20" }}
                    >
                      <img
                        src={element.images}
                        width="200px"
                        height="200px"
                        alt=""
                      />
                      <h3 style={{ color: "white" }}>{element.category}</h3>

                      <p style={{ color: "white" }}>{element.title}</p>
                      <h4 style={{ color: "white" }}>{element.brand}</h4>
                      <p style={{ color: "white" }}>
                        {element.reviews[0].comment}
                      </p>
                      <p style={{ color: "white" }}>
                        {"**** " + element.rating + " rating"}
                      </p>
                      <p style={{ color: "green" }}>{"Rs. " + element.price}</p>
                      <Button element={element} />
                    </div>
                  </Link>
                )}{" "}
              </>
            );
          }
        })
      )}
    </div>
  );
};
export default AddProduct;
