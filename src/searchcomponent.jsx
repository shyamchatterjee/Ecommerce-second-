import { useContext, useEffect, useState } from "react";

import { Context } from "./appcontext";
import { Data } from "./axion";

let Search = () => {
  let counter = useContext(Context);
  let [text, settext] = useState("");
  // let [array,setarray] = useState([])
  let textFuntion = (e) => {
    settext(e.target.value);
  };
  useEffect(() => {
    // console.log(text, "text");
    if (text === "") {
      let api = async () => {
        let responce = await Data;
        counter.setdeta(responce.data.products);
      };
      api();
    } else {
      let filterfuntion = () => {
        let filteritem = counter.deta.filter((element) => {
          if (
            element.category.toLowerCase().includes(text.toLowerCase()) ||
            element.title.toLowerCase().includes(text.toLowerCase())
          ) {
            return element;
          }
        });
        console.log(filteritem);
        counter.setdeta(filteritem);
      };
      filterfuntion();
    }
  }, [text]);
  return (
    <>
      <input
        type="text"
        name=""
        id="text"
        placeholder="Search-product"
        value={text}
        onChange={textFuntion}
      />
    </>
  );
};
export default Search;
