import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import { Context } from "./appcontext";

let Single = () => {
  let allperams = useParams();
  console.log(allperams);
  let [array, setarray] = useState({});
  let counter = useContext(Context);
  useEffect(() => {
    let api = async () => {
      let responce = await axios.get(
        "https://dummyjson.com/products/" + allperams.elementid
      );
      console.log(responce.data)
      setarray(responce.data);
    };
    api();
  }, []);

  
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

      <div className="singlecontener">
        <Link to={"/buy"}>
          <div className="product">
            <img src={array?.images} height={100} width={100} alt="" />
            <h3 style={{ color: "black" }}>{array?.category}</h3>
            <p style={{ color: "red" }}>{array?.title}</p>
            <h4 style={{ color: "black" }}>{array?.brand}</h4>
            <p style={{ color: "green" }}>{"Rs. " + array?.price}</p>
            <button className="added" onClick={() => counter.buyNow(array)}>
              Buy now
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Single;
