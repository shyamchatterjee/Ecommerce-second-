import { createContext, useEffect, useState } from "react";

// import App from "./App.jsx";
// import { Data } from "./axion";
import { useSearchParams } from "react-router";
import axios from "axios";

export let Context = createContext(null);
export let Contextfuntion = ({ children }) => {
  let [deta, setdeta] = useState([]);

  let [cart, setcart] = useState([]);
  let [buy, setbuy] = useState([]);
  
  // let api = async () => {
  // let responce = await axios.get(
  // "https://dummyjson.com/products?limit=" + limit
  // );
  // setdeta(responce.data.products);
  // };
  useEffect(() => {
    let api = async () => {
      let responce = await axios.get(
        "https://dummyjson.com/products"
      );
      setdeta(responce.data.products);
    };
    api();
  }, []);

  let click = (element) => {
    let finditem = cart.find((item) => {
      if (item.id === element.id) {
        return item;
      }
    });
    if (finditem) {
      let filteritem = cart.filter((item) => {
        if (item.id !== element.id) {
          return item;
        }
      });
      setcart([...filteritem, { ...finditem, q: finditem.q + 1 }]);
    } else {
      setcart([...cart, { ...element, q: 1 }]);
    }
  };
  
  let buyNow = (element) => {
    let finditem = buy.find((item) => {
      if (item.id === element.id) {
        return item;
      }
    });
    if (finditem) {
      let filteritem = buy.filter((item) => {
        if (item.id !== element.id) {
          return item;
        }
      });
      setbuy([...filteritem, { ...finditem, q: finditem.q + 1 }]);
    } else {
      setbuy([...buy, { ...element, q: 1 }]);
    }
  };
  let remove = (element) => {
    let p = cart.filter((item) => {
      if (item.id !== element.id) {
        return item;
      }
    });
    setcart(p);
  };

  return (
    <Context.Provider
      value={{
        setdeta,
        deta,
        click,
        cart,
        buyNow,
        buy,
        remove
      
      }}
    >
      {children}
    </Context.Provider>
  );
};
