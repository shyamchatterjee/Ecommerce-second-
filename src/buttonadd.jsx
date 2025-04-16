import { useContext, useState } from "react";
import { Context } from "./appcontext";
import { CiShoppingCart } from "react-icons/ci";
let Button = ({ element }) => {
  let [text, settext] = useState("Add to cart");
  let [color, setcolor] = useState("orange");
  let [dis, setdis] = useState(false);

  let counter = useContext(Context);
  let changetext = () => {
    setcolor("green");
    setdis(true);
    setTimeout(() => {
      setcolor("orange");
      setdis(false);
    }, 2000);
    settext("Added to cart");
    setTimeout(() => {
      settext("Add to cart");
    }, 2000);
  };
  return (
    // <button
      // style={{ backgroundColor: color }}
      // disabled={dis}
      // onClick={(e) => {
        // e.preventDefault(), counter.click(element);
        // changetext();
      // }}
      // className="added"
    // >
      // {text}
    // </button>
    <CiShoppingCart  style={{ color: color ,fontSize:"30px" , cursor:"pointer"}}
    disabled={dis}
    onClick={(e) => {
      e.preventDefault(), counter.click(element);
      changetext();
    }}
    />
  );
};
export default Button;
